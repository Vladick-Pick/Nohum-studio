---
name: benchmark
description: Measure performance baselines and regressions for a change using stable scenarios, comparable environments, and clear before/after evidence.
---

## Purpose

Catch performance regressions before they reach release or justify a performance claim.

## Required Output

- baseline and comparison metrics
- route or workflow tested
- suspected regression list with evidence
- recommendation: acceptable, retry, or block

## Rules

- compare like-for-like environments, inputs, and routes
- record how each metric was captured so the result is reproducible
- separate real regressions from noise or missing instrumentation
- do not claim an improvement without a concrete baseline

## Lineage

- adapted from `gstack/benchmark`
