---
name: cold-outreach-rat
description: Use when preparing cold-outreach RATs under Product Bet Factory v0.
---

# Cold Outreach RAT

## Purpose

Prepare cold-outreach RAT artifacts and classify whether sending is approved.

## Allowed In v0

- draft outreach list criteria
- draft messages
- define reply-quality thresholds
- classify sending readiness

## Not Allowed Without Approval

- sending email or DMs
- using purchased lists
- automated sequences

Return `APPROVAL_REQUIRED` for any actual outreach send.

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
  `GATE_A_CANDIDATE` is never treated as Gate B or build approval.
