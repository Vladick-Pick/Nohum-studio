---
name: rat-access-check
description: Use when checking whether a RAT can run under current access, policy, and approval constraints.
---

# RAT Access Check

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
