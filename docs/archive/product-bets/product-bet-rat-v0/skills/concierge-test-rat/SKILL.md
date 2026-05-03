---
name: concierge-test-rat
description: Use when preparing concierge or paid-pilot RATs under Product Bet Validation.
---

# Concierge Test RAT

## Purpose

Prepare concierge or paid-pilot RAT artifacts and classify customer-facing
execution readiness.

## Allowed In v0

- define concierge workflow
- draft demo plan
- define priced pilot ask
- classify manual support burden

## Not Allowed Without Approval

- promising delivery dates
- collecting payment
- sending customer communication

Return `APPROVAL_REQUIRED` for customer-facing execution.

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
