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
- `docs/product-bets/design.md` when present; otherwise a named fallback design
  reference set
- `docs/product-bets/validation-hosting.md`
- `docs/templates/product-bets/visual-conversion-review.md`
- Gate B policy
- product-bet templates under `docs/templates/product-bets/`

## Preconditions

- Gate A decision is `approve_product_bet_definition`.
- This task authorizes only Product Bet definition, validation surface work,
  organic distribution attempts, observation, evidence writing, and Gate B
  recommendation.
- Public validation surface publication requires explicit approval before it
  goes live.
- Product Bet Validation must run as nested loops, not as one flat downstream
  task list.
- `Measurement Specialist`, traffic, observation, Evidence Router, and
  Engineering implementation tasks require their upstream dependency gates.

## Steps

1. Freeze the approved `Idea Card` and Gate A decision.
2. Open one shared Product Bet Card.
3. Run `assembly_loop`: create specialist assignments for owned card sections.
4. Compile product identity, audience, problem/workflow, and first revision.
5. Run competitor deep dive.
6. Write offer and positioning.
7. Model economics and `$5k` paths.
8. Create validation risk map.
9. Launch Lead reviews each section and routes `RETRY` to the exact weak owner.
10. Run `internal_hardening_loop`: internal autoreason and synthetic audience
    critique.
11. Record concept revisions and fork candidates.
12. Launch Lead accepts/rejects hardening output and selects one revision to
    test externally.
13. Run `surface_readiness_loop`: prepare landing design, copy variants,
    waitlist form, surface version, and claims QA.
14. Run `surface_conversion_quality_review`: verify English-first target-market
    fit, product concept naming, competitor landing benchmark, design standard,
    no visible test framing in primary copy, and acceptable waitlist friction.
15. Run `visual_conversion_review`: route independent UI Designer and UX
    Architect review of first-view credibility, visual hierarchy, buyer journey,
    CTA path, trust handling, competitor landing quality bar, and mobile/desktop
    screenshots.
16. Verify validation hosting: use `https://<surface-slug>.claricont.com` when
    the validation domain is configured; raw IP URLs are not acceptable for
    board/public traffic unless CEO/board records an exception.
17. Publish or verify a board-review preview URL when the surface has passed
    internal QA. The preview must be `noindex`, unlinked, and attributed as
    internal/test traffic; preview visits are QA/approval evidence, not market
    validation.
18. Request or verify publication/validation approval for the surface when
    needed, including the board-review preview URL in the approval payload.
19. Define measurement plan only after `selected_test_revision` and
    `surface_version` draft/ref exist.
20. Implement only the approved validation surface and tracking contract.
21. Run tracking QA before any external traffic.
22. Run only approved organic traffic attempts.
23. Monitor enough-time/enough-traffic thresholds.
24. Record traffic, behavior, and blocker results as validation evidence events.
25. Route validation result to build, revise, fork, test_more, or kill.
26. Write Gate B recommendation only when build is warranted.
27. Write one validation cycle learning report.

## Dependency Gates

Launch Lead must enforce these gates before creating or unblocking downstream
tasks:

| Gate | Required before | Required state |
|---|---|---|
| `assembly_loop_pass` | hardening task | Product Bet Compiler, Competitor Deep Dive Analyst, Economics Modeler, and Offer Positioning Strategist sections are `PASS`, or CEO/board accepted the incomplete state |
| `hardening_decision_recorded` | surface task | autoreason report exists; `concept_revision` / `fork_candidate` decisions are recorded; one revision is recommended |
| `selected_test_revision_exists` | surface, measurement, traffic, observation, evidence | Launch Lead selected exactly one test revision |
| `surface_version_draft_exists` | measurement task | Landing Surface Builder produced or requested a versioned `surface_version` |
| `surface_conversion_quality_pass` | board-review preview, publication approval, measurement, traffic, observation, evidence | buyer-quality review is `PASS`: English-first target fit, product name visible, competitor/source names not used as product identity, competitor benchmark done, design standard applied, no visible test framing in primary copy, acceptable waitlist friction |
| `visual_conversion_review_pass` | board-review preview, publication approval, measurement, traffic, observation, evidence | independent UI Designer / UX Architect review is `PASS`: first-view credibility, visual hierarchy, buyer journey, CTA path, trust handling, competitor quality bar, and mobile/desktop screenshots |
| `validation_hosting_ready` | board-review preview, publication approval, traffic | preferred domain host resolves, TLS/proxy route works, noindex/robots/internal-test attribution are present for preview |
| `measurement_contract_ready` | implementation and traffic | Product Bet Measurement Specialist wrote event contract, thresholds, UTM policy, and QA criteria |
| `tracking_QA_passed` | organic traffic and observation | implementation emits required events and excludes internal/test traffic |
| `board_review_preview_available` | publication approval request | review URL exists, is noindex/unlinked, uses internal/test attribution, and is included in the approval payload |
| `traffic_attempts_recorded` | observation and Evidence Router | approved organic/free attempts exist or blocked states are explicit |
| `observation_ready_for_review` | Evidence Router Gate B recommendation | enough time, enough traffic, channel diversity, source quality, and measurement QA are decision-grade |

Invalid shortcuts:

- measurement task before `selected_test_revision` and `surface_version` draft/ref
- board-review preview, publication approval, measurement, traffic, observation,
  or evidence work before `surface_conversion_quality_pass` and
  `visual_conversion_review_pass`
- raw IP board/public URL when `claricont.com` validation hosting is available
  but not configured
- Engineering implementation before surface spec and measurement contract
- organic traffic before surface access and tracking QA
- Gate B request before Evidence Router writes `gate_b_recommendation`
- synthetic audience acceptance treated as market validation

If any downstream shortcut has already happened in a live sprint, do not repair
it by waiting for an observation window. Set the sprint route to
`PROCESS_RESET_REQUIRED`, cancel or supersede the misordered runtime tasks for
canonical Product Bet purposes, and create one restart task beginning at
`assembly_loop`. Previous artifacts may be cited only as incident evidence or
raw inputs, not as completed gates.

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
- surface conversion quality review
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
- The runtime issue graph preserves nested-loop order, or records an explicit
  `blocked_state` / approval request where order cannot advance.
