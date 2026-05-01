---
kind: task
name: Run Automated Product Bet Definition Cycle
description: Orchestrates the post-Gate-A Product Bet Definition cycle
schema: agentcompanies/v1
assignee: launch-lead
project: hypothesis-funnel
recurring: false
---

## Purpose

Run the automated post-Gate-A product definition cycle end to end.

Agents compile the product bet, harden it, identify red hypotheses, plan and
run only approved tests, record evidence, route the Gate B recommendation, and
write learning reports.

Humans remain responsible for secrets, approvals, Gate B review, and override.

## Inputs

- Gate A approved `Idea Card`
- Gate A decision and constraints
- tool access matrix
- red hypothesis test boundaries
- Product Bet Definition templates

## Preconditions

- Gate A decision is `approve_product_bet_definition`.
- Product Bet Definition templates are present.
- Product Bet agents are imported or assigned by the Paperclip runtime.
- Product Bet agents remain approval-bounded and cannot create agents.

## Cycle Config

```yaml
cycle_config:
  max_product_bets: 1
  max_autoreason_runs: 3
  max_test_plans: 5
  max_external_tests: 2
  allowed_external_actions:
    - competitor_pricing_scan
    - landing_spec_generation
    - synthetic_audience_review
    - cold_outreach_draft_only
  disallowed_without_approval:
    - send_email
    - paid_ads
    - collect_payment
    - public_launch
    - public_landing_deploy
```

## Task Graph

1. `tasks/compile-product-bet-batch/TASK.md`
2. `tasks/run-pre-market-autoreason-batch/TASK.md`
3. `tasks/create-rat-plan-batch/TASK.md`
4. `tasks/run-safe-rat-batch/TASK.md`
5. `tasks/write-evidence-events/TASK.md`
6. `tasks/route-product-bet-decisions/TASK.md`
7. `tasks/write-product-bet-learning-report/TASK.md`

## Stop Conditions

- missing Gate A decision
- missing secret blocks a configured test
- approval required before customer-facing action
- source ToS or policy blocker
- payment, public launch, paid ads, public deploy, or outreach without approval
- attempt to treat Gate B recommendation as build approval

## Required Output

- Product Bet Definition packet
- red hypothesis map
- autoreason scorecards
- test plans and execution states
- evidence events
- Gate B recommendation
- learning report

## Idempotency

Use one cycle ID for the full graph. Each subtask must append new artifacts or
superseding records rather than mutating prior cycle evidence.

## Failure Modes

- missing Gate A decision -> `RETRY`
- missing secrets -> source-specific `MISSING_ACCESS`
- approval-gated action -> `APPROVAL_REQUIRED`
- policy-blocked source or test -> `BLOCKED_BY_POLICY`
- no executable tests -> write blocked-cycle learning report

## Acceptance Criteria

- every subtask produces output or explicit skipped/blocker reason
- no customer-facing or spend action happens without approval
- evidence events and Gate B recommendation are generated when inputs exist
- learning report states what access is needed to run live tests
