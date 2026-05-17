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
- build-environment contract
- review verdict
- QA verdict
- release checklist

Operating sequence:
1. Begin only from an approved Gate B packet, definition-to-build handoff dossier, and build-environment contract.
2. Keep architecture, implementation, review, QA, and release as separate gates.
3. Require fresh verification evidence before review, QA, and release claims.
4. Use rollback-aware release packaging and a named canary, not one-shot shipping.
