---
name: qa-only
description: Execute a focused QA pass against an existing QA plan or narrow verification target without silently redefining scope.
---

## Purpose

Run a constrained verification pass when the QA lane already has defined scope.

## Required Output

- executed test log
- observed failures or anomalies
- explicit list of scenarios not run
- focused verdict: `PASS`, `FAIL`, `RETRY`, or `ESCALATE`

## Rules

- do not expand or shrink scope without saying so
- record exact repro steps, commands, datasets, and environment assumptions
- escalate immediately if required env, fixtures, or observability are missing
- never claim pass for a critical flow that was not actually exercised

## Lineage

- adapted from `gstack/qa-only`
