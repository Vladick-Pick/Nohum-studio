---
name: payment-proximity-scoring
description: Use when scoring how close a red hypothesis test result is to real payment evidence.
---

# Payment Proximity Scoring

## Purpose

Score how close a red hypothesis test result is to real payment evidence.

## Levels

- `weak`: likes, generic waitlist, vague interest, internal judge
- `medium`: positive reply, demo request without pricing, strong pain quote
- `strong`: checkout intent, priced demo request, paid pilot ask
- `decisive`: valid external payment or retained paying user

## Rule

A weak or medium result cannot by itself justify a build recommendation unless
other strong evidence already exists.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
