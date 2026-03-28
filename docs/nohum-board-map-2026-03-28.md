# NoHum Board Map

Date: 2026-03-28

This document is the short board-facing system map for NoHum Studio.

It is meant for:

- Zoom whiteboarding
- Miro mapping
- founder review
- org and runtime discussion

## 1. Core Rule

Every agent should eventually have its own local runtime bundle:

- `AGENTS.md`
- `SOUL.md`
- `HEARTBEAT.md`
- `TOOLS.md`

And every agent should also have its own:

- skills set
- permissions
- heartbeat timing
- budget cap
- workspace access policy

This is the target operating model. It is stricter than the current live state.

## 2. Live Findings: New Roles

### Chief of Staff

Live role intent:

- owns company operating cadence
- owns org health and execution reliability
- detects stalled work and unclear ownership
- reroutes escalation before it clogs the CEO
- treats the agent org itself as a system to tune

Live reporting line:

- reports to `CEO`

Live file state:

- `AGENTS.md` present
- `SOUL.md` present
- `HEARTBEAT.md` present
- `TOOLS.md` present

Live quality note:

- there is also a stray typo file `HEARBEAT.md`
- that should be cleaned later

### Agent Mechanic

Live role intent:

- owns agent reliability
- diagnoses why agents do not act even when runs succeed
- inspects prompt, instructions path, workspace, runtime, tools, and environment
- repairs the smallest durable execution failure
- escalates repeated reliability failures to Chief of Staff

Live reporting line:

- reports to `Chief of Staff`

Live file state:

- `AGENTS.md` present
- `SOUL.md` missing
- `HEARTBEAT.md` missing
- `TOOLS.md` missing

Verdict:

- `Chief of Staff` is a real and useful role for NoHum
- `Agent Mechanic` is also a real and useful role
- `Agent Mechanic` should be treated as a first-class system role and brought up to the four-file standard

## 3. Recommended Org Shape

### Top Level

- `Board`
- `CEO`
- `Chief of Staff`
- `Research Lead`
- `Launch Lead`

### Under Chief of Staff

- `Agent Mechanic`
- later:
  - `Hiring Coordinator`
  - `Execution Auditor`
  - `Knowledge Steward`

### Under Research Lead

- `Intake Scout`
- `Competitor Scout`
- `Demand Validator`
- `Revenue Validator`
- `Research Synthesizer`

### Under Launch Lead

- `Product Definer`
- `Dev Lead`
- `Growth Lead`
- `Support Lead`
- `Venture Research Analyst`

### Under Dev Lead

- `Frontend Builder`
- `Backend Builder`
- `QA / Verifier`

### Under Growth Lead

- `Copy / Landing Builder`
- `Distribution Operator`
- `Analytics Operator`

### Under Support Lead

- `Support Triage`
- `Feedback Synthesizer`

## 4. Org Chart

```mermaid
flowchart TD
  B["Board"]
  CEO["CEO"]

  B --> CEO

  CEO --> COS["Chief of Staff"]
  CEO --> RL["Research Lead"]
  CEO --> LL["Launch Lead"]

  COS --> AM["Agent Mechanic"]

  RL --> RIS["Intake Scout"]
  RL --> RCS["Competitor Scout"]
  RL --> RDV["Demand Validator"]
  RL --> RRV["Revenue Validator"]
  RL --> RSY["Research Synthesizer"]

  LL --> PD["Product Definer"]
  LL --> DL["Dev Lead"]
  LL --> GL["Growth Lead"]
  LL --> SL["Support Lead"]
  LL --> VRA["Venture Research Analyst"]

  DL --> FE["Frontend Builder"]
  DL --> BE["Backend Builder"]
  DL --> QA["QA / Verifier"]

  GL --> COPY["Copy / Landing Builder"]
  GL --> DIST["Distribution Operator"]
  GL --> ANA["Analytics Operator"]

  SL --> TRI["Support Triage"]
  SL --> FSY["Feedback Synthesizer"]
```

## 5. Business Process Flow

This is the business process map, not the reporting map.

```mermaid
flowchart LR
  A["Raw Idea Intake"] --> B["Research Validation"]
  B --> C{"Decision"}
  C -->|"KILL"| K["Killed Idea Log"]
  C -->|"KILL FOR NOW"| KF["Revisit Queue"]
  C -->|"QUEUE"| Q["Canonical Queue Package"]
  Q --> GA["Gate A"]
  GA --> V["Venture Lane Created"]
  V --> PD["Product Definition"]
  PD --> GB["Gate B"]
  GB --> BR["Build + Repo Attach"]
  BR --> LA["Launch"]
  LA --> FP["Payment Signal Review"]
  FP -->|"valid"| PF["Portfolio"]
  FP -->|"pending_review"| PR["Board Review"]
  FP -->|"rejected / timeout"| KL["Kill"]
```

### Agent Participation By Step

