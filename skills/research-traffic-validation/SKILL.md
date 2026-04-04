---
name: research-traffic-validation
description: Use when validating the traffic-or-usage demand class for NoHum research and you need a repeatable source order, interpretation bands, and unknown-handling rules.
---

# Research Traffic Validation

Use this skill only for the `competitor traffic or usage` demand class.

## Purpose

Decide whether competitor discovery and public usage proof are strong enough to count as real demand.

## Validation Order

1. Look for direct usage proof:
   - public customer counts
   - review volume and recency
   - marketplace installs or rankings
   - recent changelog cadence
2. Check search visibility:
   - branded and problem search interest
   - category trend
3. Check traffic estimators:
   - site-level monthly visits
   - trend direction
   - country mix if relevant
4. Reconcile contradictions before scoring the class.

Do not start from a traffic estimator if stronger first-party proof exists.

## Demand-Class Verdicts

- `strong`: traffic or usage signals clearly support repeated discovery and adoption
- `medium`: signal exists but is niche, noisy, or partly inferred
- `weak`: small or stale signal with little corroboration
- `unknown`: no reliable read

`unknown` does not count as a passed demand class.

## Interpretation Bands

Use `docs/research/traffic-interpretation-bands.md` for category-adjusted thresholds.

Default heuristics:

- broad SMB self-serve web app:
  - strong at `>= 20k` estimated visits per month
  - medium at `5k-20k`
  - weak below `5k` unless other proof is strong
- niche B2B workflow tool:
  - strong at `>= 3k`
  - medium at `1k-3k`
  - weak below `1k` unless review or payment proof is unusually strong
- plugins, add-ons, and ecosystem tools:
  - installs, rankings, reviews, and integration footprint can outweigh modest site traffic

## Guardrails

- one traffic estimator alone is rarely `high` confidence
- low traffic is not fatal when the niche is narrow and conversion intent is obvious
- zero visible traffic plus zero usage proof fails this class
- if traffic is unavailable, use the fallback matrix rather than inventing certainty
