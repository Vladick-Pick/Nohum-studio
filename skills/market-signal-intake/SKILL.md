---
name: market-signal-intake
description: Use when collecting and normalizing market signals for Research intake.
---

# Market Signal Intake

## Purpose

Create normalized `market_signal` records from approved sources without turning
source collection into Product Bet Definition or Gate A approval.

## Required Inputs

- cycle config
- source adapter registry
- tool access matrix
- source-specific raw records or URLs

## Output

Use `docs/templates/research/market-signal.md`.

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
- Route promising signals to Research Lead for `Idea Card` intake.
- Do not post, spend, message customers, or collect payment.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
