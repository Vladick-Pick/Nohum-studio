---
name: landing-fake-door-rat
description: Use when preparing or checking landing fake-door RATs under Product Bet Validation.
---

# Landing Fake-Door RAT

## Purpose

Prepare landing fake-door RAT artifacts and classify whether public execution is
allowed.

## Allowed In v0

- draft landing spec
- draft copy variants
- define tracking plan
- classify deployment readiness

## Not Allowed Without Approval

- public deploy
- paid traffic
- payment collection
- misleading claims

Return `APPROVAL_REQUIRED` for public deployment or paid traffic.

## Execution Status

Return exactly one of:

- `READY`
- `MISSING_ACCESS`
- `APPROVAL_REQUIRED`
- `BLOCKED_BY_POLICY`

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
