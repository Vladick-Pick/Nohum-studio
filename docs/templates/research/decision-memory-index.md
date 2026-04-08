# Decision Memory Index Template

Derived anti-duplicate and revisit surface keyed by normalized fingerprint. This artifact is not canonical.

## Ownership

- canonical owner: `Research Lead` via `Idea Card`
- derived owner: `Research Lead`
- write access: controlled updater from canonical duplicate/final-decision fields

## Update Discipline

- upsert on intake, duplicate resolution, final verdict updates, and revisit updates
- primary key: `candidate_fingerprint`
- index may aggregate multiple `research_case_id` values but must not invent facts outside canonical cards

## Retention

- retain at least `36` months from `cluster_last_updated_at`
- do not hard-delete confirmed duplicate clusters while any related case is active

## Override Rules

- canonical duplicate links and final verdicts override this index
- if cluster state is wrong, correct canonical cards and reproject the cluster
- direct edits to `last_kill_reason` or `revisit_after` without canonical source are invalid

## Consumers

- `Idea Scout` duplicate checks before new shortlist proposals
- `Research Lead` revisit queue planning
- quality review for repeated kill patterns

## Field Contract

| Field | Type | Required | Notes |
|---|---|---|---|
| `candidate_fingerprint` | string | yes | normalized dedupe fingerprint |
| `normalized_domain` | string | no | primary normalized domain |
| `normalized_category` | string | no | primary normalized category |
| `related_case_ids` | string[] | yes | all known linked case IDs |
| `related_idea_card_refs` | string[] | yes | canonical card pointers |
| `active_duplicate_cluster` | enum | yes | `none` / `possible` / `confirmed` |
| `duplicate_of_case_id` | string | no | canonical winner case when confirmed |
| `last_final_verdict` | enum | no | latest verdict in cluster |
| `last_kill_reason` | string | no | latest primary kill reason code |
| `last_decision_confidence` | enum | no | `high` / `medium` / `low` |
| `source_idea_card_updated_at_max` | datetime (ISO 8601) | yes | latest canonical source timestamp across related cards |
| `revisit_policy` | enum | no | `none` / `timebox` / `triggered` |
| `revisit_after` | date | no | next scheduled revisit |
| `reopen_conditions` | string[] | no | machine-readable reopen triggers |
| `lookup_notes` | string | no | housekeeping notes only |
| `cluster_last_reviewed_at` | datetime (ISO 8601) | no | review timestamp |
| `derived_updated_at` | datetime (ISO 8601) | yes | projection timestamp |
| `cluster_last_updated_at` | datetime (ISO 8601) | yes | cluster bookkeeping timestamp; usually equal to `derived_updated_at` |
| `derived_owner` | string | yes | updater identity |
| `schema_version` | string | yes | e.g. `decision-memory-index.v1` |

## Row Template

```yaml
candidate_fingerprint: ""
normalized_domain: ""
normalized_category: ""
related_case_ids: []
related_idea_card_refs: []
active_duplicate_cluster: "none"
duplicate_of_case_id: ""
last_final_verdict: ""
last_kill_reason: ""
last_decision_confidence: ""
source_idea_card_updated_at_max: ""
revisit_policy: "none"
revisit_after: ""
reopen_conditions: []
lookup_notes: ""
cluster_last_reviewed_at: ""
derived_updated_at: ""
cluster_last_updated_at: ""
derived_owner: "research-lead"
schema_version: "decision-memory-index.v1"
```
