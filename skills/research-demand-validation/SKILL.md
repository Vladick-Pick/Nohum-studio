---
name: research-demand-validation
description: Validate demand for NoHum ventures through explicit signal classes and evidence discipline.
---

## Purpose

Prove at least 2 of 4 demand signal classes:

- `Search Demand`
- `Observed Usage Demand`
- `Problem Conversation Demand`
- `Paid Acquisition Reality`

Use together with:

- `research-source-registry`
- `research-traffic-validation`
- `research-evidence-fallbacks`

## Required Output

- signal class coverage
- evidence links
- confidence
- freshness
- contradictions
- one-line demand verdict

## Source Stack

Reuse first:

- competition packet from `Competitor Scout`
- competitor `SimilarWeb`
- competitor review and brand/domain chatter

Collect only the missing demand-specific layers:

- `apify/google-search-scraper`
- `apify/google-trends-scraper`
- `trudax/reddit-scraper-lite` with problem/category queries
- `danek/twitter-scraper-ppr` with problem/category queries
- optional paid corroboration via `dz_omar/google-ads-scraper` and `dz_omar/facebook-ads-scraper-pro`

`Observed Usage Demand` should come from reused competition evidence in v1, not from rerunning competitor traffic collection.

## Hard Gate

- at least `2` classes must pass
- at least one passed class must be `Search Demand` or `Observed Usage Demand`
- `Problem Conversation Demand` and `Paid Acquisition Reality` alone are not enough to pass demand

## Class Meanings

`Search Demand`

- proves problem/category intent and observable discovery surface
- use SERP structure and related queries, not exact search volume

`Observed Usage Demand`

- proves people are already using products in this category
- use reused competitor traffic, review volume, install proof, or public usage clues

`Problem Conversation Demand`

- proves the problem is discussed beyond brand-specific chatter
- use problem/category Reddit and X queries

`Paid Acquisition Reality`

- proves there is visible advertiser behavior in the space
- treat this as supportive, not mandatory, in v1

## Rules

- do not merge weak signals into one fake class
- separate demand proof from monetization proof
- when demand is ambiguous, say so explicitly and block queue promotion
- `unknown` does not count as a passed demand class
- do not treat SERP snapshots as search-volume truth
- do not rerun competitor `SimilarWeb`; if the traffic packet is stale or contradictory, send refresh back through the competition lane
