---
name: product-bet-compilation
description: Use when compiling market signals and proof-lite evidence into Product Bet Pilot cards.
---

# Product Bet Compilation

## Purpose

Turn a proof-backed market signal into a concrete product bet.

## Required Fields

- buyer
- painful job
- current workaround
- proposed solution
- first value moment
- activation path
- first payment path
- pricing hypothesis
- channel wedge
- default stack fit
- support load estimate

## Output

Use `docs/templates/product-bets/product-bet-card.md`.

Do not use product-bet compilation as market validation or build approval.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  `GATE_A_CANDIDATE` is never treated as Gate B or build approval.
