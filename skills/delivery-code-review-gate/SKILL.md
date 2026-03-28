---
name: delivery-code-review-gate
description: Review NoHum venture implementation against the plan, dossier, and verification evidence before release.
---

## Required Checks

- matches the approved scope
- tests and verification evidence are present
- no obvious regressions or unapproved extras
- release path is safe to continue

## Review Language

- `PASS`
- `FAIL`
- `RETRY`
- `ESCALATE`

Every verdict must reference evidence.
