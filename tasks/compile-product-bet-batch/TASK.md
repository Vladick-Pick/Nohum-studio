---
kind: task
name: Compile Product Bet Batch
description: Automated compilation of proof-backed signals into product bets
schema: agentcompanies/v1
assignee: product-bet-compiler
project: hypothesis-funnel
---

## Purpose

Create product bet cards, assumption maps, and EV bands from proof-backed
signals.

## Inputs

- market-signal batch
- market-proof-lite records
- product-bet templates

## Preconditions

- At least one proof-lite record is `plausible` or `strong`.
- Product bet templates exist.
- Gate A/Gate B boundaries remain unchanged.

## Steps

1. Select eligible proof-backed signals.
2. Compile product bet cards.
3. Map assumptions.
4. Select the riskiest assumption.
5. Estimate EV bands.

## Required Output

- product bet cards
- assumption maps
- initial EV bands

## Idempotency

Use stable `product_bet_id` values derived from cycle date and signal slug. If
rerun, append revision notes rather than overwriting previous cards.

## Failure Modes

- no eligible proof records -> skip with explicit reason
- missing first payment path -> route to `REVISE` or `RESEARCH_REQUIRED`
- non-canonical stack requirement -> record stack-fit risk

## Acceptance Criteria

- every product bet has buyer, pain, first value, first payment path, and EV bands
- every product bet has an assumption map
- no product bet is treated as Gate A approval
