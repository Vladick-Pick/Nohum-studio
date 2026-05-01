# Product Bet Definition Playbook

Trigger: Gate A approves an `Idea Card` for product definition.

Primary owner: `Launch Lead`

Review owners:

- `Product Definer` for product image, feature scope, and handoff quality
- `Growth Lead` or `CMO` for test GTM surfaces and measurement
- `CEO` for budget/governance ambiguity
- board for Gate B and board-only decisions

## Operating Rule

Product Bet Definition is a post-Gate-A product-shaping machine.

It does not replace Research, does not approve build, and does not start before
Gate A.

Allowed Gate B recommendations:

- `build`
- `revise`
- `test_more`
- `kill`

The recommendation is not Gate B approval. Gate B remains a board boundary.

## Inputs

- Gate A approved `Idea Card`
- Gate A decision and constraints
- current Copyable Product Thesis
- Gate B policy
- payment-signal policy
- canonical stack policy
- test GTM and red hypothesis boundaries

## Definition Sequence

1. Freeze the approved `Idea Card` and Gate A decision.
2. Run competitor deep dive for copyable patterns and differentiation gaps.
3. Draft the product bet definition.
4. Define ICP, buyer, user, payer, excluded segments, and positioning.
5. Define product shape, MVP features, non-MVP features, and non-goals.
6. Define offer, USP, pricing hypothesis, objections, and responses.
7. Identify red hypotheses that can kill the product before build.
8. Run internal autoreason and synthetic audience review.
9. Create test GTM program and surface pack.
10. Execute only approved external tests.
11. Record evidence events and limitations.
12. Write Gate B recommendation.
13. Write one learning report for the product definition sprint.

## Evidence Rules

Use interval EV bands. Do not use fake precise probabilities.

Internal evidence includes:

- critic findings
- synthetic audience objections
- positioning variant scores
- competitor gap summary
- build and cost critique

External evidence includes:

- landing visits
- CTA clicks
- pricing clicks
- waitlist signups with price context
- checkout starts
- directory acceptance
- public replies or comments
- qualitative buyer language

Internal evidence can improve the product bet, but it cannot validate the
market alone.

## Required Outputs

- product bet definition
- red hypothesis map
- test plans
- test GTM surface pack
- evidence events
- Gate B recommendation
- product definition learning report

## Failure Modes

Escalate when:

- Gate A decision is missing
- evidence lacks source references
- thresholds are missing
- a decision tries to bypass Gate B
- the sprint needs external spend without an approved budget envelope
- a payment signal is ambiguous
- a source has ToS or commercial-use risk
- the product requires non-canonical stack changes

## Acceptance Criteria

- Product Bet Definition starts only from a Gate A approved `Idea Card`.
- Every red hypothesis has a risk class and test method.
- Every external test has success and failure thresholds.
- Every evidence event has source refs and limitations.
- Gate B recommendation is one of `build`, `revise`, `test_more`, or `kill`.
- No build, product repo attach, payment collection, public deploy, or outreach
  send happens without the required approval.
