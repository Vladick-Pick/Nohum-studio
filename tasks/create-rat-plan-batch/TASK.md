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
