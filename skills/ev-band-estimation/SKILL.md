---
name: ev-band-estimation
description: Use when estimating interval EV bands for Product Bet Pilot decisions.
---

# EV Band Estimation

## Purpose

Estimate decision value without fake precise probabilities.

## Bands

```yaml
payment_probability: low | medium | high
retention_probability: unknown | low | medium | high
contribution_potential: low | medium | high
cost_risk: low | medium | high
support_risk: low | medium | high
confidence: low | medium | high
```

## Rules

- Real payment evidence dominates interest evidence.
- Weak evidence cannot create high confidence.
- Missing payment path usually forces `REVISE`, `TEST_MORE`, or `KILL`.
- Do not output decimal probabilities.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  `GATE_A_CANDIDATE` is never treated as Gate B or build approval.
