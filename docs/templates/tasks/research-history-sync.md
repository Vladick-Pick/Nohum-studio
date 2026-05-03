---
kind: task_template
name: Research Post-Decision History Sync
description: Post-decision sync that projects final research verdicts into derived history surfaces while preserving Idea Card canon for future revisit decisions
schema: agentcompanies/v1
assignee: research-lead
project: hypothesis-funnel
---

Run after each final research verdict:

- confirmed final verdict and verdict date
- canonical Idea Card reference and identifiers
- registry projection fields (`current_stage`, `final_verdict`, `queue_candidate`, `primary_decision_reason`, `secondary_decision_reasons`)
- decision-memory projection fields (`candidate_fingerprint`, `duplicate_of_case_id`, `revisit_policy`, `revisit_after`, `reopen_conditions`)
- eval-export append or enqueue note for the same canonical snapshot
- registry and memory parity check after sync
- plugin-free execution using current task artifacts only; do not modify Paperclip core

## Required Output

Leave behind:

- one synced history record keyed to the canonical Idea Card
- one decision-memory update keyed to `candidate_fingerprint`
- one eval-export append or enqueue note for the same verdict snapshot
- one explicit revisit state (`scheduled`, `not-needed`, or `overdue`) with date
