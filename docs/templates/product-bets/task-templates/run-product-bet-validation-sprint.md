---
kind: task_template
name: Run Product Bet Validation Sprint
description: Post-Gate-A sprint that turns an approved Idea Card into validated behavior evidence and a Gate B route
schema: agentcompanies/v1
assignee: launch-lead
project: hypothesis-funnel
recurring: false
---

## Purpose

Run one bounded Product Bet Validation sprint after Gate A approval.

The task goal is behavior evidence and Gate B readiness, not build approval.

This is a task template. It must not be imported as an immediate backlog item.
CEO uses it to create the live task after Gate A approval.

## Owner

Primary owner: `Launch Lead`

Specialist owners:

- `product-bet-compiler`
- `competitor-deep-dive-analyst`
- `economics-modeler`
- `offer-positioning-strategist`
- `organic-traffic-strategist`
- `pre-market-autoreasoner`
- `landing-surface-builder`
- `product-bet-measurement-specialist`
- `evidence-router`

Review owners:

- `Launch Lead` for section sufficiency
- `CEO` for budget ambiguity or governance ambiguity
- board for Gate B

## Inputs

- frozen Gate A approved `Idea Card`
- Gate A decision and constraints, including `gate_a_decision_ref`
- `docs/product-bets/README.md`
- `docs/playbooks/product-bet-definition-playbook.md`
- Gate B policy
- product-bet templates under `docs/templates/product-bets/`

## Preconditions

- Gate A decision is `approve_product_bet_definition`.
- This task authorizes only Product Bet definition, validation surface work,
  organic distribution attempts, observation, evidence writing, and Gate B
  recommendation.
- Public validation surface publication requires explicit approval before it
  goes live.

## Steps

1. Freeze the approved `Idea Card` and Gate A decision.
2. Open one shared Product Bet Card.
3. Create specialist assignments for owned card sections.
4. Compile product identity, audience, problem/workflow, and first revision.
5. Run competitor deep dive.
6. Write offer and positioning.
7. Model economics and `$5k` paths.
8. Define organic distribution strategy and traffic test.
9. Create validation risk map.
10. Run internal autoreason and synthetic audience review.
11. Record concept revisions and fork candidates.
12. Select one revision to test externally.
13. Prepare landing design, copy variants, waitlist form, and surface version.
14. Define measurement plan and observation window.
15. Run only approved organic traffic attempts.
16. Monitor enough-time/enough-traffic thresholds.
17. Record traffic, behavior, and blocker results as validation evidence events.
18. Route validation result to build, revise, fork, test_more, or kill.
19. Write Gate B recommendation only when build is warranted.
20. Write one validation cycle learning report.

## Allowed Recommendations

- `build`
- `revise`
- `fork`
- `test_more`
- `kill`

The recommendation is not Gate B approval and is not build approval.

## Outputs

- Product Bet Card
- competitor deep dive pack
- financial model
- offer brief
- organic traffic strategy
- pain language map, search intent map, community prospecting map
- concept revisions and fork candidates
- selected test revision
- landing design
- copy variant matrix
- waitlist form spec
- validation risk map
- autoreason report
- test GTM surface pack
- surface version and surface QA
- measurement plan
- observation window
- traffic attempts and traffic source report
- validation evidence events
- validation cycle report
- Gate B recommendation
- validation learning report

## Idempotency

Use stable IDs for every artifact:

- `pb-YYYYMMDD-slug` for product bets
- `vrm-YYYYMMDD-slug` for validation risk maps
- `vee-YYYYMMDD-slug` for validation evidence events
- `gbr-YYYYMMDD-slug` for Gate B recommendations

If the task reruns, append corrections as new recommendations rather than
overwriting prior evidence.

## Failure Modes

Escalate when:

- Gate A decision is missing
- evidence lacks source references
- a traffic attempt has no success or failure threshold
- an external action needs approval and no approval ref exists
- a source has ToS or commercial-use risk
- a decision tries to skip Gate B
- evidence review is requested before enough time or enough traffic
- the bet requires non-canonical stack changes

## Acceptance Criteria

- Product Bet Validation starts only from a Gate A approved `Idea Card`.
- Every recommendation uses one of the allowed recommendations.
- Every recommendation includes evidence refs and EV bands.
- Every build recommendation includes observation-window and traffic-source refs
  or explicit CEO/board accepted-risk refs.
- Every traffic attempt includes thresholds, source refs, and UTM/tracking policy.
- No build, product repo attach, or action outside Gate A constraints occurs
  without approval.
