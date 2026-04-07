# Revenue Validator Design

**Date:** 2026-04-07

## Goal

Turn `Revenue Validator` from a thin monetization placeholder into a decision-grade specialist that can explain whether a candidate's economics plausibly support first payment and a path to `$5k MRR`.

## Core Design

`Revenue Validator` is not a bookkeeping role and does not claim exact financial truth. It builds a public-evidence-backed monetization model from:

- preserved `TrustMRR` business metrics inside the `Idea Card`
- reused `SimilarWeb` traffic from upstream artifacts
- public competitor pricing and billing surfaces
- competition and demand context already written by specialists

The section must separate:

- `observed` facts from source systems
- `inferred` calculations derived directly from observed data
- `assumed` scenario variables such as conversion and churn

## Required Output Shape

The monetization section should contain:

1. `Monetization Verdict`
2. `Current Baseline Snapshot`
3. `Market Pricing Reality`
4. `First Payment Path`
5. `Scenario Model`
6. `Path To $5k MRR`
7. `Economics Risks And Caveats`
8. `Evidence Quality`

## Modeling Rules

- Use `TrustMRR` as source of record for current MRR, subscriptions, and growth.
- Reuse upstream `SimilarWeb`; do not rerun traffic collection by default.
- Anchor pricing bands to public competitor pricing pages and billing surfaces.
- Always express churn and conversion as labeled assumptions or ranges unless directly observed.
- Present multiple scenarios rather than one fake-precise forecast.
- Surface contradictions such as negative customer growth with positive MRR growth.

## Review Standard

`Research Lead` should be able to answer from the monetization section alone:

- whether public pricing reality is strong enough
- whether first payment is plausible without a vague sales motion
- whether the path to `$5k MRR` is already achieved, plausible, fragile, or broken
- where the model is assumption-sensitive
