---
name: research-demand-validation
description: Validate demand for NoHum ventures through explicit signal classes and evidence discipline.
---

## Purpose

Prove at least 2 of 3 demand signal classes:

- search
- competitor traffic or usage
- community, review, or payment evidence

Use together with:

- `research-source-registry`
- `research-traffic-validation`
- `research-evidence-fallbacks`

## Required Output

- signal class coverage
- evidence links
- confidence
- freshness

## Rules

- do not merge weak signals into one fake class
- separate demand proof from monetization proof
- when demand is ambiguous, say so explicitly and block queue promotion
- `unknown` does not count as a passed demand class
