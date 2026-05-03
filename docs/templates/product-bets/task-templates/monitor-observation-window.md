---
kind: task_template
name: Monitor Observation Window
description: Decide whether the validation surface has enough time and traffic for evidence review
schema: agentcompanies/v1
assignee: product-bet-measurement-specialist
project: hypothesis-funnel
recurring: false
---

## Purpose

Prevent premature decisions and endless waiting.

## Required Output

- measurement plan update
- observation window update
- enough-time/enough-traffic decision
- next action: wait, run_more_traffic, review_evidence, or escalate

## Acceptance Criteria

- minimum runtime and visitor thresholds are checked
- channel diversity is checked
- waitlist and CTA metrics are reported
- insufficient traffic routes back to organic distribution
