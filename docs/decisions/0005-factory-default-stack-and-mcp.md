# Decision 0005: Factory Default Stack And MCP

## Decision

NoHum Studio v1 uses one canonical default stack for new ventures:

- `Next.js 16` fullstack app
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

When a surface is needed, the vendor choice is fixed:

- auth -> `Better Auth`
- database -> `PostgreSQL`
- ORM -> `Prisma`
- deploy/runtime -> `Railway`
- payments -> `Lava.top`
- measurement -> `Plausible`
- email -> `Resend`
- jobs -> `pg-boss`
- object storage -> `Cloudflare R2`
- error tracking -> `Sentry`
- non-trivial client-local shared state -> `Zustand`
- product motion where motion is justified -> `Framer Motion`

The canonical MCP set is:

- `Serena`
- `Playwright MCP`
- `Brave Search MCP`
- `Railway MCP`
- `Sentry MCP`

`Context7` is optional. `Supabase MCP` is outside the default path. `mcp-awesome` is discovery only, not a runtime dependency.

Any stack deviation requires explicit board approval before Gate B.

## Why

- NoHum builds simple mass self-serve SaaS on green markets, not bespoke enterprise systems
- repeated stack selection burns time and creates avoidable operational drift
- the factory needs shared deploy, payment, analytics, and debugging surfaces across ventures
- one default stack makes manager delegation and venture templates deterministic

## Implication

- Gate B is not ready if the venture still has open architecture or provider choices
- launch readiness must prove `Lava.top`, `Plausible`, `Railway`, and the rest of the canonical stack are wired, or show an approved exception
- ventures that need complex billing, marketplace payouts, multi-service platform design, or non-canonical infra are not default-path ventures
