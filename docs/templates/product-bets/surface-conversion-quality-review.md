# Surface Conversion Quality Review

Owner: `launch-lead`

```yaml
surface_conversion_quality_review:
  id: scqr-YYYYMMDD-slug
  surface_version_ref:
  selected_test_revision_ref:
  owner: launch-lead
  created_at:
  status: pass | retry | escalate
```

## Purpose

Decide whether a validation surface is good enough to expose to real target
buyers. This review happens before board-review preview, publication approval,
measurement activation, organic traffic, observation, or Evidence Router work.

Technical QA is not enough. A page can render, submit forms, and emit events
while still being useless as a demand test.

## Required Context

```yaml
context:
  product_concept_name:
  source_reference_name:
  target_market:
  target_market_language:
  selected_test_revision_ref:
  surface_version_ref:
  design_standard_ref:
  competitor_landing_benchmark_refs:
```

Rules:

- `product_concept_name` must be a NoHum working product name visible on the
  page.
- `source_reference_name` may cite competitors or the original market signal,
  but it must not become the product identity.
- Default language is English for global, US, or Europe targets unless Gate A
  explicitly narrows another language.
- `docs/product-bets/design.md` is the default design standard when present. If
  it is absent, the builder must name the fallback reference set used.

## Review Axes

| Axis | PASS means | RETRY means |
|---|---|---|
| Product identity | product name and category are visible above the fold | page reads as generic "form endpoint" or copied competitor/source name |
| Market language | page language matches target market | non-target language appears in hero, nav, CTA, form, FAQ, or system copy |
| Above-fold promise | buyer, pain, outcome, and CTA are clear in 5 seconds | hero explains the experiment instead of the product |
| Offer strength | the page sells a believable specific first value | copy is generic, apologetic, or internally oriented |
| Test invisibility | primary copy reads like a real offer | primary copy says "validation", "testing demand", "research prompt", or similar |
| Waitlist honesty | CTA captures early access without promising live product, support, SLA, payment, or delivery | CTA either lies or over-disclaims until buyer motivation is destroyed |
| Competitor benchmark | above-fold, CTA, trust, demo/setup, pricing hint, and form friction were compared against retained competitors | surface was written without competitor landing comparison |
| Visual quality | layout is coherent on desktop/mobile and form does not dominate before value is clear | shifted layout, overflowing text, weak hierarchy, or generic AI visual language |
| Form friction | form asks only fields needed for qualification/routing | long research form blocks intent before value is understood |

## Decision

```yaml
decision:
  status: pass | retry | escalate
  strongest_conversion_risk:
  required_rewrites:
    - axis:
      owner:
      required_change:
  preserved_artifacts:
  invalid_for_market_traffic_until:
```

If `status: retry`, Launch Lead routes the task to the exact owner:

- product identity drift -> `product-bet-compiler`
- copied competitor/source naming -> `launch-lead` plus `product-bet-compiler`
- weak offer/copy -> `offer-positioning-strategist`
- visual/layout/form quality -> `landing-surface-builder`
- form qualification/friction -> `product-bet-measurement-specialist`
- competitor benchmark missing -> `competitor-deep-dive-analyst` plus
  `landing-surface-builder`

Do not publish, route traffic, open observation, or ask Evidence Router for Gate
B while this review is `retry` or `escalate`.
