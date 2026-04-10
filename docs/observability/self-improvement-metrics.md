# Self-Improvement Metrics

## Program Metrics

| Metric | Definition | Owner | Trigger |
|---|---|---|---|
| `time_to_first_valid_payment` | elapsed time from `queued` or `build_start_at` to first `valid` external payment | `CEO` | primary control metric |
| `time_from_queued_venture_to_stable_$5k_MRR` | elapsed time from queue promotion to stable `$5k MRR` state | `CEO` | strategic north-star, not control loop |
| `cost_per_valid_payment` | total studio cost allocated to a surface or venture divided by valid payments created | `CEO` | rising trend triggers allocation review |
| `rollback_rate` | share of limited-live experiments that end in `revert` | `Chief of Staff` | `> 0.25` over rolling `4w` triggers mutation-space tightening |
| `customer_harm_rate` | share of experiments that trip a customer-facing red guardrail | `Chief of Staff` | any weekly spike triggers boundary review |
| `human_boundary_invocations` | count of experiments routed to human approval | `CEO` | rising trend without business reason triggers policy review |
| `runtime_drift` | count of confirmed drift events between package intent and live runtime | `Agent Mechanic` | any critical drift becomes remediation work |
| `agent_self_review_coverage` | share of active agents that emitted at least one recent self-review or explicit no-change note | `Chief of Staff` | `< 0.90` over rolling `14d` triggers cadence correction |
| `experiment_memory_write_rate` | share of completed experiments written to registry with a final decision | `Agent Mechanic` | must stay `= 1.0` |

## Decision Rules

- optimize the primary metric for the target `process_surface`
- do not accept a rollout that improves a local metric while degrading a studio guardrail
- do not promote any governance-sensitive change without a recorded human boundary decision
