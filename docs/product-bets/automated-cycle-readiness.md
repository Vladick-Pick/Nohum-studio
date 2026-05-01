# Product Bet Definition Readiness

Use this checklist before running `tasks/run-automated-product-bet-cycle/TASK.md`
or `tasks/run-product-bet-definition-sprint/TASK.md`.

## Required

- Gate A decision is `approve_product_bet_definition`.
- Approved `Idea Card` snapshot is available.
- Gate A constraints are explicit.
- Product Bet Definition templates are available.
- Test GTM and red hypothesis test boundaries are current.
- Gate B policy is loaded.

## Access Readiness

- `BRAVE_API_KEY`: present for bounded browser/search work or marked unavailable
- `FIRECRAWL_API_KEY`: present for allowed extraction or marked unavailable
- `ANALYTICS_API_KEY`: present before interpreting live test metrics
- outreach account: approval required before send
- landing deploy access: approval required before public deploy
- payment provider: approval required before payment collection

## Success Criteria

- agents compile a post-Gate-A product bet
- agents identify red hypotheses
- agents run internal autoreason without claiming market proof
- agents create test plans with thresholds
- agents execute only approved external tests
- agents record blocked states when needed
- agents write evidence events
- agents write a Gate B recommendation
- agents write a learning report

## Non-Goals

- no pre-Gate-A product bet work
- no build approval
- no product repo attachment
- no payment collection without explicit approval
- no paid ads without explicit approval
- no automatic outreach sends
