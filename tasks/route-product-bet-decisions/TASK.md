---
kind: task
name: Route Product Bet Gate B Recommendation
description: Route post-Gate-A evidence into a Gate B recommendation
schema: agentcompanies/v1
assignee: evidence-router
project: hypothesis-funnel
---

## Purpose

Route Product Bet Definition using evidence refs, EV bands, and governance
boundaries.

## Inputs

- Product Bet Definition packet
- red hypothesis map
- autoreason scorecards
- test plans
- evidence events

## Preconditions

- Evidence events exist or the task records why routing is skipped.
- EV bands are available for each routed product bet.
- Gate B boundary remains canonical.

## Recommendation Outcomes

- `build`
- `revise`
- `test_more`
- `kill`

## Execution States

- `BLOCKED_MISSING_ACCESS`
- `APPROVAL_REQUIRED`
- `BLOCKED_BY_POLICY`

## Required Output

- Gate B recommendation

The recommendation is not Gate B approval and not build approval.

## Idempotency

Use stable `gate_b_recommendation_id` values. If rerun, append a new
recommendation with supersedes refs instead of overwriting the prior decision.

## Failure Modes

- missing evidence refs -> `RETRY`
- execution blocker prevents recommendation -> preserve execution state
- Gate B ambiguity -> escalate to CEO or board

## Acceptance Criteria

- every recommendation uses an allowed outcome
- execution states remain separate from recommendation outcomes
- every recommendation has evidence refs and EV bands
- build recommendation is only a Gate B review input
