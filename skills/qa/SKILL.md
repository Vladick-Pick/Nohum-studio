---
name: qa
description: Run a full QA gate for an approved implementation package using explicit coverage, defect triage, and go/no-go language.
---

## Purpose

Turn QA into a release-quality gate instead of ad-hoc spot checking.

## Required Output

- QA scope and coverage matrix
- executed test evidence with environments and commands
- defect list with severity and reproduction notes
- final QA verdict: `PASS`, `FAIL`, `RETRY`, or `ESCALATE`

## Rules

- derive scope from acceptance criteria, known risks, and recent regressions
- cover happy path, critical edge cases, and rollback-sensitive flows
- block the release if evidence is incomplete or the environment is not trustworthy
- separate confirmed failures from suspected issues and unanswered questions

## Lineage

- adapted from `gstack/qa`
