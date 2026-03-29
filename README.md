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

## Secret And Credential Model

`Paperclip Company Secrets` are the canonical source of truth for NoHum credentials.

Rules:

- secret CRUD is board-only
- raw values never live in prompts, docs, or repository files
- agents receive only scoped runtime env via `secret_ref`
- Railway app env vars are manual runtime copies, not the canonical origin
- agent and policy wiring use layered aliases such as `PAYMENT_PROVIDER_API_KEY`, `ANALYTICS_API_KEY`, and `DEPLOY_PROVIDER_TOKEN`

See:

- `docs/decisions/0004-secret-and-credential-architecture.md`
- `docs/mcp-access-matrix.md`
- `docs/server-post-import-checklist.md`

## Factory Default Stack

NoHum does not choose a fresh tech stack per venture. The default path is fixed to:

- `Next.js 16`
- `React 19.2`
- `TypeScript`
- `Tailwind CSS`
- `Better Auth`
- `PostgreSQL`
- `Prisma`
- `Railway`
- `Lava.top`
- `Plausible`
- `Resend`
- `pg-boss`
- `Cloudflare R2`
- `Sentry`

When a subsystem is needed, the provider choice is fixed. A venture may diverge only through an explicit board exception before Gate B.

See:

- `docs/decisions/0005-factory-default-stack-and-mcp.md`
- `docs/factory-default-stack.md`
- `docs/mcp-access-matrix.md`

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
- `docs/decisions/0004-secret-and-credential-architecture.md`: canonical secret and credential model
- `docs/decisions/0005-factory-default-stack-and-mcp.md`: canonical product stack and MCP decision
- `docs/factory-default-stack.md`: operational stack contract for default ventures
- `docs/import-runbook.md`: package-driven import sequence
- `docs/server-post-import-checklist.md`: server-side validation checklist
