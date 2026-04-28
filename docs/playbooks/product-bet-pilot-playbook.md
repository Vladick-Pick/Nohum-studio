# Product Bet Pilot Playbook

Trigger: run a bounded weekly pilot to convert market signals into pre-Gate-A decisions.

Primary owner: `Research Lead`

Review owners:

- `Launch Lead` for product definition and first-payment path quality
- `CEO` for Gate A candidacy and budget/governance ambiguity
- board only for existing board-only decisions

## Operating Rule

Product Bet Pilot is a pre-Gate-A decision kernel.

It does not replace Research, does not approve build, and does not create a new venture lifecycle.

Allowed outcomes:

- `KILL`
- `REVISE`
- `FORK`
- `TEST_MORE`
- `RESEARCH_REQUIRED`
- `GATE_A_CANDIDATE`

`GATE_A_CANDIDATE` only means candidate for existing Gate A governance review. It is not Gate B and it is not build approval.

## Inputs

- market signals from approved sources
- existing Research evidence when available
- current Copyable Product Thesis
- Gate A and Gate B policy
- payment-signal policy
- canonical stack policy

## Weekly Sequence

1. Capture `20-30` market signals.
2. Deduplicate obvious repeats against existing Research and decision memory surfaces.
3. Create `10` product bet cards from the strongest signals.
4. Create assumption maps for the product bets.
5. Select the riskiest assumption for each candidate worth testing.
6. Create `5` RAT plans.
7. Run `2-3` lightweight tests only when the RAT has explicit thresholds and allowed actions.
8. Record evidence events.
9. Write `5` decision updates.
10. Write one weekly learning report in the task output or review thread.

## Decision Rules

Use interval EV bands. Do not use fake precise probabilities.

Decision logic:

```text
Take the next step only when expected learning or upside is greater than cost plus risk.
```

Evidence closest to payment carries the most weight.

Weak signals include:

- internal judge scores
- generic waitlists
- likes, upvotes, and vague positive replies
- "looks interesting" comments

Stronger signals include:

- checkout intent
- paid concierge intent
- paid pilot ask
- demo request after pricing is shown
- reply with explicit willingness to pay
- real external payment

If a RAT is not close to payment, it cannot by itself produce `GATE_A_CANDIDATE` unless other strong evidence exists.

## Required Outputs

- market signal records
- product bet cards
- assumption maps
- RAT plans
- evidence events
- decision updates
- weekly learning report

## Weekly Learning Report

Include:

- processed signals count
- product bets created count
- RAT plans created count
- evidence events created count
- decision updates created count
- decisions by outcome
- strongest evidence observed
- weakest or misleading evidence observed
- recurring kill reasons
- source quality notes
- next-week changes to the pilot

## Failure Modes

Escalate when:

- evidence lacks source references
- thresholds are missing
- a decision tries to bypass Research or Gate A
- `GATE_A_CANDIDATE` is treated as build approval
- the pilot needs external spend without an approved budget envelope
- a payment signal is ambiguous
- a source has ToS or commercial-use risk
- the product requires non-canonical stack changes

## Acceptance Criteria

- Phase 0 outcomes use `GATE_A_CANDIDATE`, not legacy build-candidate routing.
- Every decision update has evidence references and reason codes.
- Every RAT plan has success and failure thresholds.
- Every RAT plan records payment proximity.
- No new agents, teams, manifest entries, Autolab runners, substrate changes, or GTM automation are introduced.
