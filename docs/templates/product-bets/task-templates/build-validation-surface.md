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
- Product Bet Card test surface block

## Acceptance Criteria

- one selected Product Bet revision is linked
- waitlist form exists and matches Gate A constraints
- every claim passes evidence and forbidden-claim checks
- browser/form/event QA is recorded
- surface version is stable for traffic attempts
