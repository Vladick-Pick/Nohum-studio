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
