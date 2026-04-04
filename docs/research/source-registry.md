# Research Source Registry

This document defines which source types count during NoHum venture research.

## Evidence Classes

| Evidence class | Preferred sources | Acceptable fallback | Freshness target | Confidence ceiling without direct proof | Disallowed shortcut |
|---|---|---|---|---|---|
| product exists and is live | official product URL, live app, official docs, changelog | reputable directory listing, founder post with direct product link | `<= 60d` | `medium` | social chatter with no live surface |
| pricing visibility | official pricing page, checkout, plan picker | billing FAQ, reputable review directory price table, clearly recent founder screenshot | `<= 30d` | `medium` | guessed pricing from generic articles |
| competitor traffic or usage | first-party usage proof, review volume, marketplace installs, traffic estimators, search trend tools | community proof, public customer counts, changelog cadence | `<= 90d` | `medium` | one stale traffic estimate treated as certainty |
| community or buyer proof | review directories, communities, public problem threads, buyer comparisons | testimonials, public customer logos, integration directories | `<= 180d` | `medium` | anonymous comments with no buyer context |
| monetization and payment reality | pricing pages, checkout flows, billing docs, direct competitor plans | review directories, founder statements, public comparisons with direct citations | `<= 30d` | `medium` | fabricated ARPU or conversion assumptions presented as fact |
| category or workflow context | official docs, product tours, onboarding, templates | benchmark pages, high-quality comparison pages | `<= 90d` | `medium` | vague market summary with no product-level evidence |

## Source Quality Rules

- Direct first-party proof beats commentary about the proof.
- One weak source never passes a hard gate alone.
- A stale direct source can still support context, but not freshness-sensitive claims.
- Traffic estimators are support evidence, not a magic oracle.

## Confidence Labels

- `high`: direct current source plus corroboration
- `medium`: one solid secondary source or slightly stale direct source
- `low`: weak proxy, stale proxy, or unresolved contradiction

## Citation Line Format

Every evidence line should capture:

- claim
- URL
- source class
- freshness
- confidence
- note: `direct` or `inferred`
