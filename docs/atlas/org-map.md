# NoHum Atlas: Org Map

Date: 2026-03-28

## Intent

This diagram shows reporting lines and role intent.

It does not describe business flow. It describes org shape.

## Role Notes

- `CEO`
  - studio allocator and gate owner
- `Chief of Staff`
  - operating cadence, execution reliability, org health, escalation routing
- `Agent Mechanic`
  - agent reliability engineer; fixes why agents do not execute properly
- `Research Lead`
  - owns research pod quality and queue package quality bar
- `Launch Lead`
  - owns venture execution from Product Definition through launch readiness

## Live vs Target

- `CEO`: `LIVE`
- `Chief of Staff`: `LIVE`
- `Agent Mechanic`: `LIVE`, but file bundle incomplete
- `Research Lead`: `LIVE`
- `Launch Lead`: `LIVE`
- specialists under the leads: `TARGET`

## Diagram

```mermaid
flowchart TD
  B["Board"]
  CEO["CEO<br/>LIVE"]

  B --> CEO

  CEO --> COS["Chief of Staff<br/>LIVE"]
  CEO --> RL["Research Lead<br/>LIVE"]
  CEO --> LL["Launch Lead<br/>LIVE"]

  COS --> AM["Agent Mechanic<br/>LIVE / PARTIAL"]
  COS --> HC["Hiring Coordinator<br/>TARGET"]
  COS --> EA["Execution Auditor<br/>TARGET"]
  COS --> KS["Knowledge Steward<br/>TARGET"]

  RL --> RIS["Intake Scout<br/>TARGET"]
  RL --> RCS["Competitor Scout<br/>TARGET"]
  RL --> RDV["Demand Validator<br/>TARGET"]
  RL --> RRV["Revenue Validator<br/>TARGET"]
  RL --> RSY["Research Synthesizer<br/>TARGET"]

  LL --> PD["Product Definer<br/>TARGET"]
  LL --> DL["Dev Lead<br/>TARGET"]
  LL --> GL["Growth Lead<br/>TARGET"]
  LL --> SL["Support Lead<br/>TARGET"]
  LL --> VRA["Venture Research Analyst<br/>TARGET"]

  DL --> FE["Frontend Builder<br/>TARGET"]
  DL --> BE["Backend Builder<br/>TARGET"]
  DL --> QA["QA / Verifier<br/>TARGET"]

  GL --> COPY["Copy / Landing Builder<br/>TARGET"]
  GL --> DIST["Distribution Operator<br/>TARGET"]
  GL --> ANA["Analytics Operator<br/>TARGET"]

  SL --> TRI["Support Triage<br/>TARGET"]
  SL --> FSY["Feedback Synthesizer<br/>TARGET"]
```

## Settings Principle

Every agent should eventually own:

- local `AGENTS.md`
- local `SOUL.md`
- local `HEARTBEAT.md`
- local `TOOLS.md`
- per-agent skills
- per-agent permissions
- per-agent heartbeat timing
- per-agent budget cap
- per-agent workspace access policy
