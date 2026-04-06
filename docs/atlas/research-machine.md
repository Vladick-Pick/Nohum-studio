# NoHum Atlas: Research Machine

Date: 2026-03-28

## Intent

This diagram shows how research should work as a machine, not as one smart generalist.

## Borrowed Pattern

The design is intentionally influenced by the best parts of `agency-agents`:

- separate specialists by deliverable
- explicit handoffs
- memory-backed transfer of outputs
- one canonical document per idea instead of comments-only coordination

## Outputs

The research machine is allowed to end with only:

- `KILL`
- `KILL FOR NOW`
- `QUEUE`

## Diagram

```mermaid
flowchart LR
  IN["CEO asks for a candidate<br/>LIVE"] --> RL["Research Lead<br/>LIVE"]
  RL --> IS["Idea Scout<br/>TARGET"]
  IS --> BATCH["TrustMRR Sourcing Batch<br/>TARGET"]
  BATCH --> RL
  RL --> CARD["One Idea Card per selected candidate<br/>TARGET"]
  CARD --> CS["Competitor Scout<br/>TARGET"]
  CARD --> DV["Demand Validator<br/>TARGET"]
  CARD --> RV["Revenue Validator<br/>TARGET"]
  CS --> CARD
  DV --> CARD
  RV --> CARD
  CARD --> DEC{"Research Lead Decision"}
  DEC -->|"KILL"| K["Kill Log"]
  DEC -->|"KILL FOR NOW"| KF["Revisit Pool"]
  DEC -->|"QUEUE"| Q["Single Queue Slot"]
```

## Source Classes

Research should explicitly pull from these classes:

- competitors
- pricing pages
- traffic or usage proof
- revenue or payment proof
- reviews or buyer adoption proof
- official platform docs where relevant

## Data Contract

Outputs should be stored as:

- preserved scout raw data
- intake normalization
- specialist sections
- scorecard
- economics
- decision log
- final decision block in the same idea card

## Current Gap

Today the critical next step is making `Research Lead` the clean owner of one canonical idea card per selected candidate.
