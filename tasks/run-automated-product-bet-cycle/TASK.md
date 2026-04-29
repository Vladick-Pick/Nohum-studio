---
kind: task
name: Run Automated Product Bet Cycle
description: Orchestrates the automated pre-Gate-A Product Bet Factory v0 cycle
schema: agentcompanies/v1
assignee: research-lead
project: hypothesis-funnel
recurring: false
---

## Purpose

Run the automated pre-Gate-A product bet cycle end to end.

Agents collect signals, compile bets, reason, plan RATs, execute only allowed
tests, record evidence, route decisions, and write learning reports.

Humans remain responsible for secrets, approvals, Gate A review, and override.

## Inputs

- cycle config
- source adapter registry
- tool access matrix
- RAT execution boundaries
- Product Bet Pilot templates

## Preconditions

- PR #3 Product Bet Pilot kernel is present.
- Source adapter registry and tool access matrix are available.
- New agents are imported or assigned by the Paperclip runtime.
- New agents remain approval-bounded and cannot create agents.

## Cycle Config

```yaml
cycle_config:
  batch_size:
    trustmrr: 20
    product_hunt: 20
    github: 10
    marketplaces: 10
  max_product_bets: 10
  max_autoreason_runs: 10
  max_rat_plans: 5
  max_external_tests: 2
  allowed_external_actions:
    - competitor_pricing_scan
    - landing_spec_generation
    - cold_outreach_draft_only
  disallowed_without_approval:
    - send_email
    - paid_ads
    - collect_payment
    - public_launch
```

## Task Graph

1. `tasks/run-market-signal-batch/TASK.md`
2. `tasks/run-market-proof-lite-batch/TASK.md`
3. `tasks/compile-product-bet-batch/TASK.md`
4. `tasks/run-pre-market-autoreason-batch/TASK.md`
5. `tasks/create-rat-plan-batch/TASK.md`
6. `tasks/run-safe-rat-batch/TASK.md`
7. `tasks/write-evidence-events/TASK.md`
8. `tasks/route-product-bet-decisions/TASK.md`
9. `tasks/write-product-bet-learning-report/TASK.md`

## Stop Conditions

- missing secret blocks a configured source
- approval required before customer-facing action
- source ToS or policy blocker
- payment, public launch, paid ads, or outreach without approval
- attempt to treat `GATE_A_CANDIDATE` as build approval

## Required Output

- market signals
- market proof lite
- product bets
- assumption maps
- autoreason scorecards
- RAT plans and execution states
- evidence events
- decision updates
- learning report

## Idempotency

Use one cycle ID for the full graph. Each subtask must append new artifacts or
superseding records rather than mutating prior cycle evidence.

## Failure Modes

- missing secrets -> source-specific `MISSING_ACCESS`
- approval-gated action -> `APPROVAL_REQUIRED`
- policy-blocked source or RAT -> `BLOCKED_BY_POLICY`
- no executable sources -> write dry-run or blocked-cycle learning report

## Acceptance Criteria

- every subtask produces output or explicit skipped/blocker reason
- no customer-facing or spend action happens without approval
- evidence events and decision updates are generated when inputs exist
- learning report states what access is needed to run live
