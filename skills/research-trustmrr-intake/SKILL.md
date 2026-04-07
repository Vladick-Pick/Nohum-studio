---
name: research-trustmrr-intake
description: Use when converting TrustMRR raw leads into normalized NoHum research cases before specialist validation begins.
---

# Research TrustMRR Intake

Use this skill after `Research Lead` has picked a raw lead from a sourcing batch and before competitor, demand, or revenue validation starts.

In v1, TrustMRR is the only sourcing universe for new candidate discovery, but this skill is still for the canonical `Idea Card`, not for sourcing batches.

## Purpose

Turn a raw TrustMRR-style lead into one normalized candidate card that specialists can work from without guessing.

Use `docs/research/copyable-product-thesis.md` as the shared intake decision framework. Your job is to decide whether a shortlisted sourcing candidate deserves canonical intake, not to turn every interesting startup into research work.

## Run Order

1. Verify the lead is a real product candidate, not just an interesting story.
2. Extract the minimum normalized fields.
3. Reject obvious non-fit cases early.
4. Publish one `Idea Card` with links, freshness, and open questions.

At this stage the practical decision is:

- `skip` when the candidate clearly conflicts with the thesis
- `hold` when the candidate might fit but key proof is still missing
- `create intake` only when the candidate looks enough like a copyable NoHum product to deserve specialist time

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
- `source_url`
- `capture_date`
- `source_platform`
- `product_name`
- `product_url`
- `site_domain`
- `reported_revenue_or_mrr`
- `one_line_problem`
- `likely_icp`
- `offer_type`
- `pricing_visibility`
- `proof_product_is_live`
- `monetization_hint`
- `demand_hint`
- `default_path_fit_concerns`
- `duplicate_check`
- `strongest_direct_source`
- `corroborating_sources`
- `open_questions_for_specialists`
- `intake_verdict: REJECT | RESEARCH | HOLD`

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
- If pricing is hidden, write `pricing_visibility: hidden`, not a guessed number.
- If the buyer is ambiguous, write the top hypothesis plus the contradiction.
- Preserve TrustMRR-reported revenue or MRR as observed in `reported_revenue_or_mrr`; do not silently coerce it into a fake precise metric.

## Output Contract

The `Idea Card` must end with:

- why this lead deserves specialist time
- what must be proven next
- what would kill it quickly

If that is not explicit, the intake is incomplete.

Research Foundation v1 freezes the schema in `docs/research/contracts/intake-and-handoffs.md`. Use that contract if local templates drift.
