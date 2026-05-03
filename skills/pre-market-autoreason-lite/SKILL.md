---
name: pre-market-autoreason-lite
description: Use when hardening Product Bet Validation cards before external validation risk test planning.
---

# Pre-Market Autoreason Lite

## Purpose

Improve or kill product bets before market exposure. This is not market proof.

## Process

1. Freeze source evidence and policy constraints.
2. Run critique.
3. Generate up to three blind variants per round.
4. Run synthetic audience review when useful.
5. Synthesize the strongest revision.
6. Record concept revisions and fork candidates.
7. Recommend the revision that should be externally tested.
8. Judge validation risk test readiness.

## Output

```yaml
autoreason_result:
  decision: proceed_to_test | revise | test_more | kill
  scorecard_ref:
  best_revision_ref:
  concept_revision_refs:
  fork_candidate_refs:
  selected_test_revision_recommendation:
  recommended_test_direction:
```

No external actions are allowed.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no action outside Gate A constraints, no Gate A
  approval, no Gate B approval, and no build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
