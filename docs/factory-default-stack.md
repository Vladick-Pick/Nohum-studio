# NoHum Factory Default Stack

NoHum does not pick a new architecture for every venture. Default-path ventures use one fixed stack so the factory can move from queue to launch without reopening infrastructure debate.

## Canonical App Stack

- App architecture: `Next.js 16` fullstack app
- UI runtime: `React 19.2`
- Language: `TypeScript`
- Styling: `Tailwind CSS`
- Auth: `Better Auth`
- Database: `PostgreSQL`
- ORM and migrations: `Prisma`
- Deploy and managed runtime: `Railway`
- Payments: `Lava.top`
- Measurement: `Plausible`
- Transactional email: `Resend`
- Background jobs: `pg-boss`
- File and asset storage: `Cloudflare R2`
- Error tracking: `Sentry`
- Client-local shared state: `Zustand` when shared client state is genuinely needed
- Motion layer: `Framer Motion` when the product benefits from motion

## What This Means In Practice

- Default ventures are one fullstack app, not a `Vite SPA + separate NestJS API`.
- If the product needs auth, use `Better Auth`.
- If the product needs a relational database, use `PostgreSQL + Prisma`.
- If the product needs payments, use `Lava.top`.
- If the product needs analytics, use `Plausible`.
- If the product needs transactional email, use `Resend`.
- If the product needs background jobs, use `pg-boss`.
- If the product needs file storage, use `Cloudflare R2`.
- If the product needs error monitoring, use `Sentry`.

## Canonical MCP Set

Core MCP servers:

- `Serena` for semantic code and repo navigation
- `Playwright MCP` for browser QA and launch smoke tests
- `Brave Search MCP` for market and competitor research
- `Railway MCP` for deploy and runtime operations
- `Sentry MCP` for production diagnostics and error triage

Supporting policy:

- `Context7` is optional for documentation lookup
- `Supabase MCP` is out of the default path because Supabase is not part of the canonical stack
- `mcp-awesome` is a discovery catalog only

## Default-Path Venture Shape

Default-path ventures should fit this profile:

- simple mass self-serve SaaS
- fast-cycle build and launch
- low-touch onboarding
- straightforward pricing
- no marketplace payout logic
- no complex enterprise auth or seat billing
- no metered billing or Stripe Connect class requirements

If a venture breaks that shape, it is not automatically rejected, but it is outside the default path and must get an explicit board exception before Gate B.

## Exception Process

The only valid time to diverge from the canonical stack is before Gate B.

An exception packet must explain:

- why the canonical stack fails for this venture
- which new provider or framework is being introduced
- what new secrets and MCP access it requires
- what new operational burden it creates
- how the deviation affects launch speed, support, and future maintenance

NoHum should treat default stack drift as a governance decision, not an engineer preference.
