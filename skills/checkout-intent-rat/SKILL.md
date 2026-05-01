---
name: checkout-intent-rat
description: Use when preparing checkout-intent RATs under Product Bet Definition.
---

# Checkout Intent RAT

## Purpose

Prepare checkout-intent RAT artifacts and classify payment-rail readiness.

## Allowed In v0

- define checkout-intent measurement
- draft pricing and CTA structure
- classify payment provider readiness

## Not Allowed Without Approval

- collecting payment
- storing payment data
- implying immediate delivery when the product is not available

Return `APPROVAL_REQUIRED` for any payment rail action.

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
