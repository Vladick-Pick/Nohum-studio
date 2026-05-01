---
name: pre-market-autoreason-lite
description: Use when hardening Product Bet Definition cards before external red hypothesis test planning.
---

# Pre-Market Autoreason Lite

## Purpose

Improve or kill product bets before market exposure. This is not market proof.

## Process

1. Freeze source evidence and policy constraints.
2. Run critique.
3. Generate up to two blind variants.
4. Synthesize the strongest revision.
5. Judge red hypothesis test readiness.

## Output

```yaml
autoreason_result:
  decision: proceed_to_test | revise | test_more | kill
  scorecard_ref:
  best_revision_ref:
  recommended_test_direction:
```

No external actions are allowed.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
