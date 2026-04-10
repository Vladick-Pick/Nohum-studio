---
kind: task
name: Daily CEO Operating Review
description: Daily control-plane review of WIP, gates, queue state, budget, and unresolved escalations
schema: agentcompanies/v1
assignee: ceo
project: studio-os
recurring: true
---

Review once per day:

- active venture count and stage
- queued venture count and freshness
- open Gate A and Gate B decisions
- unresolved escalations
- budget burn versus policy cap
- any venture violating WIP or timebox policy
- any governance-sensitive mutation waiting on human boundary

## Required Output

Leave behind:

- one operating review note
- one explicit owner for each unresolved escalation
- one next decision date for queue and active venture state
- one disposition for each open human-boundary self-improvement case
