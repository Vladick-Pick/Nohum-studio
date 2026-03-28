# Server Post-Import Checklist

Use this checklist after importing `Nohum-studio` into the real server-hosted Paperclip instance.

## What the current official importer gives you

Expected imported entities on current official main:

- company: `NoHum Studio`
- agents from `paperclip.manifest.json`

Do not assume the importer also created live projects, issues, tasks, teams, templates, docs, or local NoHum skills.

## Server launch sequence

1. Run the two-pass existing-company import from `docs/import-runbook.md`.
2. Verify the company still exists as the same live company.
3. Verify the upgraded core agents still map cleanly:
   - `CEO`
   - `Research Lead`
   - `Launch Lead`
4. Verify the newly introduced specialists exist once each:
   - `Chief of Staff`
   - `Agent Mechanic`
   - `Research Synthesizer`
   - `Competitor Scout`
   - `Demand Validator`
   - `Revenue Validator`
   - `Product Definer`
   - `Growth Lead`
   - `Support Lead`
   - `Feedback Synthesizer`
   - `Delivery Engineer`
   - `Code Reviewer`
   - `Release Engineer`
5. Pause the newly created specialists until runtime wiring is complete.
6. Set company budget and agent budgets.
7. Create or verify the top-level company goal:
   - `Build and operate an AI-only venture factory that repeatedly sources, evaluates, launches, kills, and maintains fast-cycle microproducts.`
8. Create or verify project:
   - `Hypothesis Funnel`
9. Create or verify project:
   - `Studio OS`
10. Create or verify issue in `Studio OS`, assigned to `CEO`:
   - `Bootstrap Company`
11. Confirm reporting structure:
   - `Chief of Staff -> CEO`
   - `Agent Mechanic -> Chief of Staff`
   - `Research Lead -> CEO`
   - `Research Synthesizer -> Research Lead`
   - `Competitor Scout -> Research Lead`
   - `Demand Validator -> Research Lead`
   - `Revenue Validator -> Research Lead`
   - `Launch Lead -> CEO`
   - `Product Definer -> Launch Lead`
   - `Growth Lead -> Launch Lead`
   - `Support Lead -> Launch Lead`
   - `Feedback Synthesizer -> Support Lead`
   - `Delivery Engineer -> Launch Lead`
   - `Code Reviewer -> Launch Lead`
   - `Release Engineer -> Launch Lead`
12. Set final runtime adapter details:
   - working directories
   - secrets / env inputs
   - heartbeat settings
13. Sync or verify managed instruction bundles:
   - `AGENTS.md`
   - `SOUL.md`
   - `HEARTBEAT.md`
   - `TOOLS.md`
14. Wire tool and MCP access from `docs/mcp-access-matrix.md`.
15. Enable the `CEO` heartbeat.
16. Let `CEO` complete the live `Bootstrap Company` issue.
17. Review and approve the initial CEO strategy.
18. Confirm the first sourcing cycle starts inside `Hypothesis Funnel`.

## Do not do this

- do not keep using the local smoke-test instance as the real company
- do not assume `projects/`, `tasks/`, `skills/`, `teams/`, or `templates/` imported automatically
- do not leave newly imported specialists active before their runtime wiring and permissions are checked
- do not let CEO start build work before `Hypothesis Funnel`, `Studio OS`, and bootstrap structure exist

## Runtime truth

After these steps, the live server Paperclip company is the source of truth.
