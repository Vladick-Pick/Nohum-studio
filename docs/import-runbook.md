# Import Runbook

## Default Target

Existing live `NoHum Studio` company.

## Package Shape

The root package is a single-import company package. It imports the current org
library, but only bootstrap tasks become immediate day-1 work.

Imported by default as active day-1 control/runtime defaults:

- `ceo`
- `chief-of-staff`
- `agent-mechanic`
- `research-lead`
- `idea-scout`
- `competitor-scout`
- `demand-validator`
- `revenue-validator`
- `launch-lead`

Imported by default but dormant until gated activation:

- Product Bet Validation specialists
- Product Launch specialists
- engineering build fleet
- marketing fleet
- support fleet

Not imported as immediate backlog work:

- recurring daily/weekly operating tasks
- `Start First Research Cycle`
- Research batch/proof/history tasks before bootstrap approves them
- Product Bet specialist tasks
- product/build/GTM/support tasks
- archived plans, reference dumps, and legacy dry runs

## Collision Policy

- Replace in place for exact-parity slugs.
- If a slug already exists live, verify that preview preserves the slug and
  reporting line without producing a second record.
- If a slug is absent live, verify it appears as a new paused or
  activation-gated record.
- If a preview creates non-bootstrap tasks, abort the import.

## Dry-Run Sequence

1. Run `node scripts/check-package-drift.mjs`.
2. Preview the repository import against the current Paperclip runtime.
3. Confirm that all company agents are present in the root import graph.
4. Confirm that non-core agents are paused or activation-gated.
5. Confirm that only the two bootstrap tasks are imported:
   - `Bootstrap Company Access And Secrets`
   - `Bootstrap Company`
6. Confirm that `ceo`, `research-lead`, and `launch-lead` map 1:1 without rename or duplicate behavior.
7. Abort bulk import if any preexisting slug is about to rename or duplicate.

## Post-Preview Expectations

- `CEO`, `Research Lead`, and `Launch Lead` remain the visible day-1 control surface.
- `Idea Scout`, `Competitor Scout`, `Demand Validator`, and `Revenue Validator`
  may run only after access/secrets are wired.
- `Chief of Staff` and `Agent Mechanic` are bootstrap support, not product operators.
- Product Bet and downstream agents may exist, but must remain dormant until
  gate artifacts and manager-created tasks activate them.

## Mandatory Follow-Up

After import, run the checklist in `docs/server-post-import-checklist.md`.

Before `Bootstrap Company` begins, create and run the CEO-owned access task:

- `tasks/bootstrap-company-access-and-secrets/TASK.md`

The research lane should remain paused until this access task confirms:

- `TRUSTMRR_API_KEY`
- `APIFY_TOKEN`
- `OPENROUTER_API_KEY`
- `BRAVE_API_KEY`

After `Bootstrap Company` passes, CEO creates exactly one ignition task:

- `Start First Research Cycle`

That task starts the factory operating loop by handing control to `Research
Lead`; it is not imported as an immediate day-1 backlog task.
