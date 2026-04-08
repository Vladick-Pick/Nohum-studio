# Research History Layer

This document defines the derived historical surfaces for research while keeping the `Idea Card` as the only canonical artifact.

## Canonical Rule

- Canonical source of truth: one `Idea Card` per `research_case_id`.
- Derived surfaces may only copy, normalize, index, or label fields already present in the canonical card.
- Derived surfaces must not introduce new business facts, new verdicts, or override canonical timestamps.

## Surfaces

| Surface | Artifact type | Primary purpose | Canonical dependency | Write mode |
|---|---|---|---|---|
| `Research Registry` | upserted index row | fast status lookup and queue filtering | direct projection from canonical card | upsert by `research_case_id` |
| `Decision Memory` | upserted cluster/index row | duplicate prevention and revisit lookup | canonical final decision + fingerprint fields | upsert by `candidate_fingerprint` |
| `Eval Dataset Export` | append-only export row | offline evaluation and taxonomy analysis | canonical intake + specialist + final decision fields | append-only snapshot |

## Shared Identity And Provenance Fields

Every derived surface must carry explicit provenance sufficient to trace each row back to canonical cards.

At minimum, each surface needs:

- canonical case identity:
  - `research_case_id` for one-case rows
  - `related_case_ids` for cluster rows
- canonical card pointer:
  - `idea_card_ref` for one-case rows
  - `related_idea_card_refs` for cluster rows
- canonical source timestamp:
  - `idea_card_updated_at` for one-case rows
  - `source_idea_card_updated_at_max` for cluster rows
- projection timestamp:
  - `derived_updated_at` for index rows
  - `exported_at` for export rows
- `derived_owner`
- `schema_version`

These provenance fields or their documented surface-specific equivalents make drift detectable and prevent shadow truth.

## Ownership

- Canonical owner: `Research Lead` (through the canonical `Idea Card`).
- Derived surface stewards:
  - `Research Registry`: `Research Lead`
  - `Decision Memory`: `Research Lead`
  - `Eval Dataset Export`: `Research Lead` and research evaluation consumers
- Specialists (`Competitor Scout`, `Demand Validator`, `Revenue Validator`) update only canonical sections; they do not directly write derived surfaces.

## Update Discipline

- Update triggers:
  - intake created or edited
  - specialist section verdict changed
  - final decision changed
  - revisit metadata changed
- Update order:
  1. canonical `Idea Card` update
  2. derived projection/update
  3. drift check (`idea_card_updated_at` must be `>=` source snapshot used for projection)
- Manual derived edits are restricted to housekeeping fields (`lookup_notes`, export metadata). If a business field is wrong, fix canonical first and regenerate.

## Retention

- `Research Registry`: keep while case is active; archive `24` months after terminal verdict with no reopen.
- `Decision Memory`: retain minimum `36` months after last related case update.
- `Eval Dataset Export`: append-only and retained indefinitely for longitudinal analysis.

## Override Rules

- If canonical and derived values conflict, canonical wins immediately.
- Override path is always: edit canonical card -> regenerate derived rows.
- Direct edits that change `final_verdict`, reason codes, or confidence in derived surfaces are invalid.

## Consumers

- `Research Lead`: intake triage, queue readiness, revisit scheduling
- `Idea Scout`: duplicate checks via `Decision Memory`
- research QA/reviewers: audit of decision consistency
- analytics/eval workflows: read-only consumption of `Eval Dataset Export`

## Paperclip Compatibility Boundary

- Use current Paperclip issue and knowledge-item surfaces only.
- No dependency on plugin infrastructure.
- No Paperclip core changes required by this history layer.
