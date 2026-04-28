---
name: weekly-learning-report
description: Use when writing Product Bet Factory v0 weekly learning reports.
---

# Weekly Learning Report

## Purpose

Summarize Product Bet Factory v0 cycle learning, blockers, outcomes, and
next-cycle changes.

## Required Sections

- cycle ID
- source coverage
- blocked source report
- product bets created
- RAT plans created
- RAT execution states
- evidence events
- decision updates
- decisions by outcome
- strongest evidence
- weakest or misleading evidence
- recurring kill reasons
- next-cycle changes

## Rule

Judge the cycle by decision quality and learning velocity, not by artifact
count.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  `GATE_A_CANDIDATE` is never treated as Gate B or build approval.
