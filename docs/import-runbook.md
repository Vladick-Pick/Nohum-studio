# Import Runbook

## Default Target

Existing live `NoHum Studio` company.

## Collision Policy

- Replace in place only for exact-parity core slugs:
- `ceo`
- `research-lead`
- `launch-lead`
- Import all other agents as new and keep them paused until runtime wiring is complete:
- `chief-of-staff`
- `agent-mechanic`
- `research-synthesizer`
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
3. Confirm that newly introduced managers `cmo`, `vp-engineering`, and `support-lead` appear as new records, not replacements.
4. Abort bulk import if any core slug is about to duplicate.

## Post-Preview Expectations

- `launch-lead` remains the same slug but now owns only Product Launch.
- `growth-lead` must report to `cmo` after import.
- `code-reviewer` and `release-engineer` must report to `vp-engineering`.
- all newly introduced roles remain paused until secrets, tools, and instruction bundles are wired.

## Mandatory Follow-Up

After import, run the checklist in `docs/server-post-import-checklist.md` before resuming new roles.
