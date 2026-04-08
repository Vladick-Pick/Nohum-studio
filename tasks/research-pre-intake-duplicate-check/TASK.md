---
kind: task
name: Research Pre-Intake Duplicate Check
description: Pre-intake check that blocks duplicate hypotheses by reconciling registry and memory against the canonical Idea Card
schema: agentcompanies/v1
assignee: research-lead
project: hypothesis-funnel
---

Run before each new research intake:

- canonical Idea Card identity (problem, audience, and wedge)
- duplicate or near-duplicate candidates already in the research registry
- prior final research verdicts and archived outcomes tied to the same problem, buyer, and wedge
- revisit markers that should reopen existing work instead of creating a new record
- registry versus memory drift for the same candidate, with Idea Card as source of truth
- plugin-free execution using existing artifacts only; do not modify Paperclip core

If a duplicate is found, merge into the existing record or mark as revisit instead of creating a new intake entry.

## Required Output

Leave behind:

- one pre-intake duplicate verdict (`proceed`, `merge`, or `revisit`)
- one evidence link set to the matching registry and decision-history records
