---
name: investigate
description: Run a root-cause investigation for an engineering failure, incident, regression, or ambiguous system behavior using evidence-first reasoning.
---

## Purpose

Find the smallest defensible explanation for a problem before anyone starts "fixing" the wrong thing.

## Required Output

- symptom summary and current blast radius
- hypothesis list with evidence for and against
- root cause or leading hypothesis
- next action: fix, retry, gather more evidence, or escalate

## Rules

- reproduce or restate the failure path as concretely as possible
- separate observed facts from guesses
- prefer falsifiable hypotheses over broad narratives
- do not propose a fix until the evidence path is strong enough to defend it

## Lineage

- adapted from `gstack/investigate`
