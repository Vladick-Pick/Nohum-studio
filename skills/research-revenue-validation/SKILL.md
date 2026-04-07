---
name: research-revenue-validation
description: Validate price bands, first-payment plausibility, and the path to $5k MRR for NoHum ventures.
---

## Purpose

Turn category and baseline evidence into monetization plausibility.

Use together with:

- `research-source-registry`
- `research-evidence-fallbacks`

## Required Output

- monetization verdict
- current baseline snapshot
- reference price band and plan shapes
- recommended v1 monetization model
- path to first payment
- scenario model for `$5k MRR <= 6 months`
- explicit assumptions, caveats, confidence, and freshness

## Reuse-First Inputs

Read from the candidate `Idea Card` first:

- preserved `TrustMRR` raw snapshot
- preserved `SimilarWeb` enrichment
- `Competition` section pricing and product context
- `Demand` section demand-quality context

Do not recollect traffic or demand layers just because the numbers are inconvenient.

## Source Stack

Primary truth:

- `TrustMRR` fields preserved in the `Idea Card` for current MRR, subscriptions, customers, and growth
- official competitor pricing pages
- official public billing, FAQ, trial, or checkout surfaces

Secondary corroboration:

- competitor evidence cards from `Competitor Scout`
- public comparison pages and review sources when they clarify pricing or billing mechanics

## Modeling Layers

Every major number must be labeled as one of:

- `observed`
- `inferred`
- `assumed`

Examples:

- `rough_arps = mrr / active_subscriptions` is `inferred`
- `monthly churn range` is usually `assumed`
- public pricing bands are `observed`

## Scenario Model

Model multiple scenarios rather than one fake-precise forecast.

At minimum include:

- one conservative case
- one base case
- one aggressive case

Each case should explain:

- effective ARPS used
- conversion or visitor-to-paid assumption
- churn assumption
- implied gross and net new paid motion
- projected active paid and MRR at 6 months

If the venture is already above `$5k MRR`, the model should still explain:

- the current buffer above threshold
- the break-churn or deterioration point that would threaten the threshold
- whether the business still looks fragile despite being above the gate

## Hard Questions

The section must answer:

- is public pricing reality visible enough to reason about monetization?
- is the first-payment path plausible and not hidden behind vague sales motion?
- does the path to `$5k MRR` look plausible, already achieved, or too fragile?
- what assumption most strongly controls the result?

## Rules

- prefer real pricing and revenue-visible evidence over storytelling
- do not invent enterprise sales paths for a v1 self-serve venture
- if the path to first payment depends on too many manual steps, score it down
- if pricing or payment proof exists only through fallback sources, cap confidence accordingly
- do not present churn or conversion as observed facts unless the source actually measures them
- do not hide scenario assumptions in prose; write them explicitly
- do not rerun `SimilarWeb` by default; reuse upstream evidence
- do not claim `$5k MRR` plausibility without connecting pricing, payment path, and retained-subscription logic
