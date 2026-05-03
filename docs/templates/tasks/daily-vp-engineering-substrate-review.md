---
kind: task_template
name: Daily VP Engineering Substrate Review
description: Daily review of engineering start conditions, repo state, env contract, and release readiness for the active venture
schema: agentcompanies/v1
assignee: vp-engineering
project: studio-os
recurring: true
---

Review once per day:

- repo attach state
- workspace path
- build env contract completeness
- review and QA owner assignment
- release and rollback readiness

## Required Output

Leave behind:

- one substrate readiness verdict
- one explicit blocker packet if build cannot proceed safely
