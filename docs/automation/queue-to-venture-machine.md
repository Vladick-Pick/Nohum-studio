# Queue To Venture Machine

This document defines the deterministic transition from one queued winner into one active venture lane.

## Preconditions

- queue contains at most one candidate
- candidate has a canonical queue package
- Gate A packet exists
- board decision is explicit
- no active venture already occupies the build and launch lane

## Required Artifacts

- `docs/templates/queue/queue-winner-record.md`
- `docs/templates/queue/gate-a-decision.md`
- `docs/templates/venture/venture-manifest.md`
- `docs/templates/venture/launch-brief.md`
- `docs/templates/venture/handoff-dossier.md`
- `docs/templates/venture/phase-transition-log.md`

## Execution Surface

- `tasks/promote-queued-venture/TASK.md`
- promotion may run only when queue preconditions and Gate A packet are complete
- the run must update the phase transition log in the same motion as venture bootstrap artifact creation

## Owner Chain

- `Research Lead` owns queue quality
- `CEO` owns allocation and final move request
- `Launch Lead` owns venture bootstrap artifacts
- `Chief of Staff` owns transition integrity

## Transition Rules

1. Research hands off exactly one queue package.
2. CEO requests Gate A decision against that package.
3. If Gate A fails, the candidate returns to research with explicit reason.
4. If Gate A passes, Launch Lead creates the venture bootstrap packet.
5. The new venture may not start build until Gate B passes and repo substrate is ready.

## Idempotency Rule

`Promote queued venture` must be safe to rerun:

- no duplicate venture lanes
- no duplicate root artifacts
- no duplicate build lane creation
- same `venture_id` reused across all generated artifacts

## Required Outputs

- one queue winner record with freshness and owner state
- one Gate A decision with `PASS / FAIL / RETRY / ESCALATE`
- one venture bootstrap packet rooted in a single `venture_id`
- one phase transition log entry for the move from `queued` to `venture`
