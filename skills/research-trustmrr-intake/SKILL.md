---
name: research-trustmrr-intake
description: Use when converting TrustMRR or other revenue-visible raw leads into normalized NoHum research cases before specialist validation begins.
---

# Research TrustMRR Intake

Use this skill before competitor, demand, or revenue validation starts.

## Purpose

Turn a raw TrustMRR-style lead into one normalized candidate card that specialists can work from without guessing.

## Run Order

1. Verify the lead is a real product candidate, not just an interesting story.
2. Extract the minimum normalized fields.
3. Reject obvious non-fit cases early.
4. Publish one intake card with links, freshness, and open questions.

## TrustMRR Parsing Priority

When a TrustMRR record links multiple surfaces, check them in this order:

1. product homepage or app URL
2. pricing page or checkout surface
3. source post or founder write-up
4. reviews, testimonials, or community proof
5. docs, changelog, or integration pages

Do not treat a social post alone as enough proof that the product is live.

## Minimum Candidate Card Fields

- `venture_id`
- source URL and capture date
- product name
- primary product URL
- one-line buyer problem
- likely ICP
- offer type and pricing visibility
- proof the product is live
- monetization hint
- demand hint
- default-path fit concerns
- open questions for specialists
- intake verdict: `REJECT`, `RESEARCH`, or `HOLD`

## Early Reject Filters

Reject before deep research when any of these is true:

- no working product surface
- no clear buyer or job-to-be-done
- no visible or inferable path to payment
- obvious agency, consulting, or custom-services business
- obvious marketplace or platform complexity outside NoHum default path
- requires enterprise procurement or sales-led motion to get first payment
- product shape is too broad to ship as a tight MVP

Use `HOLD` only when the lead looks promising but key proof is still missing.

## Normalization Rules

- One candidate, one card. Do not let the same idea fork into multiple names.
- If the same product appears from multiple sources, keep the strongest direct source as primary and list the rest as corroboration.
- Separate facts from inference.
- If pricing is hidden, write `pricing visibility: hidden`, not a guessed number.
- If the buyer is ambiguous, write the top hypothesis plus the contradiction.

## Output Contract

The intake card must end with:

- why this lead deserves specialist time
- what must be proven next
- what would kill it quickly

If that is not explicit, the intake is incomplete.
