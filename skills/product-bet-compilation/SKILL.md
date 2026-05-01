---
name: product-bet-compilation
description: Use when compiling a Gate-A-approved Idea Card into a Product Bet Definition packet.
---

# Product Bet Compilation

## Purpose

Turn a Gate-A-approved `Idea Card` into a concrete Product Bet Definition.

## Required Fields

- buyer
- source Idea Card ref
- Gate A decision ref
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
- red hypotheses
- test GTM program

## Output

Use `docs/templates/product-bets/product-bet-card.md`.

Do not use product-bet compilation as market validation, Gate B approval, or
build approval.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
