---
kind: task_template
name: Write Validation Learning Report
description: Automated learning report for post-Gate-A Product Bet Validation
schema: agentcompanies/v1
assignee: evidence-router
project: hypothesis-funnel
---

## Purpose

Summarize validation learning, blockers, and recommendation quality.

## Inputs

- Product Bet Validation packet
- validation risk map
- validation plans
- validation evidence events
- Gate B recommendation
- blocked execution report

## Preconditions

- At least one sprint artifact or blocker report exists.
- Gate B recommendation or skipped-stage reasons are available.

## Required Output

One learning report with:

- Gate A decision ref
- product bet created
- validation risks identified
- internal findings
- organic traffic attempts run
- blocked execution states
- strongest evidence
- weakest or misleading evidence
- recommendation outcome
- next-sprint changes

## Idempotency

Use one learning report per cycle ID. If rerun, append a correction note or
write a superseding report.

## Failure Modes

- no artifacts and no blockers -> `RETRY`
- missing stage summary -> include explicit gap
- access blockers dominate cycle -> route to human governance for access decision

## Acceptance Criteria

- report includes Gate A ref, validation risks, tests, blockers, evidence, and
  recommendation
- report separates missing access from market evidence
- report judges definition quality and learning velocity, not artifact count
