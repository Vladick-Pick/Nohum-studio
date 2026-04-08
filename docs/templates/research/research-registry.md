# Research Registry Template

Derived index for fast case-state lookup. This artifact is not canonical.

## Ownership

- canonical owner: `Research Lead` via `Idea Card`
- derived owner: `Research Lead`
- write access: controlled updater that projects from canonical fields

## Update Discipline

- update on every canonical change that affects intake, stage, specialist verdicts, final decision, duplicates, or revisit metadata
- key: one row per `research_case_id`
- projection-only: no field may be authored here unless it is metadata about the projection itself

## Retention

- active rows remain in registry
- archive terminal rows after `24` months with no reopen
- archived rows keep `idea_card_ref` for audit

## Override Rules

- if any field conflicts with canonical card, canonical card wins
- fix path: canonical edit first, registry re-projection second
- direct edits to decision fields are invalid

## Consumers

- `Research Lead` triage and queue filters
- gate-readiness checks
- reporting and dashboards that need compact status view

## Field Contract

| Field | Type | Required | Notes |
|---|---|---|---|
| `research_case_id` | string | yes | stable case key |
| `product_name` | string | yes | normalized display name |
| `normalized_domain` | string | yes | lowercased domain |
| `normalized_category` | string | yes | controlled category label |
| `source_platform` | enum | yes | usually `trustmrr` |
| `captured_at` | datetime (ISO 8601) | yes | intake capture timestamp |
| `current_stage` | enum | yes | `intake` / `competition` / `demand` / `monetization` / `final` |
| `intake_verdict` | enum | yes | `REJECT` / `HOLD` / `RESEARCH` |
| `final_verdict` | enum | yes | `pending` / `QUEUE` / `KILL` / `KILL FOR NOW` |
| `primary_decision_reason` | string | no | controlled reason code |
| `secondary_decision_reasons` | string[] | no | additional reason codes |
| `decision_confidence` | enum | no | `high` / `medium` / `low` |
| `score_total` | number | no | optional weighted score |
| `queue_candidate` | boolean | yes | true only when queue-ready |
| `duplicate_of_case_id` | string | no | canonical duplicate link |
| `candidate_fingerprint` | string | no | normalized dedupe fingerprint |
| `revisit_policy` | enum | no | `none` / `timebox` / `triggered` |
| `revisit_after` | date | no | next revisit date |
| `last_reviewed_at` | datetime (ISO 8601) | no | latest review pass |
| `idea_card_ref` | string | yes | canonical reference pointer |
| `idea_card_updated_at` | datetime (ISO 8601) | yes | canonical last update |
| `derived_updated_at` | datetime (ISO 8601) | yes | projection timestamp |
| `derived_owner` | string | yes | updater identity |
| `schema_version` | string | yes | e.g. `research-registry.v1` |

## Row Template

```yaml
research_case_id: ""
product_name: ""
normalized_domain: ""
normalized_category: ""
source_platform: "trustmrr"
captured_at: ""
current_stage: "intake"
intake_verdict: "RESEARCH"
final_verdict: "pending"
primary_decision_reason: ""
secondary_decision_reasons: []
decision_confidence: ""
score_total: null
queue_candidate: false
duplicate_of_case_id: ""
candidate_fingerprint: ""
revisit_policy: "none"
revisit_after: ""
last_reviewed_at: ""
idea_card_ref: ""
idea_card_updated_at: ""
derived_updated_at: ""
derived_owner: "research-lead"
schema_version: "research-registry.v1"
```
