---
kind: task
name: Write Product Bet Evidence Events
description: Normalize post-Gate-A test and blocker results into evidence events
schema: agentcompanies/v1
assignee: evidence-router
project: hypothesis-funnel
---

## Purpose

Write evidence events from Product Bet Definition tests and blocked execution
states.

## Inputs

- Product Bet Definition packet
- red hypothesis map
- red hypothesis test plans
- test execution results
- blocked execution report

## Preconditions

- Test or blocked execution result exists.
- Each result has source refs or blocker refs.
- Evidence template exists.

## Steps

1. Normalize each result with the evidence-event template.
2. Record metric, threshold, confidence, signal strength, and cost.
3. Keep internal findings, blocked states, and market validation separate.
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
- internal findings are not counted as market validation
- blocked execution states are not counted as market validation
- every evidence event links back to a product bet or blocker
