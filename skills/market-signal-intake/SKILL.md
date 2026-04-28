---
name: market-signal-intake
description: Use when collecting and normalizing market signals for Product Bet Factory v0.
---

# Market Signal Intake

## Purpose

Create normalized `market_signal` records from approved sources without turning
source collection into product-bet approval.

## Required Inputs

- cycle config
- source adapter registry
- tool access matrix
- source-specific raw records or URLs

## Output

Use `docs/templates/product-bets/market-signal.md`.

Also emit:

- source access report
- blocked source report
- duplicate check notes

## Execution States

- `READY`: source is configured and policy allows intake
- `MISSING_ACCESS`: required token, account, or tool is absent
- `APPROVAL_REQUIRED`: source or use mode needs human approval
- `BLOCKED_BY_POLICY`: source or use mode is not allowed

## Rules

- Preserve source snapshots or stable source refs.
- Assign confidence tier by source type and evidence quality.
- Do not create product bets directly.
- Do not post, spend, message customers, or collect payment.
