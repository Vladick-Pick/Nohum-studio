---
name: research-canonical-package
description: Use when turning specialist research packets into the final NoHum queue package with one strict field schema and contradiction handling.
---

# Research Canonical Package

Use this skill inside `Research Lead` before a queue recommendation is considered complete.

## Purpose

Normalize one candidate's canonical idea card into a decision-grade final section and queue recommendation.

## Required Sections

1. candidate summary
2. hard-gates matrix
3. competitor summary
4. demand class verdicts
5. revenue and first-payment path
6. weighted score
7. freshness and confidence summary
8. strongest runner-up comparison
9. final recommendation
10. explicit open risks

## Normalization Rules

- one package, one verdict
- every score line maps to evidence
- unresolved contradictions must appear in risks
- `unknown` fields stay visible and lower certainty
- comments-only synthesis is invalid

## Recommendation Rules

- `QUEUE` only when hard gates pass and the weighted score clears cutoff
- `KILL FOR NOW` when the category may be viable but proof is incomplete or stale
- `KILL` when the market or economics fail clearly

## Output Standard

The final package should let `CEO` or `Gate A` review the candidate without reopening raw discovery from scratch.
