---
name: product-bet-judge
description: Use when judging product-bet revisions and red hypothesis test readiness.
---

# Product Bet Judge

## Purpose

Judge product-bet revisions for red hypothesis test readiness using a bounded
pass/warn/fail scorecard.

## Scorecard

- buyer clarity: `pass` / `warn` / `fail`
- pain specificity: `pass` / `warn` / `fail`
- current workaround: `pass` / `warn` / `fail`
- payment path: `pass` / `warn` / `fail`
- channel reachability: `pass` / `warn` / `fail`
- activation speed: `pass` / `warn` / `fail`
- competitor delta: `pass` / `warn` / `fail`
- buildability: `pass` / `warn` / `fail`
- unit economics: `pass` / `warn` / `fail`
- legal/commercial safety: `pass` / `warn` / `fail`

## Routing

Route to `proceed_to_test`, `revise`, `test_more`, or `kill`.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
