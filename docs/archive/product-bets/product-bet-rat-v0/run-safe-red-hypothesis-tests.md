---
kind: task_template
name: Run Safe Validation Risk Tests
description: Execute only ready and policy-allowed post-Gate-A tests
schema: agentcompanies/v1
assignee: validation-risk-mapper
project: hypothesis-funnel
---

## Purpose

Run safe validation risk tests or record explicit blockers.

## Inputs

- validation risk test plans
- access matrix
- validation risk test boundaries

## Preconditions

- Gate A decision is `approve_product_bet_definition`.
- Test plan has thresholds, max cost, max time, and execution state.
- Only `READY` tests may execute.
- External spend, outreach, public deploy, launch, and payment actions require
  approval.

## Steps

1. Execute only tests with `READY` state.
2. Do not send outreach, spend money, publish, or collect payment without
   approval.
3. Record `MISSING_ACCESS`, `APPROVAL_REQUIRED`, and `BLOCKED_BY_POLICY`
   states without manual workaround.
4. Return execution results for evidence writing.

## Required Output

- test execution results
- blocked execution report

## Idempotency

Use test plan IDs and execution attempt numbers. If rerun, append a new attempt
record rather than overwriting execution history.

## Failure Modes

- missing access -> `MISSING_ACCESS`
- approval required -> `APPROVAL_REQUIRED`
- policy blocked -> `BLOCKED_BY_POLICY`
- no ready tests -> skip with explicit reason

## Acceptance Criteria

- only `READY` and policy-allowed tests execute
- blocked tests are reported machine-readably
- no outreach, paid ads, public deploy, or payment collection occurred without approval
