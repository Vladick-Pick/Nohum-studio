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
