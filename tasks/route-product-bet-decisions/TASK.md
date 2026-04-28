---
kind: task
name: Route Product Bet Decisions
description: Automated Product Bet Pilot decision routing from evidence events
schema: agentcompanies/v1
assignee: evidence-router
project: hypothesis-funnel
---

## Purpose

Route product bets using evidence refs, EV bands, and governance boundaries.

## Inputs

- product bet cards
- assumption maps
- autoreason scorecards
- RAT plans
- evidence events

## Business Outcomes

- `KILL`
- `REVISE`
- `FORK`
- `TEST_MORE`
- `RESEARCH_REQUIRED`
- `GATE_A_CANDIDATE`

## Execution States

- `BLOCKED_MISSING_ACCESS`
- `APPROVAL_REQUIRED`
- `BLOCKED_BY_POLICY`

## Required Output

- decision updates

`GATE_A_CANDIDATE` is not Gate B and not build approval.
