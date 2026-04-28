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
