# Import Runbook

## Default Target

Existing live `NoHum Studio` company.

## Collision Policy

- Replace in place only for exact-parity core slugs:
- `ceo`
- `research-lead`
- `launch-lead`
- Preview every non-core slug before import and classify it one of two ways:
- already present live: reconcile or update in place, do not create a duplicate
- absent live: import as new and keep it paused until runtime wiring is complete
- Non-core slugs that must be checked individually:
- `chief-of-staff`
- `agent-mechanic`
- `competitor-scout`
- `demand-validator`
- `revenue-validator`
- `product-definer`
- `ux-researcher`
- `ux-architect`
- `ui-designer`
- `pricing-strategist`
- `launch-program-manager`
- `cmo`
- `growth-lead`
- `marketing-strategist`
- `seo-specialist`
- `content-creator`
- `paid-media-strategist`
- `tracking-measurement-specialist`
- `community-builder`
- `ai-citation-strategist`
- `vp-engineering`
- `software-architect`
- `backend-architect`
- `frontend-developer`
- `ai-engineer`
- `senior-developer`
- `devops-automator`
- `sre`
- `security-engineer`
- `code-reviewer`
- `qa-director`
- `qa-engineer`
- `release-engineer`
- `support-lead`
- `support-responder`
- `feedback-synthesizer`
- `analytics-reporter`

## Dry-Run Sequence

1. Preview the repository import against the current Paperclip runtime.
2. Confirm that `ceo`, `research-lead`, and `launch-lead` map 1:1 without rename or duplicate behavior.
3. For each non-core slug, determine whether it is already present live or absent.
4. If the non-core slug is already present live, verify that preview preserves the slug and updates the reporting line without producing a second record.
5. If the non-core slug is absent live, verify it appears as a new paused record.
6. Abort bulk import if any preexisting slug is about to rename or duplicate.

## Post-Preview Expectations

- `launch-lead` remains the same slug but now owns only Product Launch.
- `growth-lead` must report to `cmo` after import.
- `code-reviewer` and `release-engineer` must report to `vp-engineering`.
- any non-core role that already existed live should be rebound in place, not duplicated.
- any non-core role created by this import should remain paused until secrets, tools, and instruction bundles are wired.

## Mandatory Follow-Up

After import, run the checklist in `docs/server-post-import-checklist.md` before resuming new roles.

Before `Bootstrap Company` begins, create and run the CEO-owned access task:

- `tasks/bootstrap-company-access-and-secrets/TASK.md`

The research lane should remain paused until this access task confirms:

- `TRUSTMRR_API_KEY`
- `APIFY_TOKEN`
- `OPENROUTER_API_KEY`
- `BRAVE_API_KEY`
