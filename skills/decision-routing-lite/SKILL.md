---
name: decision-routing-lite
description: Use when routing Product Bet Definition evidence into Gate B recommendations.
---

# Gate B Recommendation Routing

## Purpose

Route post-Gate-A product bets from evidence events and EV bands into Gate B
recommendations while preserving governance boundaries.

## Recommendation Outcomes

- `build`
- `revise`
- `test_more`
- `kill`

## Execution States

- `BLOCKED_MISSING_ACCESS`
- `APPROVAL_REQUIRED`
- `BLOCKED_BY_POLICY`

## Rules

- Keep business outcome separate from execution state.
- Gate B recommendation is not Gate B approval and not build approval.
- Weak payment proximity cannot create a build recommendation by itself.
- Every decision must cite evidence refs and EV bands.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
