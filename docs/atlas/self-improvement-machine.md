# NoHum Atlas: Self-Improvement Machine

Date: 2026-04-09

## Diagram

```mermaid
flowchart LR
  AG["Agent"] --> ASR["agent_self_review"]
  MET["Metrics / traces / drift"] --> COS["Chief of Staff"]
  ASR --> COS
  CWM["company_world_model"] --> COS
  UWM["customer_world_model"] --> COS

  COS --> EXP["process_experiment_record"]
  EXP --> R0["replay"]
  R0 --> R1["shadow"]
  R1 --> R2["limited_live"]
  R2 --> DEC["promotion_decision"]

  DEC -->|"roll_out"| CAN["canonical process surface"]
  DEC -->|"revert"| RB["rollback plan"]
  DEC -->|"discuss"| CEO["CEO / human boundary if needed"]

  CAN --> CWM
  CAN --> UWM
  RB --> CWM
  RB --> UWM

  MECH["Agent Mechanic"] --> EXP
  MECH --> RB
```

## Notes

- `Chief of Staff` is the fleet optimizer, not a manual coordinator
- `Agent Mechanic` implements and contains changes
- human boundaries remain only for governance-sensitive changes
