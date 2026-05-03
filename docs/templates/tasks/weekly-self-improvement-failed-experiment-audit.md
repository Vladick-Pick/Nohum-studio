---
kind: task_template
name: Weekly Failed Experiment Audit
description: Weekly audit of reverted, ambiguous, and guardrail-breaking experiments so the studio keeps failed variants in memory
schema: agentcompanies/v1
assignee: agent-mechanic
project: studio-os
recurring: true
---

Review once per week:

- reverted experiments
- ambiguous experiments
- customer-facing guardrail failures
- missing experiment-memory write-back

## Required Output

Leave behind:

- one failed-experiment audit
- one prevention note for each recurring failure pattern
