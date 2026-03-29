---
name: launch-gates
description: Gate A and Gate B discipline plus build and launch readiness rules
---

## Gate A

Promote an idea to a venture only after:

- hard gates passed
- score complete
- economics summary complete
- queue recommendation is explicit
- board approves

## Gate B

Start build only after:

- Product Definition complete
- launch brief complete
- handoff dossier complete
- pricing, offer, ICP, JTBD, MVP boundary, and launch channel are fixed
- canonical stack is fixed to `Next.js + Better Auth + PostgreSQL + Prisma + Railway + Lava.top + Plausible + Resend`, plus `pg-boss`, `R2`, and `Sentry` when those surfaces are needed
- any stack deviation has explicit board approval before build
- board approves

`build_start_at` begins when the product repo is successfully attached and the venture enters `build`.
