---
name: assumption-mapping
description: Use when mapping risks and assumptions for a Product Bet Pilot card.
---

# Assumption Mapping

## Purpose

Identify what must be true for a product bet to deserve the next step.

## Assumption Types

- `buyer`
- `pain`
- `payment`
- `channel`
- `activation`
- `retention`
- `build`
- `legal`
- `economics`

## Output

Use `docs/templates/product-bets/assumption-map.md`.

Select one riskiest assumption and explain what evidence would support or
contradict it.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  `GATE_A_CANDIDATE` is never treated as Gate B or build approval.
