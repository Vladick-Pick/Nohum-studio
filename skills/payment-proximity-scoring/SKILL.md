---
name: payment-proximity-scoring
description: Use when scoring how close a RAT result is to real payment evidence.
---

# Payment Proximity Scoring

## Levels

- `weak`: likes, generic waitlist, vague interest, internal judge
- `medium`: positive reply, demo request without pricing, strong pain quote
- `strong`: checkout intent, priced demo request, paid pilot ask
- `decisive`: valid external payment or retained paying user

## Rule

A weak or medium RAT cannot by itself produce `GATE_A_CANDIDATE` unless other
strong evidence already exists.