- `Raw Idea Intake`
  - `Intake Scout`
  - `Research Lead`
- `Research Validation`
  - `Competitor Scout`
  - `Demand Validator`
  - `Revenue Validator`
  - `Research Synthesizer`
  - `Research Lead`
- `Gate A`
  - `CEO`
  - board
- `Venture Lane Created`
  - `CEO`
  - later automated by `Agent Mechanic` or `Routine Engineer`
- `Product Definition`
  - `Product Definer`
  - `Launch Lead`
  - `Venture Research Analyst`
- `Gate B`
  - `Launch Lead`
  - `CEO`
  - board
- `Build`
  - `Dev Lead`
  - `Frontend Builder`
  - `Backend Builder`
  - `QA / Verifier`
- `Launch`
  - `Growth Lead`
  - `Copy / Landing Builder`
  - `Distribution Operator`
  - `Analytics Operator`
  - `Support Lead`
- `Payment Signal Review`
  - `Launch Lead`
  - `Support Lead`
  - board on `pending_review`

## 6. Artifact And Data Flow

```mermaid
flowchart LR
  RI["Raw Evidence"] --> ME["Market Evidence"]
  ME --> SC["Scorecard"]
  SC --> QP["Queue Package"]
  QP --> VP["Venture Project"]

  VP --> RG["registry"]
  VP --> LB["launch-brief"]
  VP --> HD["handoff-dossier"]
  VP --> FL["feedback-log"]
  VP --> PE["payment-events"]

  LB --> HD
  LB --> PE
  HD --> BR["Build / QA"]
  FL --> FD["Feedback & Decision"]
  PE --> CEOREV["CEO / Board Review"]
```

### Source Of Truth Rules

- `queue package` is the last canonical artifact in research
- `registry` is the venture summary index
- `launch-brief` is the commercial source of truth
- `handoff-dossier` is the build-ready source of truth
- `feedback-log` is the qualitative post-build signal store
- `payment-events` is the payment evidence ledger

## 7. Technology Layer

```mermaid
flowchart TD
  PC["Paperclip Company: NoHum Studio"]
  HF["Hypothesis Funnel"]
  SO["Studio OS"]
  VP["Venture Project"]
  PR["Product Repo"]
  PAY["Payment Adapter"]
  ANA["Analytics"]
  SUP["Support / Feedback Channels"]

  PC --> HF
  PC --> SO
  PC --> VP

  SO --> HF
  SO --> VP
  SO --> PAY
  SO --> PR

  VP --> PR
  VP --> ANA
  VP --> SUP
  PAY --> VP
  ANA --> VP
  SUP --> VP
```

### Meaning

- `Paperclip Company` is the runtime control plane
- `Hypothesis Funnel` is where ideas live before Gate A
- `Studio OS` is where routines, templates, and machine logic live
- `Venture Project` is the operational shell for one approved venture
- `Product Repo` appears only after Gate B
- `Payment Adapter` normalizes first-payment evidence
- `Analytics` and `Support` feed venture docs and decisions

## 8. Agent Settings Matrix

Use this as the board template for every agent card.

| Field | Meaning |
| --- | --- |
| `role` | org role and responsibility |
| `manager` | reporting line |
| `files` | `AGENTS`, `SOUL`, `HEARTBEAT`, `TOOLS` |
| `skills` | allowed skill bundle |
| `permissions` | approvals, hiring, mutation rights |
| `heartbeat` | interval + wake-on-demand |
| `budget` | cap or `0` if not yet set |
| `workspace policy` | what filesystems/repos it may touch |
| `artifact outputs` | what canonical docs/issues it is allowed to create |

## 9. Current Live Settings Notes

### CEO

- model: `gpt-5.4`
- reasoning: `high`
- heartbeat: enabled
- scope: company control plane

### Chief of Staff

- model: `gpt-5.4`
- reasoning: `high`
- heartbeat: enabled
- reports to `CEO`
- scope: operating cadence, org health, escalation routing

### Agent Mechanic

- model: `gpt-5.4`
- reasoning: `high`
- heartbeat: enabled
- reports to `Chief of Staff`
- scope: agent reliability, prompt/config/runtime/tooling repair
- current gap: missing `SOUL.md`, `HEARTBEAT.md`, `TOOLS.md`

### Research Lead

- model: `gpt-5.4`
- reasoning: `high`
- reports to `CEO`
- scope: research pod and queue recommendations

### Launch Lead

- model: `gpt-5.4`
- reasoning: `high`
- reports to `CEO`
- scope: product definition, Gate B, launch readiness

## 10. Board Layout Recommendation

For Zoom or Miro, use five frames:

1. `Org Structure`
2. `Business Process Flow`
3. `Artifact Flow`
4. `Technology Layer`
5. `Agent Settings Cards`

That is the cleanest way to explain the whole NoHum machine without turning one diagram into spaghetti.
