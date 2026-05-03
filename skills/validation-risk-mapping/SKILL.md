---
name: validation-risk-mapping
description: Use when mapping validation risks for a Product Bet Validation card.
---

# Validation Risk Mapping

## Purpose

Identify what could kill a post-Gate-A product bet before build.

## Risk Types

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

Use `docs/templates/product-bets/validation-risk-map.md`.

Select the highest-risk validation risks and explain what signal would support
or contradict each one.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no action outside Gate A constraints, no Gate A
  approval, no Gate B approval, and no build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
