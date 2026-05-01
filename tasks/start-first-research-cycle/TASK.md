---
kind: task
name: Start First Research Cycle
description: Ignition task that starts the factory operating loop after bootstrap passes
schema: agentcompanies/v1
assignee: research-lead
project: hypothesis-funnel
---

## Purpose

Start the first Research cycle after bootstrap confirms the factory can run.

This is the ignition point where NoHum moves from setup into the operating loop.

## Preconditions

- `Bootstrap Company Access And Secrets` is complete.
- `Bootstrap Company` is complete.
- CEO has approved starting Research.
- Day-1 operating language is Russian for board-facing agent communication.
- Research lane access is ready or explicitly degraded:
  - `Idea Scout`: `TRUSTMRR_API_KEY`, `APIFY_TOKEN`
  - `Competitor Scout`: `APIFY_TOKEN`, `OPENROUTER_API_KEY`
  - `Demand Validator`: `APIFY_TOKEN`
  - `Research Lead`: `BRAVE_API_KEY`

## Owner

Primary owner: `Research Lead`

CEO remains the governance owner for Gate A, budget exceptions, and lane stops.

## Steps

1. Confirm research WIP is empty or within policy.
2. Write the first sourcing brief for `Idea Scout`.
3. Create or assign one bounded source batch task to `Idea Scout`.
4. Require `Idea Scout` to return a normalized source batch, source access
   report, blocked-source report, duplicate hints, and shortlist notes.
5. Review the source batch.
6. For each promising candidate, either reject/hold or open one canonical
   `Idea Card`.
7. For opened cards, assign section work to:
   - `Competitor Scout` for Competition
   - `Demand Validator` for Demand
   - `Revenue Validator` for Monetization
8. Review completed sections and write final Research verdict:
   - `QUEUE`
   - `KILL`
   - `KILL FOR NOW`
9. If final verdict is `QUEUE`, produce a Gate A packet for CEO.

## Stop Conditions

- missing day-1 access blocks useful sourcing
- research WIP cap would be exceeded
- queued slot already occupied
- no approved source can be used
- source terms or policy block the run
- an agent attempts to create Product Bet, Build, GTM, Support, spend, outreach,
  deploy, or payment work before Gate A/Gate B

## Required Output

- one first sourcing brief
- one source batch or explicit blocked-source report
- zero or more canonical `Idea Card` refs
- section assignment notes for opened cards
- final Research verdict per completed card
- Gate A packet only when verdict is `QUEUE`

## Acceptance Criteria

- the next owner is always explicit
- no agent waits for ambient context to decide what to do
- every transition is driven by task state plus artifact state
- Research output is an `Idea Card` / Gate A packet, not a Product Bet
