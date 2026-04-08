# Eval Dataset Export Template

Derived append-only export for research evaluation, taxonomy tuning, and hindsight analysis. This artifact is not canonical.

## Ownership

- canonical owner: `Research Lead` via `Idea Card`
- export owner: `Research Lead`
- consumer owners: research evaluation and analytics workflows (read-only)

## Update Discipline

- append one export row per decision snapshot (initial final verdict and later reopen/revisit verdict changes)
- never mutate historical rows except for technical repair metadata
- export rows must include canonical references and timestamps for reproducibility

## Retention

- append-only retention: indefinite
- if redaction is required, store redaction metadata and keep row identity stable

## Override Rules

- canonical card always overrides export interpretation
- corrections require new appended row derived from corrected canonical state
- direct overwrites of verdict or reason fields in old rows are invalid

## Consumers

- research evaluation loops
- reason-code distribution audits
- future model/prompt tuning datasets

## Field Contract

| Field | Type | Required | Notes |
|---|---|---|---|
| `export_row_id` | string | yes | immutable row key |
| `export_batch_id` | string | yes | batch/group identifier |
| `exported_at` | datetime (ISO 8601) | yes | export timestamp |
| `derived_owner` | string | yes | export generator identity |
| `schema_version` | string | yes | e.g. `eval-dataset-export.v1` |
| `research_case_id` | string | yes | canonical case key |
| `idea_card_ref` | string | yes | canonical pointer |
| `idea_card_updated_at` | datetime (ISO 8601) | yes | canonical source timestamp |
| `normalized_domain` | string | yes | normalized intake field |
| `normalized_category` | string | yes | normalized intake field |
| `source_platform` | enum | yes | intake source |
| `capture_date` | date | yes | intake capture date |
| `intake_verdict` | enum | yes | intake-stage decision |
| `competition_result` | enum | no | `positive` / `negative` / `inconclusive` |
| `demand_result` | enum | no | `positive` / `negative` / `inconclusive` |
| `monetization_result` | enum | no | `positive` / `negative` / `inconclusive` |
| `final_verdict` | enum | yes | canonical final verdict |
| `verdict_label` | string | yes | normalized `verdict label` for eval tasks |
| `primary_decision_reason` | string | no | machine-readable reason code |
| `secondary_decision_reasons` | string[] | no | additional reason codes |
| `decision_confidence` | enum | no | `high` / `medium` / `low` |
| `evidence_completeness` | enum | no | `complete` / `partial` / `insufficient` |
| `major_unknowns_count` | integer | no | unresolved unknown count |
| `contradiction_count` | integer | no | contradiction count |
| `unresolved_ambiguity_count` | integer | no | aggregate ambiguity count |
| `revisit_policy` | enum | no | `none` / `timebox` / `triggered` |
| `revisit_after` | date | no | revisit date |
| `later_outcome_status` | enum | no | `unknown` / `improved` / `unchanged` / `worse` |
| `later_outcome_date` | date | no | date of observed later outcome |
| `later_outcome_notes` | string | no | compact outcome notes |

## Row Template

```yaml
export_row_id: ""
export_batch_id: ""
exported_at: ""
derived_owner: "research-lead"
schema_version: "eval-dataset-export.v1"
research_case_id: ""
idea_card_ref: ""
idea_card_updated_at: ""
normalized_domain: ""
normalized_category: ""
source_platform: "trustmrr"
capture_date: ""
intake_verdict: "RESEARCH"
competition_result: ""
demand_result: ""
monetization_result: ""
final_verdict: "pending"
verdict_label: ""
primary_decision_reason: ""
secondary_decision_reasons: []
decision_confidence: ""
evidence_completeness: ""
major_unknowns_count: 0
contradiction_count: 0
unresolved_ambiguity_count: 0
revisit_policy: "none"
revisit_after: ""
later_outcome_status: "unknown"
later_outcome_date: ""
later_outcome_notes: ""
```
