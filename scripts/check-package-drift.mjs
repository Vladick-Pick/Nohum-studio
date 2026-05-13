import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

const expectedRootTasks = new Set([
  "tasks/bootstrap-company-access-and-secrets/TASK.md",
  "tasks/bootstrap-company/TASK.md",
]);

const importerDiscoveredBasenames = new Set([
  "AGENTS.md",
  "SKILL.md",
  "PROJECT.md",
  "TASK.md",
]);

const allowedImporterEntryPathPatterns = [
  /^agents\/[^/]+\/AGENTS\.md$/,
  /^skills\/.+\/SKILL\.md$/,
  /^projects\/[^/]+\/PROJECT\.md$/,
  /^tasks\/[^/]+\/TASK\.md$/,
];

const ignitionTask = "docs/templates/tasks/start-first-research-cycle.md";
const localAbsolutePathPattern = new RegExp("/" + "Users/");

const mustNotExist = [
  "paperclip.manifest.json",
  "scripts/generate-detailed-org.mjs",
  "templates",
  "docs/parked",
  "docs/archive/product-bets/product-bet-rat-v0",
  "agents/market-proof-analyst",
  "agents/market-signal-scout",
  "agents/research-synthesizer",
  "agents/rat-designer",
  "packages/product-bet-definition",
  "scripts/check-product-bet-package.mjs",
  "tasks/run-automated-product-bet-cycle/TASK.md",
  "tasks/run-product-bet-definition-sprint/TASK.md",
  "tasks/compile-product-bet-batch/TASK.md",
  "tasks/create-rat-plan-batch/TASK.md",
  "tasks/run-safe-rat-batch/TASK.md",
  "tasks/write-evidence-events/TASK.md",
  "tasks/route-product-bet-decisions/TASK.md",
  "tasks/run-pre-market-autoreason-batch/TASK.md",
  "tasks/write-product-bet-learning-report/TASK.md",
  "docs/templates/product-bets/decision-update.md",
  "docs/templates/product-bets/task-templates/compile-product-bet-definition.md",
  "docs/templates/product-bets/task-templates/run-product-bet-autoreason.md",
  "docs/templates/product-bets/task-templates/write-product-bet-evidence-events.md",
  "docs/templates/product-bets/task-templates/route-product-bet-gate-b-recommendation.md",
  "docs/templates/product-bets/task-templates/write-product-bet-learning-report.md",
  "docs/templates/product-bets/rat-plan.md",
  "docs/templates/product-bets/assumption-map.md",
  "docs/templates/product-bets/evidence-event.md",
  "docs/product-bets/rat-execution-boundaries.md",
];

const requiredProductBetValidationPaths = [
  "DESIGN.md",
  "skills/product-bet-validation-loop/SKILL.md",
  "skills/validation-surface-factory/SKILL.md",
  "skills/landing-cro-review/SKILL.md",
  "skills/anti-ai-slop-copy-review/SKILL.md",
  "skills/organic-distribution-testing/SKILL.md",
  "skills/community-prospecting/SKILL.md",
  "skills/engineering-as-marketing-wedge/SKILL.md",
  "skills/observation-window-evaluation/SKILL.md",
  "docs/product-bets/design.md",
  "docs/product-bets/validation-hosting.md",
  "docs/templates/product-bets/landing-design.md",
  "docs/templates/product-bets/copy-variant-matrix.md",
  "docs/templates/product-bets/waitlist-form-spec.md",
  "docs/templates/product-bets/surface-version.md",
  "docs/templates/product-bets/surface-qa.md",
  "docs/templates/product-bets/surface-conversion-quality-review.md",
  "docs/templates/product-bets/visual-conversion-review.md",
  "docs/templates/product-bets/anti-ai-slop-review.md",
  "docs/templates/product-bets/pain-language-map.md",
  "docs/templates/product-bets/search-intent-map.md",
  "docs/templates/product-bets/community-prospecting-map.md",
  "docs/templates/product-bets/thread-scorecard.md",
  "docs/templates/product-bets/free-value-wedge.md",
  "docs/templates/product-bets/organic-distribution-test-plan.md",
  "docs/templates/product-bets/traffic-attempt.md",
  "docs/templates/product-bets/traffic-source-report.md",
  "docs/templates/product-bets/observation-window.md",
  "docs/templates/product-bets/validation-cycle-report.md",
  "docs/templates/product-bets/validation-risk-map.md",
  "docs/templates/product-bets/validation-evidence-event.md",
  "docs/templates/product-bets/task-templates/run-product-bet-validation-sprint.md",
  "docs/templates/product-bets/task-templates/run-ai-hardening-loop.md",
  "docs/templates/product-bets/task-templates/compile-initial-product-bet-card.md",
  "docs/templates/product-bets/task-templates/run-autoreason-council.md",
  "docs/templates/product-bets/task-templates/build-validation-surface.md",
  "docs/templates/product-bets/task-templates/run-organic-distribution-test.md",
  "docs/templates/product-bets/task-templates/write-validation-evidence-events.md",
  "docs/templates/product-bets/task-templates/monitor-observation-window.md",
  "docs/templates/product-bets/task-templates/route-validation-result.md",
  "docs/templates/product-bets/task-templates/write-gate-b-recommendation.md",
  "docs/templates/product-bets/task-templates/write-validation-learning-report.md",
];

