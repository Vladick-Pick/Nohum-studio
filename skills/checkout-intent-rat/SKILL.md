---
name: checkout-intent-rat
description: Use when preparing checkout-intent RATs under Product Bet Factory v0.
---

# Checkout Intent RAT

## Allowed In v0

- define checkout-intent measurement
- draft pricing and CTA structure
- classify payment provider readiness

## Not Allowed Without Approval

- collecting payment
- storing payment data
- implying immediate delivery when the product is not available

Return `APPROVAL_REQUIRED` for any payment rail action.
