# NoHum Studio v1.5 Detailed-Core

Public source package for upgrading the live NoHum Studio company inside Paperclip.

This repository is not the live runtime source of truth. It is the import-safe package and richer bootstrap layer used to evolve the current live company without rebuilding it from zero.

## Package Contract

Import-safe layer:

- `COMPANY.md`
- `paperclip.manifest.json`
- `.paperclip.yaml`
- stable agent identities in `agents/*/AGENTS.md`

Richer bootstrap layer:

- `agents/*/{SOUL,HEARTBEAT,TOOLS}.md`
- `teams/*/TEAM.md`
- vendored `skills/`
- `docs/playbooks/`
- `docs/readiness/`
- `docs/handoffs/`
- `docs/migration/`

## Detailed Org Scope

- Product Launch is now separate from Marketing, Engineering, and Support.
- Marketing has its own top-level manager: `CMO`.
- Engineering has its own top-level manager: `VP of Engineering`.
- Support is a standalone team under `Support Lead`.
- Research and Studio Ops remain separate.

## Vendored Skill Strategy

This package now vendors selected local skills from four sources:

- `agency-agents` for role topology and deliverable-first prompt shape
- `pm-skills` for PM, GTM, marketing, research, and support frameworks
- `superpowers` for engineering execution discipline
- `gstack` for engineering review, QA, release, and security pipeline

The runtime base skills `paperclip`, `paperclip-create-agent`, and `paperclip-knowledge` remain external runtime prerequisites. Team-specific operating skills now live in this repository under `skills/`.

## Import Policy

Default target is the existing live `NoHum Studio` company.

Safe migration path:

1. replace only the exact-parity core agents:
   - `ceo`
   - `research-lead`
   - `launch-lead`
2. import all newly introduced managers and specialists as new records
3. keep new roles paused until secrets, tools, and runtime instructions are wired

If preview shows rename or duplicate behavior for any core slug, stop the bulk import and switch to manual package-driven migration.

## Repository Map

- `agents/`: four-file bundle per role
- `teams/`: team responsibility maps
- `skills/`: vendored local skills plus NoHum overlays
- `docs/team-skill-matrix.md`: team-level runtime and vendored skill policy
- `docs/mcp-access-matrix.md`: tool, MCP, and secret policy by role
- `docs/import-runbook.md`: package-driven import sequence
- `docs/server-post-import-checklist.md`: server-side validation checklist