const requiredProductBetCardTokens = [
  "product_concept_name",
  "source_reference_name",
  "selected_test_revision",
  "landing_design_ref",
  "waitlist_form_spec_ref",
  "surface_conversion_quality_review_ref",
  "visual_conversion_review_ref",
  "organic_distribution_test_plan_ref",
  "traffic_attempt_refs",
  "traffic_source_report_ref",
  "observation_window",
  "behavior_signals",
  "validation_decision",
  "revise_offer",
  "revise_landing",
  "revise_channel",
  "open_fork",
];

const requiredProductBetNestedLoopChecks = [
  {
    file: "docs/ontology/nohum-operating-ontology.md",
    tokens: [
      "ONT-05A Product Bet Nested Loops",
      "ONT-05B Validation Surface Quality Gate",
      "assembly_loop",
      "internal_hardening_loop",
      "surface_readiness_loop",
      "surface_conversion_quality_review",
      "visual_conversion_review",
      "measurement_traffic_observation_loop",
      "evidence_routing_loop",
      "Synthetic audience work is allowed only inside `internal_hardening_loop`",
      "PROCESS_RESET_REQUIRED",
      "restart from\n`assembly_loop`",
    ],
  },
  {
    file: "docs/templates/product-bets/task-templates/run-product-bet-validation-sprint.md",
    tokens: [
      "Dependency Gates",
      "assembly_loop_pass",
      "hardening_decision_recorded",
      "selected_test_revision_exists",
      "surface_version_draft_exists",
      "surface_conversion_quality_pass",
      "visual_conversion_review_pass",
      "validation_hosting_ready",
      "measurement_contract_ready",
      "tracking_QA_passed",
      "observation_ready_for_review",
      "PROCESS_RESET_REQUIRED",
    ],
  },
  {
    file: "docs/playbooks/product-bet-definition-playbook.md",
    tokens: [
      "Nested Runtime Loops",
      "assembly_loop",
      "internal_hardening_loop",
      "surface_readiness_loop",
      "surface_conversion_quality_review",
      "visual_conversion_review",
      "measurement_traffic_observation_loop",
      "Synthetic audience acceptance is not a gate",
      "PROCESS_RESET_REQUIRED",
    ],
  },
  {
    file: "agents/launch-lead/HEARTBEAT.md",
    tokens: [
      "Downstream Task Preflight",
      "surface_conversion_quality_review: PASS",
      "visual_conversion_review: PASS",
      "claricont.com",
      "Product Bet Measurement Specialist is not started until `selected_test_revision`",
      "Do not flatten the Product Bet loop into a downstream task",
      "PROCESS_RESET_REQUIRED",
    ],
  },
  {
    file: "agents/product-bet-measurement-specialist/AGENTS.md",
    tokens: [
      "Do not begin measurement planning from a vague Product Bet idea",
      "`selected_test_revision` exists",
      "a `surface_version` draft/ref exists",
    ],
  },
  {
    file: "agents/landing-surface-builder/AGENTS.md",
    tokens: [
      "Required entry state",
      "Launch Lead selected exactly one `selected_test_revision`",
      "product_concept_name",
      "Product Definer and Product",
      "do not replace this pre-Gate-B `surface_version` ownership",
    ],
  },
  {
    file: "agents/product-definer/TOOLS.md",
    tokens: ["Keep paused until Gate B artifacts and templates are wired"],
  },
  {
    file: "agents/vp-of-engineering/AGENTS.md",
    tokens: ["approved Gate B packet and handoff dossier"],
  },
];

