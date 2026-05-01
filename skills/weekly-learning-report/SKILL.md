---
name: weekly-learning-report
description: Use when writing Product Bet Definition weekly learning reports.
---

# Weekly Learning Report

## Purpose

Summarize Product Bet Definition cycle learning, blockers, outcomes, and
next-cycle changes.

## Required Sections

- cycle ID
- Gate A decision ref
- product bets created
- red hypotheses identified
- internal findings
- test plans created
- test execution states
- evidence events
- Gate B recommendation
- strongest evidence
- weakest or misleading evidence
- recurring kill reasons
- next-cycle changes

## Rule

Judge the cycle by definition quality and learning velocity, not by artifact
count.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
