# Build Playbook

The governing module passport is [Build Module](../build/README.md). This
playbook is the short execution checklist. If this checklist conflicts with the
passport or ontology, stop and report `CONTRACT_CONFLICT`.

Owners:
- `VP of Engineering`
- `Software Architect`
- `Backend Architect`
- `Frontend Developer`
- `AI Engineer`
- `Senior Developer`
- `Code Reviewer`
- `QA Director`
- `QA Engineer`
- `Security Engineer`
- `SRE`
- `DevOps Automator`
- `Release Engineer`

Expected outputs:
- repo attach record
- build env contract
- architecture plan
- implementation plan
- change package
- review verdict
- QA verdict
- release readiness pack
- rollback plan
- launch handoff

Operating sequence:
1. Begin only from `gate_b_decision = approve_build`, an Evidence Router Gate
   B recommendation, and a definition-to-build handoff dossier.
2. VP Engineering either accepts the handoff or returns
   `RETRY_BUILD_HANDOFF` to the exact missing/conflicting owner.
3. Attach or confirm the product repo with a `repo_attach_record`.
4. Create the `build_env_contract` before implementation: secrets, CI, deploy,
   health checks, and rollback path.
5. Build on the canonical
   `Next.js + Better Auth + PostgreSQL + Prisma + Railway` substrate unless a
   board-approved exception already exists.
6. Keep architecture, implementation, review, QA, risk review, and release as
   separate gates.
7. Require fresh verification evidence before review, QA, and release claims.
8. Use rollback-aware release packaging, not one-shot shipping.

Invalid shortcuts:

- starting from comments-only context
- expanding scope beyond the approved `build_scope`
- treating Code Reviewer, QA Director, or Release Engineer as optional for a
  releasable build
- claiming launch success from Build; Launch/GTM owns launch outcomes
