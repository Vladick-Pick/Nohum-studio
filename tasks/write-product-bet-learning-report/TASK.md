---
kind: task
name: Write Product Bet Learning Report
description: Automated weekly learning report for Product Bet Factory v0
schema: agentcompanies/v1
assignee: evidence-router
project: hypothesis-funnel
---

## Purpose

Summarize automated-cycle learning and blockers.

## Inputs

- source access report
- market proof records
- product bets
- RAT plans
- evidence events
- decision updates

## Preconditions

- At least one cycle artifact or blocker report exists.
- Decision updates or skipped-stage reasons are available.

## Required Output

One learning report with:

- source coverage
- blocked source report
- product bets created
- RAT execution states
- decisions by outcome
- strongest evidence
- weakest or misleading evidence
- recurring kill reasons
- next-cycle changes

## Idempotency

Use one learning report per cycle ID. If rerun, append a correction note or
write a superseding report.

## Failure Modes

- no artifacts and no blockers -> `RETRY`
- missing stage summary -> include explicit gap
- access blockers dominate cycle -> route to human governance for access decision

## Acceptance Criteria

- report includes source coverage, blockers, RAT execution states, decisions,
  and next-cycle changes
- report separates missing access from market evidence
- report judges learning velocity, not artifact count
