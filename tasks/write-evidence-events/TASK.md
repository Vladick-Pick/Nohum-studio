---
kind: task
name: Write Evidence Events
description: Normalize proof, RAT, and blocked execution results into evidence events
schema: agentcompanies/v1
assignee: evidence-router
project: hypothesis-funnel
---

## Purpose

Write evidence events from market proof, RAT execution, and blocked execution
states.

## Inputs

- market-proof-lite records
- RAT plans
- RAT execution results
- blocked execution report

## Preconditions

- Proof, RAT, or blocked execution result exists.
- Each result has source refs or blocker refs.
- Evidence template exists.

## Steps

1. Normalize each result with the evidence-event template.
2. Record metric, threshold, confidence, signal strength, and cost.
3. Keep blocked execution states separate from market validation.
4. Attach source refs.

## Required Output

- evidence events

## Idempotency

Use stable `evidence_event_id` values tied to cycle ID and source event. If
rerun, append corrections as new evidence events.

## Failure Modes

- missing source ref -> `RETRY`
- blocked execution without blocker reason -> `RETRY`
- ambiguous payment signal -> escalate to CEO or board

## Acceptance Criteria

- every evidence event has source, metric, threshold, confidence, cost, and limitation
- blocked execution states are not counted as market validation
- every evidence event links back to a product bet or source blocker