const requiredTaskTemplates = [
  "docs/templates/tasks/start-first-research-cycle.md",
  "docs/templates/tasks/run-market-signal-batch.md",
  "docs/templates/tasks/run-market-proof-lite-batch.md",
  "docs/templates/tasks/research-pre-intake-duplicate-check.md",
  "docs/templates/tasks/research-history-sync.md",
  "docs/templates/tasks/weekly-research-history-audit.md",
  "docs/templates/tasks/promote-queued-venture.md",
  "docs/templates/tasks/substrate-readiness-review.md",
  "docs/templates/tasks/daily-ceo-operating-review.md",
  "docs/templates/tasks/daily-chief-of-staff-blocked-work-review.md",
  "docs/templates/tasks/daily-research-lead-queue-refresh.md",
  "docs/templates/tasks/daily-launch-lead-readiness-review.md",
  "docs/templates/tasks/daily-vp-of-engineering-substrate-review.md",
  "docs/templates/tasks/daily-support-lead-signal-review.md",
  "docs/templates/tasks/daily-agent-mechanic-runtime-audit.md",
  "docs/templates/tasks/weekly-board-review.md",
  "docs/templates/tasks/portfolio-health-review.md",
  "docs/templates/tasks/weekly-factory-health-review.md",
  "docs/templates/tasks/weekly-org-hygiene-review.md",
  "docs/templates/tasks/weekly-self-improvement-review.md",
  "docs/templates/tasks/weekly-self-improvement-failed-experiment-audit.md",
  "docs/templates/tasks/weekly-skill-instruction-drift-review.md",
  "docs/templates/tasks/delegation-contract-audit.md",
];

const requiredKnowledgeImportPaths = [
  "scripts/import-company-knowledge.mjs",
  "docs/runbooks/company-knowledge-import.md",
];

function rel(filePath) {
  return path.relative(root, filePath).split(path.sep).join("/");
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function frontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  return match ? match[1] : "";
}

function extractScalar(fm, key) {
  const re = new RegExp(`^${key}:\\s*['"]?([^'"\\n]+?)['"]?\\s*$`, "m");
  return fm.match(re)?.[1]?.trim() ?? null;
}

