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

## Steps

1. Normalize each result with the evidence-event template.
2. Record metric, threshold, confidence, signal strength, and cost.
3. Keep blocked execution states separate from market validation.
4. Attach source refs.

## Required Output

- evidence events
