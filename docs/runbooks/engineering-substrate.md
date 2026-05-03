# Engineering Execution Substrate

The engineering lane should never begin from a vague repo or environment state.

## Canonical Inputs

- approved Gate B packet
- definition-to-build handoff dossier
- venture manifest
- repo attach record
- build env contract
- release readiness pack

## Canonical Surfaces

- `docs/templates/engineering/repo-attach-record.md`
- `docs/templates/engineering/build-env-contract.md`
- `docs/templates/engineering/release-readiness-pack.md`
- `docs/templates/tasks/substrate-readiness-review.md`

## Minimum Substrate

- one canonical product repo
- one canonical workspace attach path
- one canonical stack:
  - `Next.js`
  - `Better Auth`
  - `PostgreSQL`
  - `Prisma`
  - `Railway`
- canonical provider surfaces:
  - `Lava.top`
  - `Plausible`
  - `Resend`
  - `Sentry`
  - `R2`
  - `pg-boss` when jobs are needed

## Required Checks Before Build Starts

- repo attach exists and is the only canonical repo for the venture
- workspace path is deterministic
- env contract is complete
- release and rollback expectations are explicit
- engineering review and QA roles are assigned
- Railway project and deploy owner are explicit
- stack-fit exceptions, if any, are already board-approved

## Owners

- `VP of Engineering`
- `DevOps Automator`
- `SRE`
- `QA Director`
- `Release Engineer`

## Output

- build substrate readiness verdict
- repo attach record
- env contract
- release readiness pack

## Rule

If repo, workspace, env, or release expectations are still trapped in chat context, build has not started yet.
