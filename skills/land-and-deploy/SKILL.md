---
name: land-and-deploy
description: Execute an approved merge and deployment with explicit rollout checks, canary verification, and rollback discipline.
---

## Purpose

Land a release safely and leave an auditable record of what happened.

## Required Output

- deploy checklist and approvals
- rollout status log
- canary verification evidence
- final status: deployed, halted, or rolled back

## Rules

- require explicit review and QA approval before deployment
- verify CI, deployment health, and the critical production path after rollout
- halt immediately on failed canary or ambiguous production signal
- leave a rollback outcome or next-step owner before closing the task

## Lineage

- adapted from `gstack/land-and-deploy`
