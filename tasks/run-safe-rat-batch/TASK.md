---
kind: task
name: Run Safe RAT Batch
description: Execute only ready and policy-allowed Product Bet Factory v0 RATs
schema: agentcompanies/v1
assignee: rat-designer
project: hypothesis-funnel
---

## Purpose

Run safe RATs or record explicit blockers.

## Inputs

- RAT plans
- access matrix
- RAT execution boundaries

## Preconditions

- RAT plan has thresholds, max cost, max time, and execution state.
- Only `READY` RATs may execute.
- External spend, outreach, launch, and payment actions require approval.

## Steps

1. Execute only RATs with `READY` state.
2. Do not send outreach, spend money, publish, or collect payment without
   approval.
3. Record `MISSING_ACCESS`, `APPROVAL_REQUIRED`, and `BLOCKED_BY_POLICY`
   states without manual workaround.
4. Return execution results for evidence writing.

## Required Output

- RAT execution results
- blocked execution report

## Idempotency

Use RAT plan IDs and execution attempt numbers. If rerun, append a new attempt
record rather than overwriting execution history.

## Failure Modes

- missing access -> `MISSING_ACCESS`
- approval required -> `APPROVAL_REQUIRED`
- policy blocked -> `BLOCKED_BY_POLICY`
- no ready RATs -> skip with explicit reason

## Acceptance Criteria

- only `READY` and policy-allowed RATs execute
- blocked RATs are reported machine-readably
- no outreach, paid ads, public deploy, or payment collection occurred without approval
