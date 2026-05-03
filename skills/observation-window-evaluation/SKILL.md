---
name: observation-window-evaluation
description: Decide whether a Product Bet validation surface has enough time, traffic, and behavioral signal for evidence review.
---

# Observation Window Evaluation

## Purpose

Prevent premature decisions and endless waiting.

## Default Policy

```yaml
min_runtime_hours: 72
max_runtime_days: 14
min_unique_visitors: 300
preferred_unique_visitors: 1000
min_channel_count: 2
```

## Default Signal Bands

```yaml
waitlist_submits:
  weak: 10
  promising: 30
  strong: 50
CTA_click_rate:
  weak: 1%
  promising: 3%
  strong: 5%
waitlist_conversion:
  weak: 1%
  promising: 3%
  strong: 5%
```

## Routing

- insufficient time -> `wait`
- insufficient traffic -> `run_more_traffic`
- enough traffic, weak CTA -> `revise_offer` or `revise_landing`
- enough traffic, weak source quality -> `revise_channel`
- promising or strong waitlist signal -> `review_evidence`
- max window expired with no signal -> `kill` or `open_fork`

## State Machine

```text
not_started
  -> waiting_for_time
  -> waiting_for_traffic
  -> ready_for_review
  -> reviewed

Any state can route to:
  blocked
  expired
  escalated
```

Rules:

- `not_started`: no public traffic or live surface yet.
- `waiting_for_time`: traffic exists but `min_runtime_hours` has not elapsed.
- `waiting_for_traffic`: runtime is sufficient but visitors/channel diversity
  are below threshold.
- `ready_for_review`: enough time, traffic, and attribution exist for evidence
  review.
- `expired`: max runtime elapsed without decision-grade signal.
- `blocked`: measurement, publish approval, account access, or policy prevents
  interpretation.

## Evidence Readiness Checks

Before `Evidence Router` reviews:

- surface version is fixed
- traffic attempts cite the surface version
- events include page view, CTA click, waitlist submit, and source/UTM
- unique visitors are not all internal/test traffic
- at least one qualitative signal is recorded when community channels were used
- blocked states are separate from weak market signal
- thresholds were written before traffic started

## Decision Bands

| Band | Meaning | Default route |
|---|---|---|
| no data | no useful traffic or broken measurement | fix measurement or run traffic |
| weak signal | visits exist but CTA/waitlist below weak band | revise offer/landing/channel |
| promising signal | enough visitors and waitlist at promising band | evidence review |
| strong signal | waitlist at strong band with source quality | Gate B recommendation may be considered |
| contradictory | one segment/channel works, another fails | open fork or revise channel |

## Output

Use `docs/templates/product-bets/observation-window.md`.
