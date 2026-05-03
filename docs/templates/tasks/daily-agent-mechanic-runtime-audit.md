---
kind: task_template
name: Daily Agent Mechanic Runtime Audit
description: Daily audit of recurring task failures, runtime drift, tool breakage, and repeated agent execution failures
schema: agentcompanies/v1
assignee: agent-mechanic
project: studio-os
recurring: true
---

Review once per day:

- failing recurring tasks
- repeated failures by agent slug
- missing or drifted config
- broken tool or workspace assumptions
- open reliability regressions
- open skill or instruction drift affecting live runs

## Required Output

Leave behind:

- one runtime audit note
- one remediation packet or reroute note for each unresolved reliability issue
- one runtime-reliability surface delta
