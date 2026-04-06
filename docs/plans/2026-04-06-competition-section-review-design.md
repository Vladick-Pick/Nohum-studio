# Competition Section Review Design

## Goal

Freeze the `Competition Section` enough for `Competitor Scout` and `Research Lead` to operate with a shared completion bar.

This design does not finalize the whole intake card. It only tightens:

- the normalized competition output
- the evidence required behind that output
- the review rules used by `Research Lead`

## Recommendation

Use a two-layer contract:

1. `Competition Section` inside the canonical idea card for decision-grade normalized conclusions
2. one linked `Competitor Evidence Card` per retained direct competitor for multi-source evidence and raw appendices

This keeps the main card readable while preserving enough proof to re-check category, pricing, traffic, and VOC claims.

## Competition Section Contract

The section should answer five questions:

1. Did the scout prove at least `3` live direct competitors?
2. Are those competitors actually direct rather than adjacent?
3. Is public pricing visible often enough to reason about market monetization?
4. Does the market look open enough to enter?
5. Is the artifact complete and reviewable?

Required normalized blocks:

- `Competition Verdict`
- `Retained Direct Competitors`
- `Excluded Lookalikes`
- `Positioning And Product Summary`
- `Category And Openness`
- `Pricing Reality`
- `Traffic And VOC Summary`
- `Evidence Quality`

`Positioning And Product Summary` should expose the competitor-site layer in the main card without dumping full page text.

Required normalized fields for this block:

- `target_buyer_summary`
- `value_prop_summary`
- `problem_and_jtbd_summary`
- `product_type_summary`
- `workflow_summary`
- `offer_and_cta_summary`
- `proof_and_trust_summary`
- `notable_positioning_differences`

## Review Rules

`Research Lead` should review the competition work in two separate dimensions:

- artifact quality: `PASS | RETRY | ESCALATE`
- content result: `positive | negative | inconclusive`

`PASS` means the section is complete enough to use.
It does not mean the market is attractive.

`positive` means the content supports the venture.
`negative` means the content weakens or fails the venture.

## Acceptance Bar

The section is acceptable only if:

- every retained direct competitor has a linked evidence card
- each retained competitor is verified against official site evidence
- traffic is enriched through `SimilarWeb` when available
- VOC sources are checked and empty results are recorded honestly
- excluded lookalikes are explained briefly
- contradictions and unresolved items are explicit
- freshness and confidence are present

## Retry Rules

`Research Lead` should return the section with `RETRY` when:

- directness is asserted but not evidenced
- pricing claims have no official pricing proof or explicit note that pricing is hidden
- traffic or VOC conclusions are narrative-only
- the section hides ambiguity instead of recording it
- retained competitors are too broad, too adjacent, or clearly not live

## Escalate Rules

`Research Lead` should use `ESCALATE` when:

- required tools or sources are blocked repeatedly
- core evidence is contradictory enough that the section cannot be stabilized
- the specialist cannot determine whether the market is direct without a higher-level category decision

## Hard-Gate Interpretation

`Competitor Scout` does not approve queue entry.
It proves or disproves the competition gate.

Minimum expectation:

- `3` live direct competitors if possible
- public pricing proof when available
- enough market-shape evidence for `Research Lead` to decide whether the competition gate passed, failed, or remains inconclusive
