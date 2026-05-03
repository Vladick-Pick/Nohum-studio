---
kind: task_template
name: Route Validation Result
description: Route observation-window evidence to build, revise, fork, test_more, or kill
schema: agentcompanies/v1
assignee: evidence-router
project: hypothesis-funnel
recurring: false
---

## Purpose

Turn traffic, waitlist, CTA, qualitative, and blocker evidence into a precise
next action.

## Required Output

- validation evidence events
- validation cycle report
- validation decision
- Gate B recommendation when action is `build`

## Allowed Validation Actions

- `build`
- `revise_offer`
- `revise_landing`
- `revise_channel`
- `open_fork`
- `test_more`
- `kill`

## Acceptance Criteria

- build recommendations cite observation-window and traffic-source refs
- weak signals route to the exact owner
- blocked states are not counted as market validation
- Gate B recommendation is not Gate B approval
