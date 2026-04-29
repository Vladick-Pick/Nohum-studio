# Automated Product Bet Cycle Readiness

Use this checklist before running `tasks/run-automated-product-bet-cycle/TASK.md`.

## Required

- Product Bet Pilot kernel exists.
- Source adapter registry is current.
- Tool access matrix is current.
- RAT execution boundaries are current.
- Product-bet templates are available.
- Gate A and Gate B boundaries remain canonical.

## Access Readiness

- `TRUSTMRR_API_KEY`: present or source marked `MISSING_ACCESS`
- `PRODUCT_HUNT_TOKEN`: present with commercial-use approval or blocked
- `GITHUB_TOKEN`: present or public search fallback accepted
- `FIRECRAWL_API_KEY`: present or web extraction marked unavailable
- outreach account: approval required before send
- payment provider: approval required before use

## Success Criteria

- agents collect market signals
- agents compile product bets
- agents map assumptions
- agents run pre-market autoreason lite
- agents create RAT plans
- agents execute only allowed RATs
- agents record blocked states when needed
- agents write evidence events
- agents route decisions
- agents write learning report

## Non-Goals

- no build substrate
- no GTM automation beyond RAT scaffolds
- no payment collection
- no paid ads
- no automatic outreach sends
