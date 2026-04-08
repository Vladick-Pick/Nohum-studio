# Research History Layer Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a Paperclip-compatible historical research layer for NoHum where the `Idea Card` remains the sole source of truth and three derived views (`Research Registry`, `Decision Memory`, `Eval Dataset`) become durable, queryable, and auditable without changing Paperclip core.

**Architecture:** Build entirely inside `Nohum-studio` on top of current Paperclip V1 surfaces: `issues`, `projects`, `goals`, `knowledge-items`, issue knowledge attachments, and activity logs. Do not depend on the proposed post-V1 plugin system. Keep one `Idea Card` per idea as the canonical artifact and treat every registry or dataset surface as derived state.

**Tech Stack:** Markdown contracts and templates in `Nohum-studio`, existing Paperclip REST/runtime surfaces, existing `paperclip` and `paperclip-knowledge` tool usage, and current NoHum task/agent prompt system.

---

## Non-Negotiable Constraints

1. Do not change Paperclip core.
2. Do not require the post-V1 plugin system to exist.
3. `Idea Card` stays the only primary research artifact.
4. Derived layers may summarize or index decisions, but may not become a second source of truth.
5. Parallel work must use disjoint write scopes.

## Runtime Baseline To Assume

Use these current Paperclip facts as fixed:

- upstream `master` is current as of `2026-04-08`, and the latest observed commit is `316790ea0a223f034ad69294b8733a06917939e9`
- V1 explicitly excludes both the plugin framework and a full knowledge-base subsystem
- the shipped, stable document surfaces today are company-scoped `knowledge-items` plus issue attachments
- company portability still centers on `company + agents`, not runtime knowledge history or project state

The implementation must therefore treat historical research as a NoHum-side runtime pattern built on stable Paperclip primitives, not as a core or plugin feature.

## Execution Shape

There is one short serial prerequisite, then five parallel workstreams, then one controller integration pass.

### Serial Prerequisite: Freeze Interface Contract

**Owner:** controller / lead architect

**Files:**
- Read only: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/contracts/intake-and-handoffs.md`
- Read only: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/templates/research/idea-card.md`
- Read only: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/README.md`
- Read only: `/Users/vladislavbogdan/.config/superpowers/worktrees/paperclip/upstream-package-knowledge-clean/server/src/routes/knowledge.ts`
- Read only: `/Users/vladislavbogdan/.config/superpowers/worktrees/paperclip/upstream-package-knowledge-clean/packages/shared/src/validators/knowledge.ts`

**Step 1: Freeze the canonical IDs and status vocabulary**

Lock the exact names and meanings for:

- `research_case_id`
- `candidate_fingerprint`
- `duplicate_of_case_id`
- `final_verdict`
- `primary_decision_reason`
- `secondary_decision_reasons`
- `revisit_policy`
- `revisit_after`
- `decision_confidence`

**Step 2: Freeze the historical layer split**

Lock this split before dispatching subagents:

- `Idea Card`: canonical per-idea truth
- `Research Registry`: compact derived index
- `Decision Memory`: anti-duplicate and revisit surface
- `Eval Dataset`: export-only learning surface

**Step 3: Freeze the Paperclip compatibility rule**

Write down one sentence for all workers:

`Use only current Paperclip issue and knowledge-item surfaces; do not design around plugins or core changes.`

**Done when:**

- controller has a one-paragraph invariant note ready to paste into worker prompts

---

## Parallel Workstream 1: Canonical Artifact Hardening

**Recommended subagent:** `architect`

**Write scope:**
- Modify: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/contracts/intake-and-handoffs.md`
- Modify: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/templates/research/idea-card.md`
- Create: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/decisions/0004-research-history-layer-v1.md`

**Purpose:** Extend the canonical `Idea Card` so it can fully drive history, duplicate control, revisit logic, and later eval extraction.

**Step 1: Extend the contract**

Add required fields to the intake and final-decision contract:

