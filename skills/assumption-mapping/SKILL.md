---
name: assumption-mapping
description: Use when mapping red hypotheses for a Product Bet Definition card.
---

# Red Hypothesis Mapping

## Purpose

Identify what could kill a post-Gate-A product bet before build.

## Red Hypothesis Types

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

Select the highest-risk red hypothesis and explain what evidence would support
or contradict it.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
