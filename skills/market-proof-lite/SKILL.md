---
name: market-proof-lite
description: Use when doing a bounded proof check on normalized Product Bet Factory market signals.
---

# Market Proof Lite

## Purpose

Check whether a market signal is strong enough to become a product bet or to
route into full Research.

## Required Checks

- buyer and job clarity
- direct competitors
- visible pricing or monetization
- demand evidence
- reachable channel evidence
- legal/commercial boundary
- default stack buildability hints

## Output

```yaml
proof_status: insufficient | plausible | strong | rejected
confidence: low | medium | high
evidence_refs: []
blockers: []
```

Do not approve Gate A, Gate B, build, launch, spend, outreach, or payment.
