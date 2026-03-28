---
name: review
description: Perform an independent engineering review of a diff or change package against approved scope, correctness, and release safety.
---

## Purpose

Protect quality before QA and release by producing an explicit verdict backed by concrete evidence.

## Required Output

- review verdict: `PASS`, `FAIL`, `RETRY`, or `ESCALATE`
- blocking issue list with exact file or artifact references
- missing verification or test coverage notes
- release-risk note for downstream QA or release work

## Rules

- review against the approved handoff, not against imagined scope
- cite concrete defects, regressions, or missing evidence
- do not self-approve implementation, QA, and release inside one blurred step
- if architecture drift appears, route it back to the engineering manager or architect

## Lineage

- adapted from `gstack/review`