- `research_case_id`
- `normalized_domain`
- `normalized_category`
- `candidate_fingerprint`
- `duplicate_of_case_id`
- `duplicate_confidence`
- `final_verdict_date`
- `primary_decision_reason`
- `secondary_decision_reasons`
- `revisit_policy`
- `revisit_after`
- `reopen_conditions`
- `decision_owner`
- `decision_confidence`
- `evidence_completeness`
- `major_unknowns_count`
- `contradiction_count`

**Step 2: Introduce controlled reason codes**

Add a controlled decision taxonomy for machine-readable reasons, for example:

- `no_clear_icp`
- `weak_demand`
- `pricing_hidden`
- `insufficient_competitor_count`
- `bad_default_path_fit`
- `unclear_first_payment_path`
- `too_enterprise`
- `too_services_like`
- `evidence_stale`
- `too_many_unknowns`
- `economics_fragile`
- `duplicate_existing_case`

**Step 3: Mirror the contract in the template**

Update the `Idea Card` template so the new fields are explicit and located in the correct sections rather than buried in free text.

**Step 4: Add the decision record**

Create ADR `0004` that makes these architecture rules explicit:

- one canonical card
- derived layers only
- no shadow registry as primary truth
- no Paperclip core dependency

**Step 5: Verify**

Run:

```bash
rg -n "research_case_id|candidate_fingerprint|primary_decision_reason|revisit_policy" /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/contracts/intake-and-handoffs.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/templates/research/idea-card.md
```

Expected: all four fields appear in both the contract and the template.

**Step 6: Commit**

```bash
git add /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/contracts/intake-and-handoffs.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/templates/research/idea-card.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/decisions/0004-research-history-layer-v1.md
git commit -m "docs: harden idea card for research history"
```

**Acceptance criteria:**

- `Idea Card` can now carry every field needed for dedupe, verdict history, revisit policy, and later eval export
- reason taxonomy is controlled instead of prose-only

---

## Parallel Workstream 2: Derived History Surfaces

**Recommended subagent:** `worker_high`

**Write scope:**
- Create: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/history-layer.md`
- Create: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/templates/research/research-registry.md`
- Create: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/templates/research/decision-memory-index.md`
- Create: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/templates/research/eval-dataset-export.md`

**Purpose:** Define the three derived historical surfaces without turning them into competing truth stores.

**Step 1: Write the system document**

Create `history-layer.md` with:

- ontology of the three derived layers
- ownership rules
- update discipline
- allowed consumers
- retention rules
- override rules

**Step 2: Define `Research Registry`**

Create the compact registry template with fields such as:

- `research_case_id`
- `product_name`
- `normalized_domain`
- `normalized_category`
- `source_platform`
- `captured_at`
- `current_stage`
- `final_verdict`
- `primary_decision_reason`
- `secondary_decision_reasons`
- `score_total`
- `queue_candidate`
- `duplicate_of_case_id`
- `revisit_after`
- `last_reviewed_at`
- `idea_card_ref`

**Step 3: Define `Decision Memory`**

Create the anti-duplicate and revisit template with fields such as:

- `candidate_fingerprint`
- `normalized_domain`
- `related_case_ids`
- `active_duplicate_cluster`
- `last_kill_reason`
- `revisit_policy`
- `revisit_after`
- `reopen_conditions`
- `lookup_notes`

**Step 4: Define `Eval Dataset`**

Create the export schema with normalized row-level fields for later analysis and tuning:

- normalized intake snapshot
- machine-readable reason codes
- verdict label
- confidence labels
- unresolved ambiguity count
- later outcome fields when known

**Step 5: Verify**

Run:

```bash
rg -n "idea_card_ref|candidate_fingerprint|verdict label|revisit_after" /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/history-layer.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/templates/research
```

Expected: each derived layer exposes the field family it is responsible for.

**Step 6: Commit**

```bash
git add /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/history-layer.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/templates/research/research-registry.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/templates/research/decision-memory-index.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/templates/research/eval-dataset-export.md
git commit -m "docs: add derived research history surfaces"
```

**Acceptance criteria:**

- derived layers are clearly specified
- none of them can be mistaken for primary truth
- all later analytics and anti-duplicate use-cases have a formal storage surface

