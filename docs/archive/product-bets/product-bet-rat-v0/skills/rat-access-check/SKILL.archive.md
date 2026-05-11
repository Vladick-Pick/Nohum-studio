---
name: rat-access-check
description: Use when checking whether a validation risk test can run under current access, policy, and approval constraints.
---

# Validation Risk Test Access Check

## Purpose

Classify whether a validation risk test can run under current access, approval,
and policy constraints.

## Execution States

- `READY`: access exists and policy allows execution
- `MISSING_ACCESS`: required secret, account, or deployment is absent
- `APPROVAL_REQUIRED`: approval is required before execution
- `BLOCKED_BY_POLICY`: action is forbidden in current policy

## Rules

- Do not silently skip blocked tests.
- Return missing access by name.
- Return required approval owner.
- Preserve blocked states in evidence and learning reports.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
