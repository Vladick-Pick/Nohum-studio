---
name: product-bet-validation-loop
description: Run the post-Gate-A Product Bet loop from selected revision through landing, traffic, observation, evidence, and Gate B routing.
---

# Product Bet Validation Loop

## Purpose

Product Bet Validation tests whether NoHum can package an approved market
opportunity into an understandable offer, attract relevant organic traffic, and
collect waitlist/signup intent before build.

It does not validate payment and does not approve build.

## Required Flow

1. Load the frozen `Idea Card` and `gate_a_decision`.
2. Open or update the shared Product Bet Card.
3. Record concept revisions and fork candidates from AI hardening.
4. Select one test revision.
5. Build a landing/waitlist validation surface.
6. Set measurement and observation window.
7. Run approved organic traffic attempts.
8. Evaluate enough-time/enough-traffic thresholds.
9. Route to `build`, `revise_offer`, `revise_landing`, `revise_channel`,
   `open_fork`, `test_more`, or `kill`.

## Decision Rules

- If time is insufficient, continue observation.
- If traffic is insufficient, route to organic distribution.
- If traffic is sufficient but CTA/waitlist is weak, route to offer or landing.
- If a different angle looks stronger, open or promote a fork.
- If qualified waitlist intent is strong, write a Gate B build recommendation.
- If the bounded window expires with no signal, kill or park with learning.

## Required Artifacts

- Product Bet Card
- selected test revision
- landing design
- waitlist form spec
- measurement plan
- organic distribution test plan
- observation window
- traffic attempts
- evidence events
- validation cycle report

## Permission Boundary

No action outside Gate A constraints, Gate B approval, or build approval without
explicit approval.
