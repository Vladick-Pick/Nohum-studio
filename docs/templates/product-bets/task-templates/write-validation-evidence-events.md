---
kind: task_template
name: Write Product Bet Validation Evidence Events
description: Normalize post-Gate-A validation and blocker results into validation evidence events
schema: agentcompanies/v1
assignee: evidence-router
project: hypothesis-funnel
---

## Purpose

Write validation evidence events from Product Bet Validation surface, traffic, and blocked execution
states.

## Inputs

- Product Bet Card
- validation risk map
- validation surface and traffic attempt plans
- observation-window results
- blocked execution report

## Preconditions

- Gate A decision is `approve_product_bet_definition`.
- Observation result, traffic attempt result, or blocked execution result exists.
- Each result has source refs or blocker refs.
- Evidence template exists.

## Steps

1. Normalize each result with the validation evidence template.
2. Record metric, threshold, confidence, cost, duration, and limitation.
3. Keep internal findings, blocked states, and behavior evidence separate.
4. Attach source refs.

## Required Output

- validation evidence events

## Idempotency

Use stable `evidence_event_id` values tied to cycle ID and source event. If
rerun, append corrections as new validation evidence events.

## Failure Modes

- missing source ref -> `RETRY`
- blocked execution without blocker reason -> `RETRY`
- ambiguous source quality -> `RETRY` or `ESCALATE`

## Acceptance Criteria

- every validation evidence event has source, metric, threshold, confidence, cost, and limitation
- internal findings are not counted as behavior evidence
- blocked execution states are not counted as behavior evidence
- every validation evidence event links back to a product bet revision, surface,
  traffic attempt, observation window, or blocker
