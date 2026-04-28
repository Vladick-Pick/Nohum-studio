---
kind: task
name: Run Pre-Market Autoreason Batch
description: Automated product-bet hardening before RAT planning
schema: agentcompanies/v1
assignee: pre-market-autoreasoner
project: hypothesis-funnel
---

## Purpose

Harden product bets before external tests without treating internal reasoning
as market proof.

## Inputs

- product bet cards
- assumption maps
- market-proof-lite records
- frozen evidence refs

## Preconditions

- Product bet cards and assumption maps exist.
- Evidence refs are frozen for the autoreason run.
- External actions are disabled.

## Steps

1. Critique each product bet.
2. Generate bounded blind variants when useful.
3. Synthesize the strongest revision.
4. Judge RAT readiness.
5. Route weak bets to `REVISE`, `RESEARCH_REQUIRED`, or `KILL`.

## Required Output

- autoreason scorecards
- best revisions
- recommended RAT directions

## Idempotency

Use concept revision IDs for revised bets. If rerun, create a new revision
record rather than rewriting the baseline.

## Failure Modes

- missing evidence refs -> `RETRY`
- generic or unsupported bet -> `REVISE` or `KILL`
- missing payment path -> `REVISE` or `RESEARCH_REQUIRED`

## Acceptance Criteria

- every scored bet has critique, revision decision, and RAT-readiness verdict
- no source evidence was modified
- no external test was executed
