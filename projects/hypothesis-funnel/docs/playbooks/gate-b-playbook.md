# Gate B Playbook

Gate B is the build permission boundary. Use
[Gate B Mini-Passport](../readiness/gate-b-readiness.md) as the governing
contract.

## Trigger

Evidence Router has written a `gate_b_recommendation` from Product Bet
Validation evidence.

## Owners

- `Evidence Router` owns the recommendation packet.
- `Launch Lead` owns Product Bet sufficiency and handoff readiness.
- `CEO` and board own the Gate B decision.
- `VP of Engineering` owns build activation only after approval.

## Canonical Inputs

- Product Bet Card
- selected `product_bet_revision_ref`
- exact `surface_version_ref`
- Measurement Plan
- Observation Window
- Validation Evidence Events
- Gate B Recommendation
- Financial Model
- Build scope proposal
- accepted-risk proposal when any hard criterion is unresolved

## Canonical Outputs

Gate B produces exactly one canonical decision action:

- `approve_build`
- `revise_product_bet`
- `run_more_tests`
- `kill`

Do not use `PASS`, `FAIL`, `RETRY`, or `ESCALATE` as Gate B decision values.
Those can appear in readiness reviews, but the decision record must use the
canonical actions above.

## Operating Sequence

1. Verify the recommendation cites the tested Product Bet revision.
2. Verify the hard criteria in Product Bet README are pass or explicitly named
   accepted-risk candidates.
3. Verify observation evidence is mature enough or the requested decision is
   `run_more_tests`.
4. Verify analytics and source-quality limitations are explicit.
5. Verify build scope and forbidden scope are bounded.
6. Verify stack fit or board-approved stack exception.
7. CEO/board records a Gate B decision.
8. If `approve_build`, create exactly one scoped build activation path for VP
   Engineering.

## Invalid Shortcuts

- Evidence Router recommendation treated as approval.
- Build task created before `gate_b_decision`.
- Build scope that does not match the tested revision.
- Accepted risk without owner, mitigation, and stop/rollback condition.
- Gate B used to approve broad launch/GTM or payment claims outside scope.

## Escalations

Escalate to CEO/board when:

- payment, pricing, launch-readiness, legal, or stack-fit ambiguity remains
- hard criteria are unresolved but build is still being requested
- publication or traffic blockers are being treated as market evidence
- build activation would exceed Gate B scope
