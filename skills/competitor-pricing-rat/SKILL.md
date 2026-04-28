---
name: competitor-pricing-rat
description: Use when executing a safe competitor/pricing RAT for Product Bet Factory v0.
---

# Competitor Pricing RAT

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
