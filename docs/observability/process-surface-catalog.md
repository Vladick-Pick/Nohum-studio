# Process Surface Catalog

Every improvable surface in NoHum must be named, owned, and measured.

## Canonical Surfaces

| surface_id | Owner | Purpose | Primary metric | Company signal | Customer signal |
|---|---|---|---|---|---|
| `research_queue_quality` | `Research Lead` | keep the single queue slot filled with the best current candidate instead of stale or low-quality winners | queue freshness weighted by decision quality | queue age, evidence drift, duplicate suppression, closure latency | first-payment plausibility from research dossier |
| `queue_to_venture_promotion` | `Chief of Staff` | keep `queued -> venture` deterministic and idempotent | promotion cycle latency | transition drift, missing artifacts, reruns | launch-ready continuity from approved dossier |
| `gate_b_readiness` | `Launch Lead` | reduce launch-definition drift before build | time from venture bootstrap to Gate B readiness | readiness debt, unresolved assumptions | clarity of ICP, offer, and payment path |
| `build_release_pipeline` | `VP of Engineering` | reduce release friction and rollback risk | release readiness latency | failed checks, canary/regression rate, substrate debt | build stability reaching live customers |
| `launch_message_and_measurement` | `CMO` | improve first-customer conversion learning | time to trusted launch signal | measurement completeness, campaign drift | activation and conversion signal quality |
| `support_triage_and_feedback` | `Support Lead` | turn customer contact into structured learning and safe escalation | time to structured support signal | unresolved critical issues, synthesis lag | customer pain clustering and retention-impacting issues |
| `agent_harness_quality` | `Chief of Staff` | improve agent-level prompts, routing, and verification harnesses | repeated failure rate by agent | empty runs, retries, drift, self-review friction | downstream artifact quality |
| `skill_instruction_quality` | `Agent Mechanic` | keep skills and instruction bundles current, testable, and non-drifting | instruction drift rate | failed skill checks, stale bundles, missing docs | indirect through downstream artifact quality |
| `runtime_reliability` | `Agent Mechanic` | keep the runtime healthy enough for autonomous operation | runtime incident resolution time | task failures, workspace/tool drift | customer-impacting failures avoided |

## Rule

If a process is important but has no `surface_id`, owner, metric, and rollback path, it is not part of the self-improvement machine yet.
