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
