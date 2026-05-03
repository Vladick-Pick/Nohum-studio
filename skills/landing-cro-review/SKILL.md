---
name: landing-cro-review
description: Review Product Bet validation surfaces for clarity, trust, friction, offer strength, CTA quality, and waitlist conversion readiness.
---

# Landing CRO Review

## Purpose

Decide whether a validation landing surface is clear enough to test externally.

## Review Axes

- headline clarity in 5 seconds
- audience specificity
- pain recognition
- offer specificity
- first value moment
- CTA visibility and consistency
- waitlist promise clarity
- pricing or availability hint
- trust and proof boundaries
- objection handling
- mobile readability
- friction in the waitlist form

## Output

```yaml
landing_CRO_review:
  status: pass | retry | escalate
  clarity_score: 0-5
  offer_score: 0-5
  trust_score: 0-5
  friction_score: 0-5
  strongest_issue:
  required_rewrites:
  retry_owner:
```

## Rules

- Do not optimize for beauty before clarity.
- Do not let generic SaaS copy pass.
- If the user cannot understand who it is for and what happens after CTA, retry.
