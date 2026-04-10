# Factory Health Metrics

NoHum needs factory observability in addition to venture observability.

## Core Metrics

| Metric | Source and definition | Threshold / trigger | Owner | Review task |
|---|---|---|---|---|
| active ventures count | number of ventures in `build` or `launch` | must stay `<= 1` | `CEO` | `tasks/daily-ceo-operating-review/TASK.md` |
| queued ventures count | number of ventures in `queued` | must stay `<= 1` | `Research Lead` | `tasks/daily-research-lead-queue-refresh/TASK.md` |
| queue freshness | age of the queued winner | `> 14d` requires refresh, `> 30d` returns to research | `Research Lead` | `tasks/daily-research-lead-queue-refresh/TASK.md` |
| `duplicate_suppression_hit_rate` | share of intake candidates matched to existing cases via `Decision Memory` before opening a new canonical card | `< 0.10` over rolling `14d` triggers duplicate-discipline audit | `Research Lead` | `tasks/daily-research-lead-queue-refresh/TASK.md` |
| `history_sync_success_rate` | ratio of closed research cases where `Research Registry`, `Decision Memory`, and `Eval Dataset` were synced from the canonical `Idea Card` within `24h` | `< 0.98` weekly triggers remediation packet | `Agent Mechanic` | `tasks/daily-agent-mechanic-runtime-audit/TASK.md` |
| `history_drift_count` | count of mismatches where derived history fields disagree with canonical `Idea Card` values | any value `> 0` at weekly audit becomes a corrective action item | `Agent Mechanic` | `tasks/weekly-org-hygiene-review/TASK.md` |
| `revisit_backlog_count` | number of `KILL FOR NOW` or revisit-tagged cases with `revisit_after` in the past and no reopened decision cycle | any case stale `> 7d` past revisit date triggers queue refresh action | `Research Lead` | `tasks/daily-research-lead-queue-refresh/TASK.md` |
| `kill_reason_distribution` | distribution of controlled primary kill reasons across closed `KILL` and `KILL FOR NOW` cases | any single reason crossing `60%` over `4w` triggers thesis and sourcing mix review | `Research Lead` | `tasks/weekly-board-review/TASK.md` |
| `human_intervention_rate_in_research_history` | share of history-sync attempts that required manual correction to resolve drift or missing links | `> 0.20` weekly triggers runtime and process hardening | `Agent Mechanic` | `tasks/daily-agent-mechanic-runtime-audit/TASK.md` |
| `research_case_closure_latency` | median and p90 duration from intake start to final research verdict on canonical `Idea Card` | median `> 7d` or p90 `> 14d` triggers operating-capacity review | `Research Lead` | `tasks/weekly-board-review/TASK.md` |
| blocked issues count | active venture and Studio OS issues marked blocked or missing receiver | any blocking item older than same operating day triggers packet | `Chief of Staff` | `tasks/daily-chief-of-staff-blocked-work-review/TASK.md` |
| stale issues count | active work with no meaningful owner update | any active venture item stale beyond 24h triggers reroute | `Chief of Staff` | `tasks/daily-chief-of-staff-blocked-work-review/TASK.md` |
| failed recurring tasks | recurring cadence runs that ended without artifact | any occurrence triggers runtime audit | `Agent Mechanic` | `tasks/daily-agent-mechanic-runtime-audit/TASK.md` |
| repeated runtime failures by agent | same role fails 2 or more runs in 24h | immediate remediation packet | `Agent Mechanic` | `tasks/daily-agent-mechanic-runtime-audit/TASK.md` |
| unresolved escalations count | escalations without decision owner or next artifact | must be `0` by next CEO review | `CEO` | `tasks/daily-ceo-operating-review/TASK.md` |
| launch readiness debt | open Gate B or launch blockers on active venture | must be `0` before traffic ramp | `Launch Lead` | `tasks/daily-launch-lead-readiness-review/TASK.md` |
| substrate readiness debt | missing repo, env, release, or QA surfaces for build lane | must be `0` before build starts | `VP of Engineering` | `tasks/daily-vp-engineering-substrate-review/TASK.md` |
| support burden | critical support escalations, unresolved incidents, or unclear owner state | no critical item may cross the day boundary without owner | `Support Lead` | `tasks/daily-support-lead-signal-review/TASK.md` |
| budget burn versus cap | monthly spend against factory cap | must remain within policy unless board override exists | `CEO` | `tasks/weekly-board-review/TASK.md` |
| org hygiene drift | reporting-line drift, duplicate roles, or comments-only transitions | any critical drift becomes weekly action item | `Chief of Staff` | `tasks/weekly-org-hygiene-review/TASK.md` |
| `time_to_first_valid_payment` | elapsed time from queue or build start to the first `valid` external payment | primary studio control metric | `CEO` | `tasks/weekly-board-review/TASK.md` |
| `cost_per_valid_payment` | studio spend divided by valid payments created during the same review window | rising trend triggers allocation review | `CEO` | `tasks/weekly-board-review/TASK.md` |
| `rollback_rate` | share of limited-live process experiments ending in `revert` | `> 0.25` over rolling `4w` triggers mutation-space review | `Chief of Staff` | `tasks/weekly-self-improvement-review/TASK.md` |
| `customer_harm_rate` | share of experiments that tripped customer-facing red guardrails | any weekly spike triggers boundary review | `Chief of Staff` | `tasks/weekly-self-improvement-review/TASK.md` |
| `human_boundary_invocations` | count of experiments routed to human-only approval | rising without clear cause triggers policy review | `CEO` | `tasks/weekly-board-review/TASK.md` |
| `runtime_drift` | confirmed drift between package intent and live runtime configuration | any critical drift triggers remediation | `Agent Mechanic` | `tasks/daily-agent-mechanic-runtime-audit/TASK.md` |
| `agent_self_review_coverage` | share of active agents with a recent self-review or explicit no-change note | `< 0.90` over rolling `14d` triggers cadence correction | `Chief of Staff` | `tasks/weekly-self-improvement-review/TASK.md` |
| `experiment_memory_write_rate` | share of completed experiments written to registry with a final decision | must stay `= 1.0` | `Agent Mechanic` | `tasks/weekly-self-improvement-failed-experiment-audit/TASK.md` |

## Report Surfaces

- `docs/templates/operations/factory-health-report.md`
- `docs/templates/operations/org-hygiene-report.md`
- `docs/templates/operations/company-world-model-report.md`
- `docs/templates/operations/customer-world-model-report.md`
- `docs/templates/operations/process-experiment-record.md`
- `docs/templates/operations/promotion-decision.md`

## Rule

If a metric has no source, threshold, owner, and review task, it is not part of the operating machine yet.
