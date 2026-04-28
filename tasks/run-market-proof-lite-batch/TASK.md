---
kind: task
name: Run Market Proof Lite Batch
description: Automated proof-lite checks for market-signal batches
schema: agentcompanies/v1
assignee: market-proof-analyst
project: hypothesis-funnel
---

## Purpose

Check whether market signals have enough buyer, competitor, pricing, channel,
legal, and buildability evidence to become product bets.

## Inputs

- market-signal batch
- source snapshots
- Copyable Product Thesis

## Preconditions

- Market-signal batch exists or the task records a skipped state.
- Source refs are present for every signal being checked.
- Proof checks remain read-only.

## Steps

1. Review each signal for buyer and job clarity.
2. Run competitor and pricing scan.
3. Run channel reality scan.
4. Run legal/commercial boundary scan.
5. Return proof status and confidence.

## Required Output

- market-proof-lite records
- proof blockers
- evidence refs

## Idempotency

Use the source `market_signal_id` as the proof key. If rerun, write a new proof
record version rather than mutating prior evidence.

## Failure Modes

- missing source refs -> `RETRY`
- blocked source -> preserve upstream execution state
- legal/commercial blocker -> `BLOCKED_BY_POLICY`

## Acceptance Criteria

- every proof record has status, confidence, and evidence refs
- competitor, pricing, channel, legal, and buildability checks are addressed
- no product bet is compiled inside this task
