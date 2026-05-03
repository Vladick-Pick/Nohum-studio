---
kind: task_template
name: Run Research Proof Review
description: Research Lead review of source signals before Idea Card or specialist work
schema: agentcompanies/v1
assignee: research-lead
project: hypothesis-funnel
---

## Purpose

Review source signals and decide whether to open an `Idea Card`, reject, hold,
or request specialist research.

This task is a compatibility wrapper for older proof-lite flows. In the target
model, proof lives in the canonical `Idea Card` through Competition, Demand, and
Monetization sections.

## Inputs

- research source batch
- source snapshots
- Copyable Product Thesis
- Decision Memory

## Preconditions

- Source refs are present for every signal being checked.
- Proof checks remain read-only.
- No Product Bet work starts before Gate A.

## Steps

1. Review each signal for buyer and job clarity.
2. Check duplicate and revisit risk.
3. Decide whether the signal deserves an `Idea Card`.
4. If opened, assign specialist work to existing Research agents:
   `Competitor Scout`, `Demand Validator`, and `Revenue Validator`.
5. If rejected or held, write the decision reason and reopen condition.

## Required Output

- intake decision per signal
- opened or rejected `Idea Card` refs
- specialist handoff notes when work is opened
- blocker refs when source access or policy prevents review

## Idempotency

Use the source `market_signal_id` as the proof key. If rerun, append an intake
decision version rather than mutating prior evidence.

## Failure Modes

- missing source refs -> `RETRY`
- blocked source -> preserve upstream execution state
- legal/commercial blocker -> `BLOCKED_BY_POLICY`

## Acceptance Criteria

- every reviewed signal has an intake decision and evidence refs
- every opened candidate has one canonical `Idea Card`
- no product bet is compiled inside this task
