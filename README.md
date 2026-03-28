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

The base operating skills `paperclip`, `paperclip-create-agent`, `paperclip-knowledge`, and `para-memory-files` are vendored in this repository so import-time skill references resolve inside the package. They still require live runtime wiring after import: Paperclip API env vars for the control-plane skills, and a writable adapter memory path for `para-memory-files`. For gstack-derived engineering skills, the local `SKILL.md` files in this repo are the source of truth; upstream templates remain lineage only.

For the private `codex_local` server runtime, agent adapter config intentionally enables `dangerouslyBypassApprovalsAndSandbox` so agents can reach the local Paperclip API and operate inside the bound project workspace instead of failing on sandboxed localhost calls.

## Import Policy

Default target is the existing live `NoHum Studio` company.

Safe migration path:

1. replace only the exact-parity core agents:
   - `ceo`
   - `research-lead`
   - `launch-lead`
2. preview every non-core slug against the live company before import
3. if a non-core slug already exists live, reconcile or update it in place instead of creating a duplicate
4. import only absent non-core roles as new records and keep them paused until secrets, tools, and runtime instructions are wired

If preview shows rename or duplicate behavior for any preexisting slug, stop the bulk import and switch to manual package-driven migration.

## Repository Map

- `agents/`: four-file bundle per role
- `teams/`: team responsibility maps
- `skills/`: vendored local skills plus NoHum overlays
- `docs/team-skill-matrix.md`: team-level runtime and vendored skill policy
- `docs/mcp-access-matrix.md`: tool, MCP, and secret policy by role
- `docs/import-runbook.md`: package-driven import sequence
- `docs/server-post-import-checklist.md`: server-side validation checklist
