# Paperclip Runtime Compatibility For Research History

Date: 2026-04-08

## Purpose

Define how NoHum research history works on current Paperclip runtime surfaces without core changes and without plugin dependency.

## Non-Negotiable Constraints

- do not change Paperclip core
- do not depend on plugins
- `Idea Card` remains the only canonical research artifact
- `Research Registry`, `Decision Memory`, and `Eval Dataset` are derived state only

## What Current Paperclip Supports Now

The research history layer is built on currently available Paperclip V1 surfaces:

- issues
- projects and goals
- `knowledge-items`
- issue-attached `knowledge-items`
- file attachments for optional export files only
- activity log

These surfaces are sufficient for durable research history if NoHum treats the history layer as a documentation and workflow pattern, not a new runtime subsystem.

## What Current Paperclip Does Not Provide

Current Paperclip does not provide:

- plugin runtime for custom research-history execution inside core
- history portability for full runtime history transfer across company imports
- first-class research history surfaces as dedicated native entities

NoHum therefore must not design around unavailable plugins or assume portable historical state beyond current import boundaries.

## Mapping: Research History Layer To Paperclip Surfaces

| Layer | Canonical or derived | Paperclip runtime mapping | Ownership and update rule |
|---|---|---|---|
| `Idea Card` | canonical | company `knowledge-item` attached to the relevant intake/review issue | `Research Lead` keeps this as source of truth; all final verdict edits land here first |
| `Research Registry` | derived | company `knowledge-item` index attached where the active research workflow needs it | updated only from `Idea Card` after decision checkpoints |
| `Decision Memory` | derived | company `knowledge-item` index attached to research workflow issues when duplicate lookup is needed | updated from finalized `Idea Card` decisions to support duplicate suppression and revisit logic |
| `Eval Dataset` | derived | export-oriented `knowledge-item` records, with file attachments only when a snapshot file is required | generated from closed `Idea Card` records; never edited as primary truth |
| case progression (`RESEARCH`, `QUEUE`, `KILL`, `KILL FOR NOW`) | derived workflow state | issue status transitions under funnel project/goal tracking | operational status mirrors `Idea Card`; no independent decision authority |
| traceability | derived audit trail | activity log entries tied to issue and knowledge updates | used to prove who changed what and when |

## Operational Rule

Every research-case write must pass this order:

1. update canonical `Idea Card`
2. sync derived `Research Registry`, `Decision Memory`, and `Eval Dataset`
3. verify issue links and activity log traceability

If a derived artifact conflicts with `Idea Card`, `Idea Card` wins and derived layers must be repaired.

## Out Of Scope In V1

- plugin-based runtime extensions for research history
- core-level schema changes in Paperclip
- assuming cross-company portability of full historical research state
