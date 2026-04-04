---
name: research-source-registry
description: Use when collecting NoHum research evidence so each claim follows the canonical source hierarchy, freshness windows, and confidence rules.
---

# Research Source Registry

This skill governs which sources count as strong, medium, or weak evidence during research.

## Purpose

Stop agents from mixing random URLs into fake certainty.

## Core Rule

Prefer direct, current, product-level evidence over commentary about the product.

## Source Hierarchy

### Highest confidence

- official product pages
- official pricing pages
- live checkout or plan-selection surfaces
- official docs and changelogs
- first-party public testimonials or customer counts

### Medium confidence

- reputable review directories
- app marketplaces and integration directories
- traffic estimators
- public founder interviews or case studies
- search trend tools

### Low confidence

- social chatter without product proof
- copied comparison pages
- old listicles
- AI-generated summaries without citations
- forum claims with no direct link

## Freshness Rules

- pricing, checkout, and launch claims should be refreshed within `30 days`
- competitor product existence and offer shape should be refreshed within `60 days`
- traffic estimates and trend snapshots should be refreshed within `90 days`
- reviews and public case studies older than `180 days` are support evidence only

If fresher direct evidence contradicts an older source, the older source loses.

## Confidence Rules

- `high`: direct source plus current corroboration
- `medium`: one solid secondary source or one direct but stale source
- `low`: weak proxy, outdated source, or unresolved contradiction

No single low-confidence source can pass a hard gate.

## Citation Contract

Every evidence line should capture:

- claim
- URL
- source class
- freshness
- confidence
- note if the claim is direct or inferred

## Required Companion References

Use this skill together with:

- `docs/research/source-registry.md`
- `docs/research/traffic-interpretation-bands.md`
- `docs/research/evidence-fallback-matrix.md`
