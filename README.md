# NoHum Studio v1.5

Public source package for upgrading the live NoHum Studio company inside Paperclip.

This repository is not the live runtime source of truth. It is the import-safe package and richer bootstrap layer used to evolve the current live company without rebuilding it from zero.

## Package Contract

The repository is intentionally split into two layers.

Import-safe layer:

- `COMPANY.md`
- `paperclip.manifest.json`
- `.paperclip.yaml`
- stable agent identities in `agents/*/AGENTS.md`

Richer bootstrap layer:

- `agents/*/{SOUL,HEARTBEAT,TOOLS}.md`
- `teams/*/TEAM.md`
- `skills/`
- `docs/playbooks/`
- `docs/readiness/`
- `docs/handoffs/`
- `docs/migration/`
- `templates/`

Current importer reality is still manifest-first and reliably materializes `company + agents`. The richer layer remains valuable even when it does not auto-materialize because it drives post-import wiring, managed instruction sync, team doctrine, and migration checklists.

## v1.5 Org Scope

Control plane:

- `CEO`
- `Chief of Staff`
- `Agent Mechanic`

Research pod:

- `Research Lead`
- `Research Synthesizer`
- `Competitor Scout`
- `Demand Validator`
- `Revenue Validator`

Launch, delivery, and support lane:

- `Launch Lead`
- `Product Definer`
- `Growth Lead`
- `Support Lead`
- `Feedback Synthesizer`
- `Delivery Engineer`
- `Code Reviewer`
- `Release Engineer`

## Import Policy

Default target is the existing live `NoHum Studio` company.

Because the Paperclip CLI accepts one collision strategy per import command, the safe migration path is two-phase:

1. replace only the existing core agents with exact identity parity:
   - `ceo`
   - `research-lead`
   - `launch-lead`
2. import newly introduced agents as new records, then pause them during post-import wiring

If preview shows rename or duplicate behavior for any core agent, stop the bulk import and switch to manual package-driven migration.

## Skills Strategy

NoHum agents combine:

- runtime/base skills such as `paperclip`, `paperclip-create-agent`, and delivery discipline skills
- bundled NoHum overlay skills in [`skills/`](skills/)

The package keeps imported prompts self-contained, because local `skills/` files are bootstrap references and are not assumed to auto-install at runtime.

## Repository Map

- `agents/`: full four-file bundle per role
- `teams/`: team responsibility map and core skill grouping
- `skills/`: bundled NoHum specialist overlays
- `docs/team-skill-matrix.md`: runtime and package skill layers
- `docs/mcp-access-matrix.md`: tool, MCP, and secret policy by role
- `docs/playbooks/`: phase doctrine
- `docs/readiness/`: readiness artifacts
- `docs/handoffs/`: canonical transition templates
- `docs/import-runbook.md`: CLI-driven migration sequence
- `docs/server-post-import-checklist.md`: server-side post-import checklist
- `docs/migration/v1-5-import-upgrade.md`: compact upgrade doctrine

## Intended Flow

1. Refine the package in this repository.
2. Preview import against the existing live company.
3. Replace the exact-parity core agents.
4. Import the new specialist roster.
5. Apply post-import runtime wiring and pause the new specialists until their lanes are ready.
6. Resume normal operation from the live server runtime.
