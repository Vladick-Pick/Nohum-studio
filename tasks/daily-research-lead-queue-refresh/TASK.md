---
kind: task
name: Daily Research Lead Queue Refresh
description: Daily queue-freshness and evidence-quality review for the single queued winner and active research set
schema: agentcompanies/v1
assignee: research-lead
project: hypothesis-funnel
recurring: true
---

Review once per day:

- current queued candidate
- queued age and freshness
- evidence drift on the queue winner
- research WIP versus cap
- registry and memory drift on the queue winner, with Idea Card treated as canonical
- whether any prior decision indicates a revisit instead of keeping the current queue winner
- whether the queue slot should stay occupied, refresh, or return to research

## Required Output

Leave behind:

- one queue winner record update
- one refresh, keep, or return recommendation
- one registry-memory drift note with any required reconcile action
- one customer-world-model delta for research surfaces
