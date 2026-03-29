# Build Playbook

Owners:
- `VP of Engineering`
- `Software Architect`
- `Senior Developer`
- `Code Reviewer`
- `QA Director`
- `Release Engineer`

Expected outputs:
- implementation plan
- review verdict
- QA verdict
- release checklist

Operating sequence:
1. Begin only from an approved Gate B packet and definition-to-build handoff dossier.
2. Build on the canonical `Next.js + Better Auth + PostgreSQL + Prisma + Railway` substrate unless a board-approved exception already exists.
3. Keep architecture, implementation, review, QA, and release as separate gates.
4. Require fresh verification evidence before review, QA, and release claims.
5. Use rollback-aware release packaging, not one-shot shipping.
