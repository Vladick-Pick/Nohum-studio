---
kind: task_template
name: Build Validation Surface
description: Build a versioned landing and waitlist surface for the selected Product Bet revision
schema: agentcompanies/v1
assignee: landing-surface-builder
project: hypothesis-funnel
recurring: false
---

## Purpose

Create the landing/waitlist surface used to test positioning and signup intent.

## Required Output

- landing design
- copy variant matrix
- waitlist form spec
- anti-AI-slop review
- surface version
- surface QA
- surface conversion quality review inputs
- Product Bet Card test surface block

## Acceptance Criteria

- one selected Product Bet revision is linked
- English-first target-market copy is used for global / US / Europe targets
- a visible NoHum `product_concept_name` is used and competitor/source names are
  not used as product identity
- competitor landing benchmark is cited
- `docs/product-bets/design.md` is applied when present, or a fallback design
  reference set is named
- primary sales copy does not say the page is only a validation/test/research
  surface
- waitlist form exists and matches Gate A constraints
- every claim passes evidence and forbidden-claim checks
- browser/form/event QA is recorded
- `surface_conversion_quality_review: PASS` is required before board-review
  preview, publication approval, traffic, observation, or Evidence Router work
- surface version is stable for traffic attempts
