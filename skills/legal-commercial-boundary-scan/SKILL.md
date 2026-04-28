---
name: legal-commercial-boundary-scan
description: Use when screening a product bet or RAT for legal, commercial, ToS, payment, or reputation boundaries.
---

# Legal Commercial Boundary Scan

## Purpose

Detect blockers before external actions.

## Checks

- source ToS or commercial-use restrictions
- privacy or regulated data risk
- payment collection sensitivity
- refund, chargeback, or misleading-offer risk
- prohibited categories
- public/reputation risk

## Output

```yaml
risk_class: low | medium | high | blocked
execution_status: READY | APPROVAL_REQUIRED | BLOCKED_BY_POLICY
evidence_refs: []
approval_required: []
```

High-risk or irreversible actions require human or board approval.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  `GATE_A_CANDIDATE` is never treated as Gate B or build approval.
