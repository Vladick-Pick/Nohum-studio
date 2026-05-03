# Product Bet Validation Readiness

Use this checklist before CEO creates the first live Product Bet Validation
Sprint after Gate A using
`docs/templates/product-bets/task-templates/run-product-bet-validation-sprint.md`.

The sprint task is created at runtime by CEO from the Gate A decision. It is
not imported as a ready backlog task.

## Required

- Gate A decision is `approve_product_bet_definition`.
- Approved `Idea Card` snapshot is available.
- Gate A constraints are explicit.
- Product Bet Card and Product Bet Validation templates are available.
- Validation surface, organic traffic, measurement, and observation-window
  templates are current.
- Gate B policy is loaded.

## Access Readiness

- `BRAVE_API_KEY`: present for bounded browser/search work or marked unavailable
- `FIRECRAWL_API_KEY`: present for allowed extraction or marked unavailable
- `ANALYTICS_API_KEY`: present before interpreting live test metrics
- preview or public surface publishing path: approved or marked unavailable
- organic channel access: each channel marked `READY`, `MISSING_ACCESS`,
  `APPROVAL_REQUIRED`, or `BLOCKED_BY_POLICY`

## Success Criteria

- CEO creates exactly one Product Bet Validation Sprint after Gate A
- Launch Lead opens a shared Product Bet Card
- specialists write owned card sections and linked packs
- agents identify validation risks
- agents run internal autoreason without claiming market proof
- agents create a validation surface and organic distribution plan with thresholds
- agents run only approved organic traffic attempts
- agents record blocked states when needed
- agents write validation evidence events
- agents write a Gate B recommendation
- agents write a learning report

## Non-Goals

- no pre-Gate-A product bet work
- no build approval
- no product repo attachment
- no generic external-validation mechanisms in the default validation kernel
- no imported batch of Product Bet runtime tasks
