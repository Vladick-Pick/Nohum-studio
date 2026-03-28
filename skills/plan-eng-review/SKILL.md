---
name: plan-eng-review
description: Review an engineering execution plan before implementation starts. Validate architecture, interfaces, risks, test strategy, and rollback logic.
---

## Purpose

Catch scope, architecture, integration, and verification gaps before code exists.

## Required Output

- plan review verdict: `PASS`, `FAIL`, `RETRY`, or `ESCALATE`
- blocking architecture or sequencing issues
- required test and verification expectations
- migration, rollout, dependency, and rollback risks

## Rules

- review against the canonical handoff dossier, acceptance criteria, and current repo reality
- call out missing observability, auth, data migration, and performance checks explicitly
- do not approve a plan that smuggles product ambiguity or hidden scope into engineering
- if the plan changes scope, route it back to manager approval before build starts

## Lineage

- adapted from `gstack/plan-eng-review`
