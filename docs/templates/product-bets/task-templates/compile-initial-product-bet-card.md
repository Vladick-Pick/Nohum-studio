---
kind: task_template
name: Compile Initial Product Bet Card
description: Compile a Gate-A-approved Idea Card into a Product Bet Validation packet
schema: agentcompanies/v1
assignee: product-bet-compiler
project: hypothesis-funnel
---

## Purpose

Create the initial shared Product Bet Card from an approved `Idea Card` and
Gate A decision.

This is a task template. It must not be imported as an immediate backlog item.

## Inputs

- Gate A approved `Idea Card`
- Gate A decision and constraints
- Product Bet Card template
- current Gate B policy

## Preconditions

- Gate A decision is `approve_product_bet_definition`.
- Product Bet Validation template exists.
- Gate B boundary remains unchanged.

## Steps

1. Freeze source `Idea Card` and Gate A decision refs.
2. Open the Product Bet Card if Launch Lead has not already opened it.
3. Write only product identity, audience, problem/workflow, and first product
   shape.
4. Add initial validation-risk candidates as inputs for `product-bet-compiler`.
5. Record baseline `concept_revision`.
6. Return `PASS`, `RETRY`, or `ESCALATE` for Launch Lead sufficiency review.

## Required Output

- Product Bet Card sections owned by `product-bet-compiler`
- initial validation risk candidates
- baseline concept revision

## Idempotency

Use stable `product_bet_id` values derived from venture ID and slug. If rerun,
append revision notes rather than overwriting previous cards.

## Failure Modes

- missing Gate A decision -> `RETRY`
- missing first payment path -> route to `revise` or `test_more`
- non-canonical stack requirement -> record stack-fit risk

## Acceptance Criteria

- product bet links to `source_idea_card_ref` and `gate_a_decision_ref`
- product bet has ICP, pain, product shape, first value, activation path, and
  first payment path
- product bet leaves competitor, offer, economics, traffic, measurement, and
  evidence sections to the correct specialists
- no product bet is treated as Gate B approval