---

## Parallel Workstream 3: Workflow And Task Routing

**Recommended subagent:** `worker_high`

**Write scope:**
- Create: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/tasks/research-pre-intake-duplicate-check/TASK.md`
- Create: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/tasks/research-history-sync/TASK.md`
- Create: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/tasks/weekly-research-history-audit/TASK.md`
- Modify: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/tasks/daily-research-lead-queue-refresh/TASK.md`

**Purpose:** Turn the historical layer into executable work rather than passive documentation.

**Step 1: Add pre-card duplicate check**

Create a task that runs before a new `Idea Card` is opened and forces lookup against `Decision Memory`.

Required outputs:

- duplicate lookup result
- proceed / merge / stop recommendation
- matching `research_case_id` references when found

**Step 2: Add post-decision history sync**

Create a task that runs after final verdict and updates:

- `Research Registry`
- `Decision Memory`
- `Eval Dataset` export queue or note

**Step 3: Add periodic audit**

Create a weekly audit task that checks:

- missing registry rows
- cards without reason codes
- stale revisit entries
- inconsistent duplicate clusters

**Step 4: Update the existing daily review**

Extend `daily-research-lead-queue-refresh` so queue freshness also checks:

- whether registry state still matches the current winner
- whether the queued idea carries unresolved revisit or duplicate ambiguity

**Step 5: Verify**

Run:

```bash
rg -n "duplicate|registry|Decision Memory|Eval Dataset|revisit" /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/tasks
```

Expected: the new tasks and the updated daily review cover pre-intake, post-decision, and periodic audit.

**Step 6: Commit**

```bash
git add /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/tasks/research-pre-intake-duplicate-check/TASK.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/tasks/research-history-sync/TASK.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/tasks/weekly-research-history-audit/TASK.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/tasks/daily-research-lead-queue-refresh/TASK.md
git commit -m "docs: add research history workflow tasks"
```

**Acceptance criteria:**

- historical layer has clear trigger points
- no important history updates depend on memory or informal comments

---

## Parallel Workstream 4: Agent Prompt And Tool Discipline

**Recommended subagent:** `worker_high`

**Write scope:**
- Modify: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/agents/research-lead/AGENTS.md`
- Modify: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/agents/research-lead/TOOLS.md`
- Modify: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/agents/idea-scout/AGENTS.md`
- Modify: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/agents/idea-scout/TOOLS.md`

**Purpose:** Make the historical layer operational in the two roles that actually open and finalize research cases.

**Step 1: Update `Idea Scout`**

Add explicit rules:

- check known duplicates before proposing “new”
- attach duplicate evidence when similarity is non-trivial
- never bypass the decision memory lookup

**Step 2: Update `Research Lead`**

Add explicit rules:

- assign `research_case_id`
- keep kill reasons machine-readable
- record revisit policy on `KILL FOR NOW`
- update registry and decision memory after final verdict
- reject shadow side-tracking outside the canonical card

**Step 3: Update tool discipline**

Clarify how `paperclip` and `paperclip-knowledge` are used:

- `paperclip`: issue state, assignments, task comments, routing
- `paperclip-knowledge`: canonical card publication and durable historical artifacts

**Step 4: Verify**

Run:

```bash
rg -n "research_case_id|Decision Memory|duplicate|revisit|paperclip-knowledge" /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/agents/research-lead /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/agents/idea-scout
```

Expected: both roles now reference the same historical discipline and tool split.

**Step 5: Commit**

```bash
git add /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/agents/research-lead/AGENTS.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/agents/research-lead/TOOLS.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/agents/idea-scout/AGENTS.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/agents/idea-scout/TOOLS.md
git commit -m "docs: wire research history into scout and lead prompts"
```

**Acceptance criteria:**

- no new lead enters research without duplicate discipline
- no final verdict lands without history update discipline

---

## Parallel Workstream 5: Observability And Paperclip Compatibility

**Recommended subagent:** `architect`

