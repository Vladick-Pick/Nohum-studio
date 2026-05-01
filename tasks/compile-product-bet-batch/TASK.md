---
kind: task
name: Compile Product Bet Definition
description: Compile a Gate-A-approved Idea Card into a Product Bet Definition packet
schema: agentcompanies/v1
assignee: product-bet-compiler
project: hypothesis-funnel
---

## Purpose

Create a Product Bet Definition packet from an approved `Idea Card` and Gate A
decision.

## Inputs

- Gate A approved `Idea Card`
- Gate A decision and constraints
- Product Bet Definition template
- current Gate B policy

## Preconditions

- Gate A decision is `approve_product_bet_definition`.
- Product Bet Definition template exists.
- Gate B boundary remains unchanged.

## Steps

1. Freeze source `Idea Card` and Gate A decision refs.
2. Compile product identity, audience, problem, product shape, offer, and
   economics.
3. Add competitor deep-dive fields from existing Research evidence and any
   approved post-Gate-A competitor review.
4. Draft test GTM program.
5. Identify initial red hypotheses.
6. Estimate EV bands.

## Required Output

- Product Bet Definition packet
- initial red hypothesis list
- initial EV bands

## Idempotency

Use stable `product_bet_id` values derived from venture ID and slug. If rerun,
append revision notes rather than overwriting previous cards.

## Failure Modes

- missing Gate A decision -> `RETRY`
- missing first payment path -> route to `revise` or `test_more`
- non-canonical stack requirement -> record stack-fit risk

## Acceptance Criteria

- product bet links to `source_idea_card_ref` and `gate_a_decision_ref`
- product bet has ICP, pain, product shape, offer, first value, payment path,
  test GTM program, and EV bands
- no product bet is treated as Gate B approval
