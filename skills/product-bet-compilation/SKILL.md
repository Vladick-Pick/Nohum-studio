---
name: product-bet-compilation
description: Use when compiling a Gate-A-approved Idea Card into a Product Bet Validation packet.
---

# Product Bet Compilation

## Purpose

Turn a Gate-A-approved `Idea Card` into the initial shared Product Bet Card.

This skill owns product identity, audience, problem/workflow, product shape,
and first revision seed. It does not own competitor deep dive, economics,
organic traffic, measurement, or evidence routing.

## Required Fields

- source Idea Card ref
- Gate A decision ref
- buyer
- user
- payer
- excluded segments
- painful job
- current workaround
- proposed solution
- first value moment
- activation path
- first payment path
- default stack fit
- support load estimate
- initial validation risk candidates
- baseline concept revision

## Output

Use `docs/templates/product-bets/product-bet-card.md`.

Write only the sections owned by `product-bet-compiler`. Other sections must be
left to their specialist owners.

Do not use product-bet compilation as market validation, Gate B approval, or
build approval.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no action outside Gate A constraints, no Gate A
  approval, no Gate B approval, and no build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
