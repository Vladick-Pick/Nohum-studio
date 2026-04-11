#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildRollbackPlan,
  decidePromotion,
  readJson,
  registerExperiment,
  runPilot,
  selectReplaySlice,
  snapshotWorldModel,
} from "./lib.mjs";

const baseDir = new URL("./test-fixtures/", import.meta.url);

const good = readJson(new URL("./test-fixtures/experiments/good-low-risk.json", import.meta.url));
const red = readJson(new URL("./test-fixtures/experiments/red-guardrail-live.json", import.meta.url));
const conflict = readJson(new URL("./test-fixtures/experiments/world-model-conflict.json", import.meta.url));
const boundary = readJson(new URL("./test-fixtures/experiments/governance-sensitive.json", import.meta.url));
const pilot = readJson(new URL("./test-fixtures/experiments/exp-001-skill-instruction-quality.json", import.meta.url));
const traces = readJson(new URL("./test-fixtures/traces/replay-input.json", import.meta.url));
const companySignals = readJson(new URL("./test-fixtures/traces/company-signals.json", import.meta.url));

assert.equal(decidePromotion(good).decision, "roll_out");
assert.equal(decidePromotion(red).decision, "revert");
assert.equal(decidePromotion(conflict).decision, "discuss");
assert.equal(decidePromotion(boundary).decision, "discuss");
assert.equal(decidePromotion(boundary).human_boundary_required, true);

const slice = selectReplaySlice(traces, {
  surface_id: "research_queue_quality",
  statuses: "failed,passed",
  limit: 2,
});
assert.deepEqual(
  slice.map((trace) => trace.trace_id),
  ["trace-001", "trace-002"],
);

const registry = registerExperiment([good], good);
assert.equal(registry.length, 1);
assert.equal(registry[0].experiment_id, good.experiment_id);

const worldModel = snapshotWorldModel("company", companySignals);
assert.equal(worldModel.kind, "company");
assert.equal(worldModel.signal_count, 3);
assert.equal(worldModel.top_candidate_surfaces[0].surface_id, "runtime_reliability");

const rollbackPlan = buildRollbackPlan(decidePromotion(red), red);
assert.equal(rollbackPlan.rollback_required, true);
assert.equal(rollbackPlan.revert_to_version, "research-routing-v1");

const pilotBundle = runPilot(pilot, companySignals);
assert.equal(pilotBundle.decision.decision, "roll_out");
assert.equal(pilotBundle.decision.human_boundary_required, false);
assert.equal(pilotBundle.rollback.rollback_required, false);
assert.equal(pilotBundle.company_world_model.kind, "company");
assert.equal(pilotBundle.experiment.surface_id, "skill_instruction_quality");

const tempRepo = fs.mkdtempSync(path.join(os.tmpdir(), "nohum-skill-check-"));
const checkAgentSkillsPath = fileURLToPath(new URL("../check-agent-skills.mjs", import.meta.url));
fs.mkdirSync(path.join(tempRepo, "agents", "runtime-ok"), { recursive: true });
fs.mkdirSync(path.join(tempRepo, "agents", "local-missing"), { recursive: true });
fs.mkdirSync(path.join(tempRepo, "skills"), { recursive: true });

fs.writeFileSync(
  path.join(tempRepo, "agents", "runtime-ok", "AGENTS.md"),
  "---\nskills:\n  - paperclip\n  - paperclip-knowledge\n---\n",
);
fs.writeFileSync(
  path.join(tempRepo, "agents", "local-missing", "AGENTS.md"),
  "---\nskills:\n  - fake-local-skill\n---\n",
);

assert.throws(() => {
  execFileSync("node", [checkAgentSkillsPath], {
    cwd: tempRepo,
    stdio: "pipe",
  });
});

fs.rmSync(path.join(tempRepo, "agents", "local-missing"), { recursive: true });
execFileSync("node", [checkAgentSkillsPath], {
  cwd: tempRepo,
  stdio: "pipe",
});

process.stdout.write("self-improvement tests passed\n");
