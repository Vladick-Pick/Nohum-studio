---
name: ship
description: Prepare a reviewed, QA-cleared change package for landing by tightening merge discipline, release scope, and rollback readiness.
---

## Purpose

Turn approved engineering work into a release-ready package without hiding risk or scope drift.

## Required Output

- release-ready change checklist
- exact scope summary for what is shipping now
- release note delta or changelog draft
- rollback and verification note

## Rules

- only run after review and QA gates have produced explicit evidence
- keep branch, diff, release notes, and rollout plan aligned to the same approved scope
- record the exact change identifier, dependency assumptions, and unresolved risks
- do not merge extra work "because it is nearby"

## Lineage

- adapted from `gstack/ship`
