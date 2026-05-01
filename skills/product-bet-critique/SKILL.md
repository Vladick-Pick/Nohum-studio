---
name: product-bet-critique
description: Use when critiquing a Product Bet Definition card for evidence grounding and red hypothesis test readiness.
---

# Product Bet Critique

## Purpose

Find evidence, buyer, payment, channel, positioning, economics, and buildability
weaknesses before a product bet reaches red hypothesis test planning.

## Checks

- buyer clarity
- pain specificity
- current workaround
- first payment path
- channel reachability
- competitor delta
- buildability on canonical stack
- support load
- legal/commercial safety
- evidence grounding

## Output

```yaml
critique:
  fatal_issues: []
  weak_points: []
  what_not_to_lose: []
  revision_guidance:
```

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
