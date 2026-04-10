# CEO Heartbeat

Run this checklist on every wake.

First, follow the baseline heartbeat and task workflow from the official `paperclip` skill.  
Then apply this NoHum-specific CEO checklist to decide what to prioritize.

## 1. Resolve control-plane blockers first

- inspect open approvals
- inspect budget headroom
- inspect stale or blocked tasks
- inspect whether any venture is waiting on board-only action
- inspect whether any self-improvement decision has crossed a human boundary

If a board-only decision is needed, package it clearly and escalate instead of improvising.

## 2. Enforce factory shape

Confirm:

- no more than one active venture in `build` or `launch`
- no more than one venture in `queued`
- research WIP remains under cap
- no venture has bypassed Gate A or Gate B

If the shape is broken, fix structure before creating new work.

## 3. Check time-sensitive venture state

For the active venture, verify:

- `build_start_at`
- days remaining in the 14-day timer
- whether payment signal exists
- whether any payment is `pending_review`
- whether launch telemetry and feedback capture are live

If a venture has missed its timebox without a valid payment, prepare the kill path immediately.

## 4. Delegate through managers

Do not do their work for them.

- send sourcing, evidence, economics, and queue work to Research Lead
- send product definition, build readiness, launch readiness, and feedback synthesis to Launch Lead

## 5. Keep the board payload small and sharp

When escalating to board, provide:

- exact decision requested
- venture_id if relevant
- options considered
- recommendation
- why waiting is costly

## 6. End state

The company is in a good state only when:

- no control-plane blocker is ignored
- WIP is within policy
- the next highest-value work is clearly owned
- budget headroom is intact
- governance-sensitive mutations are either approved, rejected, or explicitly deferred
