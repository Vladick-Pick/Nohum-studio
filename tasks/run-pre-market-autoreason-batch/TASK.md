---
kind: task
name: Run Product Bet Autoreason Batch
description: Internal product-bet hardening before red hypothesis tests
schema: agentcompanies/v1
assignee: pre-market-autoreasoner
project: hypothesis-funnel
---

## Purpose

Harden Product Bet Definition before external tests without treating internal
reasoning as market proof.

## Inputs

- Product Bet Definition packet
- red hypothesis map
- frozen `Idea Card` and Gate A refs
- Gate A constraints

## Preconditions

- Product Bet Definition exists.
- Evidence refs are frozen for the autoreason run.
- External actions are disabled.

## Steps

1. Critique the product bet for positioning, buyer, payment, channel,
   activation, economics, buildability, trust, and legal risks.
2. Generate bounded blind variants when useful.
3. Run synthetic audience review when useful.
4. Synthesize the strongest revision.
5. Update red hypotheses and test readiness.
6. Route weak bets to `revise`, `test_more`, or `kill`.

## Required Output

- autoreason scorecards
- synthetic audience findings when used
- best revisions
- updated red hypothesis map
- recommended test directions

## Idempotency

Use concept revision IDs for revised bets. If rerun, create a new revision
record rather than rewriting the baseline.

## Failure Modes

- missing evidence refs -> `RETRY`
- generic or unsupported bet -> `revise` or `kill`
- missing payment path -> `revise` or `test_more`

## Acceptance Criteria

- every scored bet has critique, revision decision, and test-readiness verdict
- no source evidence was modified
- no external test was executed
