---
name: competitor-pricing-rat
description: Use when executing a safe competitor/pricing RAT for Product Bet Definition.
---

# Competitor Pricing RAT

## Purpose

Run a read-only competitor and pricing RAT when source access and policy allow.

## Allowed Action

Read public competitor and pricing pages and record evidence snapshots.

## Access State

This RAT is usually `READY` when browser/search access is available and source
terms allow reading.

Return `BLOCKED_BY_POLICY` when source terms prohibit automated access.

## Output

- evidence event draft
- pricing delta notes
- confidence and freshness

## Execution Status

Return exactly one of:

- `READY`
- `MISSING_ACCESS`
- `APPROVAL_REQUIRED`
- `BLOCKED_BY_POLICY`

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
