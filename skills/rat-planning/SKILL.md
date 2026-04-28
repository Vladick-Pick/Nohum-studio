---
name: rat-planning
description: Use when creating Product Bet Pilot riskiest-assumption test plans.
---

# RAT Planning

## Purpose

Choose the cheapest decision-changing test for the riskiest assumption.

## Required Fields

- assumption ID
- test type
- why this test
- expected decision impact
- payment proximity
- success threshold
- failure threshold
- max cost
- max time
- allowed actions
- forbidden actions

## Output

Use `docs/templates/product-bets/rat-plan.md`.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  `GATE_A_CANDIDATE` is never treated as Gate B or build approval.
