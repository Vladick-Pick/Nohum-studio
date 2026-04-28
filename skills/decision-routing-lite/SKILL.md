---
name: decision-routing-lite
description: Use when routing Product Bet Pilot decisions from evidence events and EV bands.
---

# Decision Routing Lite

## Business Outcomes

- `KILL`
- `REVISE`
- `FORK`
- `TEST_MORE`
- `RESEARCH_REQUIRED`
- `GATE_A_CANDIDATE`

## Execution States

- `BLOCKED_MISSING_ACCESS`
- `APPROVAL_REQUIRED`
- `BLOCKED_BY_POLICY`

## Rules

- Keep business outcome separate from execution state.
- `GATE_A_CANDIDATE` is not Gate B and not build approval.
- Weak payment proximity cannot create Gate A candidacy by itself.
- Every decision must cite evidence refs and EV bands.
