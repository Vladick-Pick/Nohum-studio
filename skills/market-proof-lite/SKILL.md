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

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  `GATE_A_CANDIDATE` is never treated as Gate B or build approval.
