# Visual Conversion Review

Owner: `launch-lead`

Required reviewers: `ui-designer`, `ux-architect`

```yaml
visual_conversion_review:
  id: vcr-YYYYMMDD-slug
  surface_version_ref:
  selected_test_revision_ref:
  reviewed_surface_url_or_path:
  owner: launch-lead
  reviewers:
    ui_designer:
    ux_architect:
  created_at:
  status: pass | retry | escalate
```

## Purpose

Decide whether the validation surface is visually and experientially credible
enough for a real target buyer to review. This is not browser QA, copy lint, or
tracking QA.

`surface_conversion_quality_review: PASS` is required before this review, but it
does not replace this review. A surface can satisfy doctrine and still look too
weak, generic, cluttered, or untrustworthy to produce useful market signal.

## Required Context

```yaml
context:
  product_concept_name:
  source_reference_name:
  target_market:
  target_buyer:
  selected_test_revision_ref:
  surface_version_ref:
  surface_conversion_quality_review_ref:
  design_standard_ref:
  competitor_landing_benchmark_refs:
  screenshots_reviewed:
    desktop:
    mobile:
```

## Review Axes

| Axis | PASS means | RETRY means |
|---|---|---|
| First-view credibility | first viewport feels like a credible product offer | page feels like placeholder, internal tool, or generated draft |
| First-view containment | common laptop desktop first viewport shows product name, headline, support copy, primary CTA, boundary note, and one credible proof cue without scroll | hero is so tall, oversized, or sparse that the buyer must scroll to understand the offer/proof block |
| Visual hierarchy | product name, promise, outcome, CTA, and proof/proxy have clear priority | everything competes for attention or CTA is visually weak |
| Buyer-job specificity | layout and visuals support the selected buyer/job | generic AI-SaaS layout that could fit any product |
| CTA path | primary CTA is visible, repeated consistently, and appears after value is clear | CTA is buried, premature, inconsistent, or form-led |
| Trust handling | objections, availability, boundaries, and affiliation are handled without killing motivation | page either overpromises or over-disclaims |
| Test/proposed framing absence | primary buyer-facing copy reads like a real early-access product offer while preserving truthful boundaries | copy foregrounds test, proposed, validation, Product Bet, Gate, internal approval, or "not a product" framing in the conversion path |
| Form completion friction | first waitlist intent can be completed in under 60 seconds; detailed qualification is optional/progressive; radio/checkbox controls are aligned | form is long, research-like, visually broken, or asks detailed qualification before intent |
| Competitor quality bar | page is compared against retained competitor landing quality, not only feature parity | no above-fold / CTA / trust / friction comparison |
| Mobile human scan | mobile screenshot is readable, persuasive, and not form-dominated before value | mobile layout is cramped, confusing, or conversion-hostile |

Hard-fail checks:

- If the hero does not fit as a self-contained offer/proof block on a common
  laptop desktop first viewport, return `retry`.
- If primary buyer-facing copy says or implies that this is a test,
  validation, proposed product, Product Bet, Gate, or internal approval
  surface, return `retry`.
- If the first waitlist form cannot be completed quickly by a motivated buyer,
  or if radio/checkbox controls are visually misaligned on desktop or mobile,
  return `retry`.

## Decision

```yaml
decision:
  status: pass | retry | escalate
  visual_score_0_5:
  ux_score_0_5:
  strongest_human_rejection_reason:
  required_changes:
    - owner:
      required_change:
  publication_ready_for_human_review: true | false
  preserved_artifacts:
  invalid_for_publication_until:
```

## Retry Routing

If `status: retry`, Launch Lead routes the exact weakness:

- weak visual hierarchy / aesthetics -> `ui-designer` plus `landing-surface-builder`
- buyer journey / CTA / form timing -> `ux-architect` plus `landing-surface-builder`
- product identity unclear -> `product-bet-compiler`
- offer promise weak -> `offer-positioning-strategist`
- competitor quality bar missing -> `competitor-deep-dive-analyst` plus `ui-designer`

Do not request publication approval, route traffic, open observation, or ask
Evidence Router for Gate B while this review is `retry` or `escalate`.
