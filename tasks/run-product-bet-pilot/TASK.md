---
kind: task
name: Run Product Bet Pilot
description: Weekly bounded pilot that turns market signals into evidence-backed pre-Gate-A decisions
schema: agentcompanies/v1
assignee: research-lead
project: hypothesis-funnel
recurring: false
---

## Purpose

Run the Phase `0` Product Bet Pilot kernel for one weekly cycle.

The task goal is better pre-Gate-A decision quality, not build approval and not full factory automation.

## Owner

Primary owner: `Research Lead`

Review owners:

- `Launch Lead` for product definition and payment-path quality
- `CEO` for `GATE_A_CANDIDATE`, budget ambiguity, or governance ambiguity

## Inputs

- approved market signals
- existing Research evidence when available
- `docs/product-bets/README.md`
- `docs/playbooks/product-bet-pilot-playbook.md`
- `docs/research/copyable-product-thesis.md`
- Gate A and Gate B policy
- product-bet templates under `docs/templates/product-bets/`

## Preconditions

- No new agents are required.
- No new teams are required.
- No manifest update is required.
- No Autolab runner is required.
- No Product Hunt automation is required.
- No product substrate change is required.
- Any external spend has an approved budget envelope before execution.

## Steps

1. Capture `20-30` market signals using the market signal template.
2. Deduplicate obvious repeats against existing Research and decision-memory surfaces.
3. Select the strongest signals for `10` product bet cards.
4. Create assumption maps for those product bets.
5. Select the riskiest assumptions worth testing.
6. Create `5` RAT plans with thresholds, cost caps, and payment proximity.
7. Run only `2-3` lightweight tests whose actions are allowed by the RAT plan.
8. Record each result as an evidence event.
9. Write `5` decision updates.
10. Write one weekly learning report in the task output or review thread.

## Allowed Outcomes

- `KILL`
- `REVISE`
- `FORK`
- `TEST_MORE`
- `RESEARCH_REQUIRED`
- `GATE_A_CANDIDATE`

`GATE_A_CANDIDATE` is only a recommendation for existing Gate A governance review. It is not Gate B and it is not build approval.

## Outputs

- `20-30` market signal records
- `10` product bet cards
- `5` RAT plans
- `2-3` evidence events
- `5` decision updates
- `1` weekly learning report
- `0-1` `GATE_A_CANDIDATE`

## Idempotency

Use stable IDs for every artifact:

- `ms-YYYYMMDD-slug` for market signals
- `pb-YYYYMMDD-slug` for product bets
- `as-###` for assumptions
- `rat-YYYYMMDD-slug` for RAT plans
- `ee-YYYYMMDD-slug` for evidence events
- `du-YYYYMMDD-slug` for decision updates

If the task reruns, append corrections as new decision updates rather than overwriting prior evidence.

## Failure Modes

Escalate when:

- evidence lacks source references
- a RAT has no success or failure threshold
- a RAT has unclear payment proximity
- an external action needs spend without a budget envelope
- a source has ToS or commercial-use risk
- a decision tries to skip Research, Gate A, or Gate B
- `GATE_A_CANDIDATE` is interpreted as build approval
- the bet requires non-canonical stack changes

## Escalation

- Payment ambiguity: escalate to `CEO` and board according to payment policy.
- Source or legal ambiguity: escalate before any external action.
- Stack ambiguity: stop and route to existing Gate B / stack governance.
- Budget ambiguity: stop until the budget envelope is explicit.

## Acceptance Criteria

- Product Bet Pilot produces evidence-backed decision updates.
- Every decision update uses one of the allowed outcomes.
- No Phase `0` artifact uses the legacy build-candidate outcome.
- Every decision update includes evidence refs and interval EV bands.
- Every RAT plan includes payment proximity, thresholds, max cost, and max time.
- No new agents, teams, manifest entries, Autolab runners, substrate changes, or GTM automation are introduced.

## Checks To Run

Run:

```bash
legacy_outcome="BUILD""_CANDIDATE"; rg -n "$legacy_outcome" docs/product-bets docs/playbooks/product-bet-pilot-playbook.md docs/templates/product-bets tasks/run-product-bet-pilot || true
rg -n "GATE_A_CANDIDATE" docs/product-bets docs/playbooks/product-bet-pilot-playbook.md docs/templates/product-bets tasks/run-product-bet-pilot
rg -n "dangerouslyBypassApprovalsAndSandbox: true|budgetMonthlyCents: 650000|limit=100" .paperclip.yaml skills/research-trustmrr-sourcing/SKILL.md
```

Expected:

- no Phase `0` legacy build-candidate outcome
- `GATE_A_CANDIDATE` appears in Phase `0` docs
- no approval bypass default, old budget mismatch, or old TrustMRR limit example remains
