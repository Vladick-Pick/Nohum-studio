---
kind: task
name: Run Product Bet Definition Sprint
description: Post-Gate-A sprint that turns an approved Idea Card into a Gate B recommendation
schema: agentcompanies/v1
assignee: launch-lead
project: hypothesis-funnel
recurring: false
---

## Purpose

Run one bounded Product Bet Definition sprint after Gate A approval.

The task goal is Gate B readiness, not build approval.

## Owner

Primary owner: `Launch Lead`

Review owners:

- `Product Definer` for product definition quality
- `Growth Lead` or `CMO` for test GTM quality
- `CEO` for budget ambiguity or governance ambiguity
- board for Gate B

## Inputs

- Gate A approved `Idea Card`
- Gate A decision and constraints
- `docs/product-bets/README.md`
- `docs/playbooks/product-bet-definition-playbook.md`
- Gate B policy
- product-bet templates under `docs/templates/product-bets/`

## Preconditions

- Gate A decision is `approve_product_bet_definition`.
- No build, product repo attach, public deploy, outreach send, or payment
  collection is approved by this task.
- Any external spend has an approved budget envelope before execution.

## Steps

1. Freeze the approved `Idea Card` and Gate A decision.
2. Compile one Product Bet Definition packet.
3. Create a red hypothesis map.
4. Run internal autoreason and synthetic audience review.
5. Create thresholded test plans for the highest-risk red hypotheses.
6. Prepare test GTM assets and surface pack.
7. Run only approved external tests.
8. Record results as evidence events.
9. Write a Gate B recommendation.
10. Write one product definition learning report.

## Allowed Recommendations

- `build`
- `revise`
- `test_more`
- `kill`

The recommendation is not Gate B approval and is not build approval.

## Outputs

- Product Bet Definition packet
- red hypothesis map
- test plans
- test GTM surface pack
- evidence events
- Gate B recommendation
- product definition learning report

## Idempotency

Use stable IDs for every artifact:

- `pb-YYYYMMDD-slug` for product bets
- `rh-YYYYMMDD-slug` for red hypothesis maps
- `rt-YYYYMMDD-slug` for test plans
- `ee-YYYYMMDD-slug` for evidence events
- `gbr-YYYYMMDD-slug` for Gate B recommendations

If the task reruns, append corrections as new recommendations rather than
overwriting prior evidence.

## Failure Modes

Escalate when:

- Gate A decision is missing
- evidence lacks source references
- a test has no success or failure threshold
- an external action needs spend without a budget envelope
- a source has ToS or commercial-use risk
- a decision tries to skip Gate B
- the bet requires non-canonical stack changes

## Acceptance Criteria

- Product Bet Definition starts only from a Gate A approved `Idea Card`.
- Every recommendation uses one of the allowed recommendations.
- Every recommendation includes evidence refs and EV bands.
- Every test plan includes thresholds, max cost, and max time.
- No build, product repo attach, public deploy, outreach send, payment
  collection, or paid ads occur without approval.
