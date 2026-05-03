---
kind: task_template
name: Run AI Hardening Loop
description: Create Product Bet revisions and forks before external validation
schema: agentcompanies/v1
assignee: pre-market-autoreasoner
project: hypothesis-funnel
recurring: false
---

## Purpose

Harden a Product Bet internally before building a validation surface.

## Required Output

- autoreason report
- concept revisions
- fork candidates
- selected-test-revision recommendation
- updated validation risks

## Acceptance Criteria

- source evidence and Gate A constraints are immutable
- every meaningful change is a `concept_revision`
- every alternate direction is a `fork_candidate`
- synthetic audience findings are not counted as market validation