function extractList(fm, key) {
  const lines = fm.split(/\r?\n/);
  const out = [];
  let inList = false;

  for (const line of lines) {
    if (line.trim() === `${key}:`) {
      inList = true;
      continue;
    }

    if (!inList) continue;
    if (line.trim() === "") continue;
    if (!line.startsWith(" ")) break;

    const match = line.match(/^\s*-\s*['"]?(.+?)['"]?\s*$/);
    if (match) out.push(match[1]);
  }

  return out;
}

function normalizeUrlKey(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-") || null;
}

function resolveInclude(baseFile, includeRef) {
  if (/^https?:\/\//.test(includeRef)) return null;
  const baseDir = path.dirname(baseFile);
  return path.normalize(path.join(baseDir, includeRef));
}

const visited = new Set();
const packageFiles = new Set();
const packageAgentSlugs = new Set();
const packageTaskPaths = new Set();
const packageAgentFiles = new Set();

function walkPackage(filePath) {
  const absolute = path.resolve(filePath);
  const key = rel(absolute);
  if (visited.has(key)) return;
  visited.add(key);
  packageFiles.add(key);

  if (!fs.existsSync(absolute)) {
    errors.push(`Included file does not exist: ${key}`);
    return;
  }

  const text = read(absolute);
  const fm = frontmatter(text);

  if (key.endsWith("/AGENTS.md") || key === "AGENTS.md") {
    const slug = extractScalar(fm, "slug") ?? path.basename(path.dirname(absolute));
    packageAgentSlugs.add(slug);
    if (key.startsWith("agents/")) packageAgentFiles.add(key);
  }

  if (key.endsWith("/TASK.md") || key === "TASK.md") {
    packageTaskPaths.add(key);
  }

  for (const includeRef of extractList(fm, "includes")) {
    const child = resolveInclude(absolute, includeRef);
    if (child) walkPackage(child);
  }
}

walkPackage(path.join(root, "COMPANY.md"));

if (!packageFiles.has(".paperclip.yaml")) {
  errors.push("COMPANY graph must explicitly include .paperclip.yaml so adapter extensions survive import UI selection");
}

for (const file of packageAgentFiles) {
  const text = read(path.join(root, file));
  const fm = frontmatter(text);
  const slug = extractScalar(fm, "slug") ?? path.basename(path.dirname(file));
  const name = extractScalar(fm, "name") ?? "";
  const normalizedName = normalizeUrlKey(name);
  const directorySlug = path.basename(path.dirname(file));
  if (slug !== directorySlug) {
    errors.push(`${file} slug must match its agents/ directory: ${slug} !== ${directorySlug}`);
  }
  if (normalizedName !== slug) {
    errors.push(`${file} slug must match Paperclip replace key from name: ${slug} !== ${normalizedName}`);
  }
  const adapterType = extractScalar(fm, "adapterType");
  if (adapterType !== "codex_local") {
    errors.push(`${file} must declare adapterType: codex_local`);
  }
  if (!/^adapterConfig:\s*\{.*"model"\s*:\s*"gpt-5\.5".*\}\s*$/m.test(fm)) {
    errors.push(`${file} must declare inline codex_local adapterConfig with model gpt-5.5`);
  }
  if (!/^adapterConfig:\s*\{.*"dangerouslyBypassApprovalsAndSandbox"\s*:\s*true.*\}\s*$/m.test(fm)) {
    errors.push(`${file} must allow the local Codex adapter to reach the Paperclip control plane`);
  }
}

function parsePaperclipYaml() {
  const filePath = path.join(root, ".paperclip.yaml");
  const lines = read(filePath).split(/\r?\n/);
  const agents = new Map();
  let inCompany = false;
  let inAgents = false;
  let currentAgent = null;
  let inAgentAdapter = false;
  let inAgentAdapterConfig = false;
  let inAgentRuntime = false;
  let inAgentRuntimeModelProfiles = false;
  let inAgentRuntimeCheapProfile = false;
  let companyBudget = null;

  for (const line of lines) {
    if (/^\S/.test(line)) {
      inCompany = line.trim() === "company:";
      inAgents = line.trim() === "agents:";
      currentAgent = null;
      inAgentAdapter = false;
      inAgentAdapterConfig = false;
      inAgentRuntime = false;
      inAgentRuntimeModelProfiles = false;
      inAgentRuntimeCheapProfile = false;
      continue;
    }

    if (inCompany) {
      const budget = line.match(/^\s{2}budgetMonthlyCents:\s*(\d+)\s*$/);
      if (budget) companyBudget = Number(budget[1]);
      continue;
    }

    if (inAgents) {
      const agent = line.match(/^\s{2}([a-z0-9-]+):\s*$/);
      if (agent) {
        currentAgent = agent[1];
        inAgentAdapter = false;
        inAgentAdapterConfig = false;
        inAgentRuntime = false;
        inAgentRuntimeModelProfiles = false;
        inAgentRuntimeCheapProfile = false;
        agents.set(currentAgent, {
          budgetMonthlyCents: 0,
          adapterType: null,
          adapterModel: null,
          adapterCommand: null,
          adapterBypass: null,
          runtimeCheapDisabled: false,
        });
        continue;
      }

      if (/^\s{4}\S/.test(line) && !/^\s{4}adapter:\s*$/.test(line) && !/^\s{4}runtime:\s*$/.test(line)) {
        inAgentAdapter = false;
        inAgentAdapterConfig = false;
        inAgentRuntime = false;
        inAgentRuntimeModelProfiles = false;
        inAgentRuntimeCheapProfile = false;
      }

      if (/^\s{4}adapter:\s*$/.test(line) && currentAgent) {
        inAgentAdapter = true;
        inAgentAdapterConfig = false;
        inAgentRuntime = false;
        inAgentRuntimeModelProfiles = false;
        inAgentRuntimeCheapProfile = false;
        continue;
      }

      if (/^\s{4}runtime:\s*$/.test(line) && currentAgent) {
        inAgentAdapter = false;
        inAgentAdapterConfig = false;
        inAgentRuntime = true;
        inAgentRuntimeModelProfiles = false;
        inAgentRuntimeCheapProfile = false;
        continue;
      }

      if (inAgentAdapter && /^\s{6}config:\s*$/.test(line)) {
        inAgentAdapterConfig = true;
        continue;
      }

      if (inAgentRuntime && /^\s{6}modelProfiles:\s*$/.test(line)) {
        inAgentRuntimeModelProfiles = true;
        inAgentRuntimeCheapProfile = false;
        continue;
      }

      if (inAgentRuntimeModelProfiles && /^\s{8}cheap:\s*$/.test(line)) {
        inAgentRuntimeCheapProfile = true;
        continue;
      }

      if (inAgentRuntimeCheapProfile && currentAgent && /^\s{10}enabled:\s*false\s*$/.test(line)) {
        agents.get(currentAgent).runtimeCheapDisabled = true;
      }

      if (inAgentAdapter && currentAgent) {
        const adapterType = line.match(/^\s{6}type:\s*['"]?([^'"\n]+?)['"]?\s*$/);
        if (adapterType) agents.get(currentAgent).adapterType = adapterType[1].trim();

        const adapterModel = line.match(/^\s{8}model:\s*['"]?([^'"\n]+?)['"]?\s*$/);
        if (inAgentAdapterConfig && adapterModel) {
          agents.get(currentAgent).adapterModel = adapterModel[1].trim();
        }

        const adapterCommand = line.match(/^\s{8}command:\s*['"]?([^'"\n]+?)['"]?\s*$/);
        if (inAgentAdapterConfig && adapterCommand) {
          agents.get(currentAgent).adapterCommand = adapterCommand[1].trim();
        }

        const adapterBypass = line.match(/^\s{8}dangerouslyBypassApprovalsAndSandbox:\s*(true|false)\s*$/);
        if (inAgentAdapterConfig && adapterBypass) {
          agents.get(currentAgent).adapterBypass = adapterBypass[1] === "true";
        }
      }

      const budget = line.match(/^\s{4}budgetMonthlyCents:\s*(\d+)\s*$/);
      if (budget && currentAgent) {
        agents.get(currentAgent).budgetMonthlyCents = Number(budget[1]);
      }
    }
  }

  return { agents, companyBudget };
}

const runtime = parsePaperclipYaml();
const runtimeAgents = new Set(runtime.agents.keys());

function diffSets(left, right) {
  return [...left].filter((item) => !right.has(item)).sort();
}

const inRuntimeNotPackage = diffSets(runtimeAgents, packageAgentSlugs);

if (inRuntimeNotPackage.length) {
  errors.push(`Agents in .paperclip.yaml but missing COMPANY graph: ${inRuntimeNotPackage.join(", ")}`);
}

const allAgentSlugs = new Set(
  fs
    .readdirSync(path.join(root, "agents"))
    .filter((slug) => fs.existsSync(path.join(root, "agents", slug, "AGENTS.md")))
    .sort(),
);

const missingImportedAgents = diffSets(allAgentSlugs, packageAgentSlugs);
const unexpectedImportedAgents = diffSets(packageAgentSlugs, allAgentSlugs);

if (missingImportedAgents.length) {
  errors.push(`Root import is missing company agents: ${missingImportedAgents.join(", ")}`);
}

if (unexpectedImportedAgents.length) {
  errors.push(`Root import has unknown agents: ${unexpectedImportedAgents.join(", ")}`);
}

const missingPaperclipExtensions = diffSets(allAgentSlugs, runtimeAgents);
const unknownPaperclipExtensions = diffSets(runtimeAgents, allAgentSlugs);

if (missingPaperclipExtensions.length) {
  errors.push(`.paperclip.yaml is missing import extension agents: ${missingPaperclipExtensions.join(", ")}`);
}

if (unknownPaperclipExtensions.length) {
  errors.push(`.paperclip.yaml has unknown import extension agents: ${unknownPaperclipExtensions.join(", ")}`);
}

for (const slug of allAgentSlugs) {
  const agent = runtime.agents.get(slug);
  if (!agent) continue;
  if (agent.adapterType !== "codex_local") {
    errors.push(`.paperclip.yaml agent ${slug} must declare adapter.type: codex_local`);
  }
  if (agent.adapterModel !== "gpt-5.5") {
    errors.push(`.paperclip.yaml agent ${slug} must declare adapter.config.model: gpt-5.5`);
  }
  if (agent.adapterCommand !== "/home/paperclip/.local/bin/codex") {
    errors.push(`.paperclip.yaml agent ${slug} must use the managed Codex CLI command path /home/paperclip/.local/bin/codex`);
  }
  if (agent.adapterBypass !== true) {
    errors.push(`.paperclip.yaml agent ${slug} must set adapter.config.dangerouslyBypassApprovalsAndSandbox: true so local Codex can reach the Paperclip control plane`);
  }
  if (!agent.runtimeCheapDisabled) {
    errors.push(`.paperclip.yaml agent ${slug} must disable runtime.modelProfiles.cheap for ChatGPT-backed Codex imports`);
  }
}

const unexpectedRootTasks = diffSets(packageTaskPaths, expectedRootTasks);
const missingRootTasks = diffSets(expectedRootTasks, packageTaskPaths);

if (unexpectedRootTasks.length) {
  errors.push(`Root import has non-bootstrap tasks: ${unexpectedRootTasks.join(", ")}`);
}

if (missingRootTasks.length) {
  errors.push(`Root import is missing bootstrap tasks: ${missingRootTasks.join(", ")}`);
}

if (!fs.existsSync(path.join(root, ignitionTask))) {
  errors.push(`Missing post-bootstrap ignition task template: ${ignitionTask}`);
}

if (packageTaskPaths.has(ignitionTask)) {
  errors.push(`Ignition task must not be imported as immediate day-1 backlog: ${ignitionTask}`);
}

const activeTaskFiles = fs
  .readdirSync(path.join(root, "tasks"))
  .flatMap((slug) => {
    const taskPath = path.join(root, "tasks", slug, "TASK.md");
    return fs.existsSync(taskPath) ? [rel(taskPath)] : [];
  })
  .sort();

for (const taskPath of activeTaskFiles) {
  if (!expectedRootTasks.has(taskPath)) {
    errors.push(`Root tasks directory contains non-bootstrap active task: ${taskPath}`);
  }
}

for (const templatePath of requiredTaskTemplates) {
  const absolute = path.join(root, templatePath);
  if (!fs.existsSync(absolute)) {
    errors.push(`Missing manager-created task template: ${templatePath}`);
  } else if (!packageFiles.has(templatePath)) {
    errors.push(`Manager-created task template is not in COMPANY graph: ${templatePath}`);
  } else {
    const kind = extractScalar(frontmatter(read(absolute)), "kind");
    if (kind !== "task_template") {
      errors.push(`Manager-created task template must use kind: task_template: ${templatePath}`);
    }
  }
}

for (const knowledgeImportPath of requiredKnowledgeImportPaths) {
  if (!fs.existsSync(path.join(root, knowledgeImportPath))) {
    errors.push(`Missing company knowledge import support path: ${knowledgeImportPath}`);
  }
}

if (!packageFiles.has("docs/runbooks/company-knowledge-import.md")) {
  errors.push("COMPANY graph must include docs/runbooks/company-knowledge-import.md so post-import knowledge repair is visible");
}

const importRunbook = read(path.join(root, "docs/import-runbook.md"));
const postImportChecklist = read(path.join(root, "docs/server-post-import-checklist.md"));
for (const [file, text] of [
  ["docs/import-runbook.md", importRunbook],
  ["docs/server-post-import-checklist.md", postImportChecklist],
]) {
  if (!text.includes("scripts/import-company-knowledge.mjs")) {
    errors.push(`${file} must require scripts/import-company-knowledge.mjs as the post-import knowledge bridge`);
  }
  if (!text.includes("--mirror-workspace-root")) {
    errors.push(`${file} must require --mirror-workspace-root so active docs are materialized into execution workspaces`);
  }
}

const budgetSum = [...runtime.agents.values()].reduce(
  (sum, agent) => sum + agent.budgetMonthlyCents,
  0,
);

if (runtime.companyBudget == null) {
  errors.push(".paperclip.yaml missing company.budgetMonthlyCents");
} else if (budgetSum > runtime.companyBudget) {
  errors.push(
    `.paperclip.yaml agent budgets exceed company cap: ${budgetSum} > ${runtime.companyBudget}`,
  );
}

for (const item of mustNotExist) {
  if (fs.existsSync(path.join(root, item))) {
    errors.push(`Forbidden stale path exists: ${item}`);
  }
}

for (const item of requiredProductBetValidationPaths) {
  if (!fs.existsSync(path.join(root, item))) {
    errors.push(`Missing Product Bet validation path: ${item}`);
  } else if (!packageFiles.has(item)) {
    errors.push(`Product Bet validation path is not in COMPANY graph: ${item}`);
  }
}

const productBetCardPath = path.join(root, "docs/templates/product-bets/product-bet-card.md");
const productBetCard = read(productBetCardPath);
for (const token of requiredProductBetCardTokens) {
  if (!productBetCard.includes(token)) {
    errors.push(`Product Bet Card missing validation token: ${token}`);
  }
}

const gateBRecommendation = read(path.join(root, "docs/templates/product-bets/gate-b-recommendation.md"));
for (const token of ["observation_window_complete", "organic_traffic_attempts_complete", "waitlist_or_signup_intent_measured"]) {
  if (!gateBRecommendation.includes(token)) {
    errors.push(`Gate B recommendation missing validation criterion: ${token}`);
  }
}

for (const check of requiredProductBetNestedLoopChecks) {
  const absolute = path.join(root, check.file);
  if (!fs.existsSync(absolute)) {
    errors.push(`Missing Product Bet nested-loop guard file: ${check.file}`);
    continue;
  }
  const text = read(absolute);
  for (const token of check.tokens) {
    if (!text.includes(token)) {
      errors.push(`${check.file} missing Product Bet nested-loop guard token: ${token}`);
    }
  }
}

for (const skillDir of fs.readdirSync(path.join(root, "skills")).sort()) {
  const tmpl = path.join(root, "skills", skillDir, "SKILL.md.tmpl");
  if (fs.existsSync(tmpl)) errors.push(`Stale skill template exists: ${rel(tmpl)}`);
}

for (const file of ["README.md", "MODULES.md"]) {
  const text = read(path.join(root, file));
  if (localAbsolutePathPattern.test(text)) {
    errors.push(`${file} contains a local absolute path`);
  }
  if (text.includes("paperclip.manifest.json")) {
    errors.push(`${file} references deleted paperclip.manifest.json`);
  }
}

for (const file of packageFiles) {
  const text = read(path.join(root, file));
  if (localAbsolutePathPattern.test(text)) {
    errors.push(`Package graph file contains a local absolute path: ${file}`);
  }
}

function walkFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolute = path.join(dir, entry.name);
    const relative = rel(absolute);
    if (relative.startsWith(".git/")) continue;
    if (entry.isDirectory()) {
      out.push(...walkFiles(absolute));
    } else {
      out.push(absolute);
    }
  }
  return out;
}

for (const filePath of walkFiles(root)) {
  const relative = rel(filePath);
  if (relative.startsWith(".git/")) continue;
  if (!importerDiscoveredBasenames.has(path.basename(relative))) continue;
  if (allowedImporterEntryPathPatterns.some((pattern) => pattern.test(relative))) continue;
  errors.push(`Import-discoverable runtime file outside active package surface: ${relative}`);
}

for (const filePath of walkFiles(root)) {
  const relative = rel(filePath);
  if (relative === "scripts/check-package-drift.mjs") continue;
  if (relative.startsWith("docs/archive/")) continue;
  if (!/\.(md|yaml|yml|json|mjs)$/.test(relative)) continue;

  if (relative.includes("product-bet-pilot") || relative.includes("run-product-bet-pilot")) {
    errors.push(`Active path still uses old Product Bet Pilot naming: ${relative}`);
  }

  const text = read(filePath);
  if (localAbsolutePathPattern.test(text)) {
    errors.push(`Active file contains a local absolute path: ${relative}`);
  }
  if (text.includes("product-bet-pilot-playbook.md") || text.includes("run-product-bet-pilot")) {
    errors.push(`Active file references old Product Bet Pilot path: ${relative}`);
  }
}

for (const filePath of walkFiles(path.join(root, "agents"))) {
  if (!filePath.endsWith("AGENTS.md")) continue;
  const text = read(filePath);
  const fm = frontmatter(text);
  const docs = extractList(fm, "docs");
  for (const doc of docs) {
    const docPath = path.join(path.dirname(filePath), doc);
    if (!fs.existsSync(docPath)) {
      errors.push(`${rel(filePath)} references missing companion doc: ${doc}`);
    }
  }
}

if (errors.length) {
  console.error("Package drift check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Package drift check passed.");
