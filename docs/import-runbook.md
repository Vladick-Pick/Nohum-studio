# Import Runbook

## Default Target

Existing live `NoHum Studio` company.

## Package Shape

The root package is a day-1 core and research import package. It does not import
the full future org.

Imported by default:

- `ceo`
- `chief-of-staff`
- `agent-mechanic`
- `research-lead`
- `idea-scout`
- `competitor-scout`
- `demand-validator`
- `revenue-validator`
- `launch-lead`

Not imported by default:

- recurring daily/weekly operating tasks
- `Start First Research Cycle`
- Research batch/proof/history tasks before bootstrap approves them
- Product Bet specialist agents
- product/build/GTM/support specialists
- engineering build fleet
- marketing fleet
- support fleet
- archived plans, reference dumps, and legacy dry runs

## Collision Policy

- Replace in place only for exact-parity core slugs:
  - `ceo`
  - `research-lead`
  - `launch-lead`
- Preview day-1 support and research slugs before import:
  - `chief-of-staff`
  - `agent-mechanic`
  - `idea-scout`
  - `competitor-scout`
  - `demand-validator`
  - `revenue-validator`
- If a preview wants to create any Product Bet, Build, GTM, or Support role from
  the root package, abort the import.

## Dry-Run Sequence

1. Run `node scripts/check-package-drift.mjs`.
2. Preview the repository import against the current Paperclip runtime.
3. Confirm that the nine day-1 slugs above are the only agent slugs in the root import.
4. Confirm that only the two bootstrap tasks are imported:
   - `Bootstrap Company Access And Secrets`
   - `Bootstrap Company`
5. Confirm that `ceo`, `research-lead`, and `launch-lead` map 1:1 without rename or duplicate behavior.
6. For each support/research slug, determine whether it already exists live or is absent.
7. If a slug already exists live, verify that preview preserves the slug and updates the reporting line without producing a second record.
8. If a slug is absent live, verify it appears as a new paused or activation-gated record.
9. Abort bulk import if any preexisting slug is about to rename or duplicate.

## Post-Preview Expectations

- `CEO`, `Research Lead`, and `Launch Lead` remain the visible day-1 control surface.
- `Idea Scout`, `Competitor Scout`, `Demand Validator`, and `Revenue Validator`
  may run only after access/secrets are wired.
- `Chief of Staff` and `Agent Mechanic` are bootstrap support, not product operators.
- Product Bet and downstream agents must remain absent from the root import until
  a separate activation package exists.

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
