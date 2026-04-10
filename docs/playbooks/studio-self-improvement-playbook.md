# Studio Self-Improvement Playbook

This playbook defines the default improvement loop for NoHum Studio.

## Core Loop

1. detect a gap through metrics, failure traces, world-model drift, or agent self-review
2. register one named `process_surface`
3. write one `process-experiment-record`
4. capture a baseline and replay slice
5. run `replay`
6. run `shadow`
7. run `limited_live` when allowed
8. create one `promotion-decision`
9. either `roll_out`, `continue_limited`, `discuss`, `do_not_roll_out`, or `revert`
10. update world-model reports and experiment memory

## Roles

- `Chief of Staff`
  - owns the improvement backlog
  - ranks opportunities across teams
  - may approve low and medium risk changes that do not cross human boundaries
- `Agent Mechanic`
  - changes skills, instruction bundles, routing, runtime wiring, and eval harnesses
  - runs replay, rollback, and prevention work
- `CEO`
  - approves cross-surface changes and escalates human-boundary cases

## Eval Rings

- `replay`
  - historical data only
  - no live behavior change
- `shadow`
  - candidate variant runs without controlling the live output
- `limited_live`
  - one bounded live slice, one owned surface, explicit rollback path
- `canonical`
  - promoted operating behavior

Customer-facing, revenue-affecting, and cross-team changes must pass through `limited_live`.

## Allowed Mutations

- prompt template
- routing logic
- sequence or order
- threshold
- fallback strategy
- handoff artifact shape
- review rubric

## Not In Routine Mutation Space

- policy change
- budget envelope change
- payment validity rule change
- legal framing
- secret or credential policy
- board authority
- irreversible external actions

## Guardrails

Every experiment must state:

- one primary metric
- explicit guardrails
- rollback trigger
- risk class
- whether a human boundary exists

If the company and customer world models disagree materially, the default decision is `discuss` or `revert`, never silent rollout.
