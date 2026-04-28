---
kind: task
name: Create RAT Plan Batch
description: Automated RAT planning for Product Bet Factory v0
schema: agentcompanies/v1
assignee: rat-designer
project: hypothesis-funnel
---

## Purpose

Create thresholded RAT plans and classify access/approval readiness.

## Inputs

- product bet revisions
- assumption maps
- access matrix
- RAT execution boundaries

## Preconditions

- Product bet revision is test-ready or explicitly routed to skip.
- One riskiest assumption is selected.
- RAT execution boundaries are loaded.

## Steps

1. Select the riskiest assumption per eligible bet.
2. Choose the cheapest decision-changing RAT.
3. Score payment proximity.
4. Define success/failure thresholds, max cost, and max time.
5. Run access checks.

## Required Output

- RAT plans
- payment proximity scores
- execution states

## Idempotency

Use stable `rat_plan_id` values. If rerun, create a revised plan with reason
for change rather than overwriting thresholds.

## Failure Modes

- no decision-changing test available -> `RESEARCH_REQUIRED` or `KILL`
- missing access -> `MISSING_ACCESS`
- approval needed -> `APPROVAL_REQUIRED`
- forbidden action -> `BLOCKED_BY_POLICY`

## Acceptance Criteria

- every RAT has thresholds, max cost, max time, and payment proximity
- every RAT has one execution state
- no unapproved external action is scheduled
