---
kind: task_template
name: Weekly Research History Audit
description: Weekly integrity audit for research history coverage, duplicate control, and registry-memory alignment with Idea Card canon
schema: agentcompanies/v1
assignee: research-lead
project: hypothesis-funnel
recurring: true
---

Review once per week:

- duplicate Idea Cards across active, queued, and archived registry records
- decisions missing a post-decision history sync entry
- registry and memory drift where fields conflict with the canonical Idea Card
- overdue revisit items and missing revisit dates
- evidence-link completeness for each recent final research verdict
- plugin-free operability of the workflow using existing artifacts only

## Required Output

Leave behind:

- one weekly research history audit report
- one remediation list for duplicate, registry, or revisit drift with owner and due date
