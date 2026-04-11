import fs from "node:fs";
import path from "node:path";

export function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${stableStringify(value)}\n`, "utf8");
}

export function stableStringify(value) {
  return JSON.stringify(sortValue(value), null, 2);
}

function sortValue(value) {
  if (Array.isArray(value)) {
    return value.map(sortValue);
  }
  if (value && typeof value === "object") {
    return Object.keys(value)
      .sort()
      .reduce((acc, key) => {
        acc[key] = sortValue(value[key]);
        return acc;
      }, {});
  }
  return value;
}

export function decidePromotion(record) {
  const reasons = [];
  const guardrails = Array.isArray(record.guardrails) ? record.guardrails : [];
  const hasRedGuardrail = guardrails.some((guardrail) => guardrail.status === "red");
  const hasAmberGuardrail = guardrails.some((guardrail) => guardrail.status === "amber");
  const hasWorldModelConflict =
    Boolean(record.company_world_model_conflict) ||
    Boolean(record.customer_world_model_conflict);

  const primaryMetric = record.primary_metric ?? {};
  const higherIsBetter = primaryMetric.higher_is_better !== false;
  const baseline = Number(primaryMetric.baseline ?? 0);
  const candidate = Number(primaryMetric.candidate ?? 0);
  const improvementMin = Number(primaryMetric.improvement_min ?? 0);
  const delta = higherIsBetter ? candidate - baseline : baseline - candidate;
  const improvesPrimaryMetric = delta > improvementMin;

  if (record.data_quality_failure) {
    reasons.push("data_quality_failure");
    return decisionResult("revert", false, reasons, delta);
  }

  if (record.rollback_requested) {
    reasons.push("rollback_requested");
    return decisionResult("revert", false, reasons, delta);
  }

  if (hasRedGuardrail) {
    reasons.push("red_guardrail");
    return decisionResult(record.ring === "limited_live" ? "revert" : "do_not_roll_out", false, reasons, delta);
  }

  if (hasWorldModelConflict) {
    reasons.push("world_model_conflict");
    return decisionResult("discuss", Boolean(record.requires_human_boundary), reasons, delta);
  }

  if (!improvesPrimaryMetric) {
    reasons.push("no_primary_metric_improvement");
    return decisionResult("do_not_roll_out", false, reasons, delta);
  }

  if (Boolean(record.requires_human_boundary)) {
    reasons.push("human_boundary_required");
    return decisionResult("discuss", true, reasons, delta);
  }

  if (hasAmberGuardrail || record.ring === "replay" || record.ring === "shadow") {
    reasons.push(hasAmberGuardrail ? "amber_guardrail" : "needs_live_validation");
    return decisionResult("continue_limited", false, reasons, delta);
  }

  reasons.push("safe_improvement");
  return decisionResult("roll_out", false, reasons, delta);
}

function decisionResult(status, humanBoundaryRequired, reasons, delta) {
  return {
    decision: status,
    human_boundary_required: humanBoundaryRequired,
    primary_metric_delta: Number(delta.toFixed(6)),
    reasons,
  };
}

export function registerExperiment(registry, record) {
  const existing = Array.isArray(registry) ? [...registry] : [];
  const next = existing.filter((item) => item.experiment_id !== record.experiment_id);
  next.push(record);
  next.sort((a, b) => String(a.experiment_id).localeCompare(String(b.experiment_id)));
  return next;
}

export function selectReplaySlice(traces, options = {}) {
  const statuses = new Set(
    String(options.statuses ?? "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
  );

  const selected = (Array.isArray(traces) ? traces : [])
    .filter((trace) => !options.surface_id || trace.surface_id === options.surface_id)
    .filter((trace) => statuses.size === 0 || statuses.has(trace.status))
    .sort((left, right) => {
      const leftKey = `${left.occurred_at ?? ""}:${left.trace_id ?? ""}`;
      const rightKey = `${right.occurred_at ?? ""}:${right.trace_id ?? ""}`;
      return leftKey.localeCompare(rightKey);
    });

  const limit = Number(options.limit ?? 0);
  return limit > 0 ? selected.slice(0, limit) : selected;
}

export function snapshotWorldModel(kind, signals) {
  const sourceSignals = Array.isArray(signals) ? signals : [];
  const summary = {
    kind,
    signal_count: sourceSignals.length,
    severity: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
      unknown: 0,
    },
    candidate_surfaces: {},
  };

  for (const signal of sourceSignals) {
    const severity = summary.severity[signal.severity] === undefined ? "unknown" : signal.severity;
    summary.severity[severity] += 1;

    for (const surface of signal.candidate_surfaces ?? []) {
      summary.candidate_surfaces[surface] = (summary.candidate_surfaces[surface] ?? 0) + 1;
    }
  }

  const rankedSurfaces = Object.entries(summary.candidate_surfaces)
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .map(([surface_id, mentions]) => ({ surface_id, mentions }));

  return {
    kind,
    signal_count: summary.signal_count,
    severity: summary.severity,
    top_candidate_surfaces: rankedSurfaces,
  };
}

export function buildRollbackPlan(decision, experiment) {
  const shouldRollback = decision.decision === "revert" || Boolean(experiment.rollback_requested);

  return {
    experiment_id: experiment.experiment_id,
    surface_id: experiment.surface_id,
    rollback_required: shouldRollback,
    rollback_reason: shouldRollback ? decision.reasons.join(",") : "not_required",
    revert_to_version: experiment.baseline_version ?? null,
    candidate_version: experiment.candidate_version ?? null,
    targets: experiment.promoted_artifact_targets ?? [],
  };
}

export function runPilot(experiment, companySignals = []) {
  const decision = decidePromotion(experiment);
  const companyWorldModel = snapshotWorldModel("company", companySignals);
  const rollback = buildRollbackPlan(decision, experiment);

  return {
    experiment,
    decision,
    company_world_model: companyWorldModel,
    rollback,
  };
}

export function ensureParentDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}
