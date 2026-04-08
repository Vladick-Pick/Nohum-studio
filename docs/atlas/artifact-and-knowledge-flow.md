# NoHum Atlas: Artifact And Knowledge Flow

Date: 2026-04-08

## Intent

This diagram answers one question:

Where does knowledge go, who owns it, and what becomes source of truth?

## Pattern

This area is deliberately influenced by the memory and handoff patterns from `agency-agents`.

The core rule for NoHum:

- handoffs should happen through canonical artifacts
- not through fragile comments and copy-paste summaries

## Diagram

```mermaid
flowchart LR
  RI["Raw Evidence"] -->|"normalized into"| ME["Market Evidence"]
  ME -->|"captured in canonical card"| IC["Idea Card (canonical)"]
  IC -->|"scored by"| SC["Scorecard"]
  SC -->|"economics pass"| EC["Economics"]
  EC -->|"decision rationale"| DL["Decision Log"]
  DL -->|"queue-ready package"| QP["Canonical Queue Package"]
  QP -->|"promote to venture"| VP["Venture Project"]

  IC -->|"derive index view"| RR["Research Registry (derived)"]
  IC -->|"derive duplicate and revisit memory"| DM["Decision Memory (derived)"]
  IC -->|"derive export snapshot"| ED["Eval Dataset (derived)"]

  VP -->|"publish operating state"| RG["registry"]
  VP -->|"publish launch packet"| LB["launch-brief"]
  VP -->|"publish handoff packet"| HD["handoff-dossier"]
  VP -->|"publish feedback log"| FL["feedback-log"]
  VP -->|"publish payment trail"| PE["payment-events"]

  RG -->|"review portfolio state"| CEO["CEO"]
  LB -->|"run launch gate"| LL["Launch Lead"]
  HD -->|"execute build"| DEV["Build Team"]
  FL -->|"triage support learnings"| SUP["Support / Feedback"]
  PE -->|"resolve ambiguity"| BR["Board Review on ambiguity"]
```

## Ownership Rule

- research artifacts are owned by the research machine
- venture artifacts are owned by the venture lane
- `Idea Card` is canonical; `Research Registry`, `Decision Memory`, and `Eval Dataset` are derived and cannot overrule it
- `payment-events` is append-only
- `registry` holds derived state, not raw event history

## Storage Rule

The desired runtime end-state is:

- durable issue documents for canonical artifacts
- reusable templates for venture documents
- minimal hidden state
- no important transitions living only in chat comments
- derived research-history surfaces are regenerated from canonical `Idea Card` state when drift is detected
