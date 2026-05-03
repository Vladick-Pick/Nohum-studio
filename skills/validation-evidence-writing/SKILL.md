---
name: validation-evidence-writing
description: Use when writing narrow pre-Gate-B Product Bet Validation evidence events from traffic, waitlist, analytics, qualitative feedback, or blocked states.
---

# Validation Evidence Event Writing

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
- cost
- limitations

Common validation metrics:

- unique visitors
- source quality
- CTA clicks
- CTA click rate
- waitlist submits
- waitlist conversion
- pricing clicks
- qualitative feedback
- blocked state

## Rule

Blocked execution states are evidence about operational readiness, not market
validation.

Internal autoreason and synthetic audience findings are product-shaping
evidence, not market validation.

Waitlist intent is not payment validation. It can support Gate B only when
traffic source, observation window, and signal quality are explicit.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no action outside Gate A constraints, no Gate A
  approval, no Gate B approval, and no build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
