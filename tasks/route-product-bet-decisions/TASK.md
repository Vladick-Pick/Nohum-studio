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

## Preconditions

- Evidence events exist or the task records why routing is skipped.
- EV bands are available for each routed product bet.
- Gate A/Gate B boundaries remain canonical.

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

## Idempotency

Use stable `decision_update_id` values. If rerun, append a new decision update
with supersedes refs instead of overwriting the prior decision.

## Failure Modes

- missing evidence refs -> `RETRY`
- execution blocker prevents decision -> preserve execution state
- Gate A ambiguity -> escalate to CEO or board

## Acceptance Criteria

- every decision uses an allowed business outcome
- execution states remain separate from business outcomes
- every decision has evidence refs and EV bands
- `GATE_A_CANDIDATE` is only a governance-review recommendation