**Write scope:**
- Create: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/paperclip-runtime-compatibility.md`
- Modify: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/observability/factory-health-metrics.md`
- Modify: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/atlas/artifact-and-knowledge-flow.md`

**Purpose:** Make it explicit how the historical layer maps to current Paperclip runtime and how reliability will be measured.

**Step 1: Document the compatibility map**

Create `paperclip-runtime-compatibility.md` with:

- what current Paperclip can do now
- what it cannot do now
- why NoHum must not depend on plugins
- how `Idea Card` and derived artifacts map to `knowledge-items` plus issue attachments

**Step 2: Extend observability**

Add metrics for:

- `duplicate_suppression_hit_rate`
- `history_sync_success_rate`
- `history_drift_count`
- `revisit_backlog_count`
- `kill_reason_distribution`
- `human_intervention_rate_in_research_history`
- `research_case_closure_latency`

**Step 3: Update the atlas**

Amend the artifact flow diagram and text so the research lane visibly feeds:

- `Idea Card`
- `Research Registry`
- `Decision Memory`
- `Eval Dataset`

with derived-state language kept explicit.

**Step 4: Verify**

Run:

```bash
rg -n "duplicate_suppression_hit_rate|history_sync_success_rate|Decision Memory|knowledge-items|plugins" /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/observability/factory-health-metrics.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/atlas/artifact-and-knowledge-flow.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/paperclip-runtime-compatibility.md
```

Expected: metrics, atlas, and compatibility notes agree on the same model.

**Step 5: Commit**

```bash
git add /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/paperclip-runtime-compatibility.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/observability/factory-health-metrics.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/atlas/artifact-and-knowledge-flow.md
git commit -m "docs: add research history observability and paperclip mapping"
```

**Acceptance criteria:**

- the team has one explicit compatibility document
- metrics exist to judge whether the historical layer is actually working

---

## Controller Integration Pass

**Owner:** controller / lead architect

**Run only after all five workstreams land.**

**Write scope:**
- Modify: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/README.md`
- Modify: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/operating-spec.md`
- Modify: `/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/mcp-access-matrix.md`

**Step 1: Cross-link the new surfaces**

Update the research module map and operating spec so the history layer is discoverable and normative.

**Step 2: Confirm there is no shadow truth**

Check that central docs say the same thing:

- `Idea Card` is primary truth
- registry and memory are derived state
- no Paperclip core changes are required

**Step 3: Verify**

Run:

```bash
rg -n "Research Registry|Decision Memory|Eval Dataset|Idea Card" /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/README.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/operating-spec.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/mcp-access-matrix.md
```

Expected: all three surfaces are referenced consistently and `Idea Card` remains canonical.

**Step 4: Final review**

Review all changed files for:

- terminology drift
- contradictory field names
- overlapping ownership
- accidental dependence on Paperclip plugins

**Step 5: Commit**

```bash
git add /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/README.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/operating-spec.md /Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/mcp-access-matrix.md
git commit -m "docs: integrate research history layer across nohum"
```

---

## Dispatch Map

Dispatch only after the serial prerequisite is frozen.

1. Worker A: Workstream 1
2. Worker B: Workstream 2
3. Worker C: Workstream 3
4. Worker D: Workstream 4
5. Worker E: Workstream 5

Each worker must be told:

- exact write scope
- no edits outside assigned files
- Paperclip core is off-limits
- plugin runtime is not available
- `Idea Card` remains canonical

## Merge Order

1. Merge Workstreams 1 and 2 first because they define fields and surfaces.
2. Merge Workstreams 3 and 4 next because they depend on the frozen interface but not on each other.
3. Merge Workstream 5 after the surface names are stable.
4. Run the controller integration pass last.

## Global Definition Of Done

The historical research layer is complete when:

1. A new idea can be checked against prior kill and duplicate history before a fresh card is opened.
2. Every final verdict updates a compact registry and a decision memory surface.
3. `KILL FOR NOW` carries explicit revisit policy instead of prose hand-waving.
4. The eval export can be built from canonical cards without manual reconstruction.
5. No step requires Paperclip core changes or a shipped plugin runtime.
