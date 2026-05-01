---
name: evidence-event-writing
description: Use when writing Product Bet Definition evidence events from tests, internal findings, or blocked execution results.
---

# Evidence Event Writing

## Purpose

Record what happened, what was observed, and how much Gate B decision weight it
has.

## Required Fields

- source
- source ref
- metric
- observed value
- threshold
- result
- confidence
- signal strength
- payment proximity
- cost
- limitations

## Rule

Blocked execution states are evidence about operational readiness, not market
validation.

Internal autoreason and synthetic audience findings are product-shaping
evidence, not market validation.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
