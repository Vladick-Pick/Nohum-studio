# Decision 0006: Studio Self-Improvement System

## Decision

NoHum Studio v1 adds a company-wide self-improvement system as part of the operating machine.

The default operating rule is:

- `AI agents` perform recurring judgment and coordination work
- deterministic `scripts/` perform repeatable scoring, replay selection, guardrail checks, registry updates, rollback preparation, and world-model snapshots
- humans participate only at hard governance boundaries:
  - legal
  - financial
  - credential
  - irreversible
  - policy-sensitive
  - high-reputation

The control metric for this system is:

- `time_to_first_valid_payment`

The strategic north-star remains:

- `time_from_queued_venture_to_stable_$5k_MRR`

The studio-wide self-improvement topology is:

- `agent -> agent_self_review -> Chief of Staff selection -> Agent Mechanic mutation -> eval rings -> AI promotion or revert`

Direct production self-editing by agents is not allowed.

## Why

- NoHum already had reliability, cadence, and handoff machinery, but not a first-class improvement loop
- process drift and skill drift should be handled as operating surfaces, not as ad hoc prompt rewrites
- the studio needs one place to compare candidate process changes against outcome metrics and guardrails
- full human-in-the-loop approval as the default would slow the learning loop too much

## Implication

- every improvable surface must become a named `process_surface`
- every role may emit structured `agent_self_review`
- `Chief of Staff` owns the improvement portfolio
- `Agent Mechanic` owns implementation, replay, rollback, and prevention notes for approved mutations
- `CEO` owns cross-surface prioritization and approvals that cross governance boundaries
- failed and ambiguous variants remain in experiment memory; they are not deleted from history
