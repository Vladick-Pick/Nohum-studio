# NoHum Operating Cadence

NoHum autonomy depends on recurring management, not on one-off issue bursts.

## Daily Cadence

- `CEO`
  - task: `tasks/daily-ceo-operating-review/TASK.md`
  - output: operating review note with WIP, queue, budget, and escalation state
- `Chief of Staff`
  - task: `tasks/daily-chief-of-staff-blocked-work-review/TASK.md`
  - output: blocked-work packet or reroute note
- `Research Lead`
  - task: `tasks/daily-research-lead-queue-refresh/TASK.md`
  - output: queue freshness update and queue winner state
- `Launch Lead`
  - task: `tasks/daily-launch-lead-readiness-review/TASK.md`
  - output: Gate B or launch packet readiness note
- `VP of Engineering`
  - task: `tasks/daily-vp-engineering-substrate-review/TASK.md`
  - output: substrate readiness verdict or build-lane exception
- `Support Lead`
  - task: `tasks/daily-support-lead-signal-review/TASK.md`
  - output: support signal summary and escalation packet
- `Agent Mechanic`
  - task: `tasks/daily-agent-mechanic-runtime-audit/TASK.md`
  - output: runtime audit note and remediation queue

## Weekly Cadence

- `CEO`
  - task: `tasks/weekly-board-review/TASK.md`
  - output: board review note
- `Launch Lead`
  - task: `tasks/portfolio-health-review/TASK.md`
  - output: portfolio keep/grow/retire review
- `Chief of Staff`
  - task: `tasks/weekly-factory-health-review/TASK.md`
  - output: factory health report
- `Chief of Staff`
  - task: `tasks/weekly-org-hygiene-review/TASK.md`
  - output: org hygiene report

## Rules

- every cadence task must leave a durable artifact or structured issue update
- comments-only status updates do not count as cadence output
- every escalation must name a decision owner and next artifact
- cadence never overrides WIP policy: one active venture plus one queued venture
- if a recurring task ends without a named artifact, the run counts as a failure
- cadence outputs must reference canonical templates when a template exists
