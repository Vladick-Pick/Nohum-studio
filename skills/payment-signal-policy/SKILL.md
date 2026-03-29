---
name: payment-signal-policy
description: Rules for interpreting first payment events and pending review cases
---

Default payment provider is `Lava.top`.

The system may normalize provider events internally, but default-path ventures should treat `Lava.top` as the canonical payment rail.

A payment counts only when:

- a live `Lava.top` payment or subscription event is recorded through the canonical payment path
- mode is live
- status is captured or paid
- payer is not known internal
- payment is not refunded in the short review window
- payment matches the published paid offer

When any of the above is unclear:

- mark payment `pending_review`
- do not auto-promote the venture
- wait for board decision

Use a denylist approach for affiliation:

- founder emails
- team emails
- internal domains
- known internal customer ids

If a payment is ambiguous but arrives before deadline, hold the venture for review for up to 48 hours only.
