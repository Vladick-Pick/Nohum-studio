---
kind: task
name: Create Red Hypothesis Test Plans
description: Create thresholded tests for post-Gate-A Product Bet red hypotheses
schema: agentcompanies/v1
assignee: rat-designer
project: hypothesis-funnel
---

## Purpose

Create thresholded red hypothesis test plans and classify access/approval
readiness.

## Inputs

- Product Bet Definition revisions
- red hypothesis map
- access matrix
- red hypothesis test boundaries

## Preconditions

- Product bet revision is test-ready or explicitly routed to skip.
- At least one red hypothesis is selected.
- Red hypothesis test boundaries are loaded.

## Steps

1. Select the highest-impact red hypotheses per eligible bet.
2. Choose the cheapest decision-changing test for each selected hypothesis.
3. Score payment proximity.
4. Define success/failure thresholds, max cost, and max time.
5. Run access checks.

## Required Output

- red hypothesis test plans
- payment proximity scores
- execution states

## Idempotency

Use stable `test_plan_id` values. If rerun, create a revised plan with reason
for change rather than overwriting thresholds.

## Failure Modes

- no decision-changing test available -> `test_more` or `kill`
- missing access -> `MISSING_ACCESS`
- approval needed -> `APPROVAL_REQUIRED`
- forbidden action -> `BLOCKED_BY_POLICY`

## Acceptance Criteria

- every test has thresholds, max cost, max time, and payment proximity
- every test has one execution state
- no unapproved external action is scheduled
