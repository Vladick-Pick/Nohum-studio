---
name: decision-routing-lite
description: Use when routing Product Bet Pilot decisions from evidence events and EV bands.
---

# Decision Routing Lite

## Purpose

Route product bets from evidence events and EV bands while preserving
governance boundaries.

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

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  `GATE_A_CANDIDATE` is never treated as Gate B or build approval.
