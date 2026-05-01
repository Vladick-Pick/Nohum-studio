---
name: blind-variant-generation
description: Use when creating bounded alternative product-bet variants during pre-market autoreason.
---

# Blind Variant Generation

## Purpose

Create alternative versions of a product bet without modifying frozen evidence.

## Variant Axes

- buyer
- positioning
- pricing
- activation
- channel
- scope
- product shape

## Rules

- Generate no more than two variants in v0.
- Do not invent evidence.
- Label new risks clearly.
- Preserve first payment path discipline.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
