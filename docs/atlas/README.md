# NoHum Operating Atlas

Date: 2026-03-28

This atlas is the interactive system map for NoHum Studio.

Its purpose is to make the machine discussable, reviewable, and editable through diagrams rather than only through prose specs.

It is meant for:

- founder review
- Zoom whiteboarding
- Miro mapping
- board discussion
- runtime debugging
- org design

## Design Principles

This atlas follows the NoHum operating spec and is informed by a few useful patterns from [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents):

- division-based org design instead of a flat agent list
- deliverable-first role definitions
- explicit handoff templates between specialists
- memory-backed artifact transfer instead of copy-paste context
- splitting persona/ethos from operational workflow files

For NoHum this translates into:

- every agent should eventually have its own local:
  - `AGENTS.md`
  - `SOUL.md`
  - `HEARTBEAT.md`
  - `TOOLS.md`
- every agent should also have its own:
  - skills set
  - permissions
  - heartbeat timing
  - budget cap
  - workspace access policy

## Atlas Files

- [org-map.md](./org-map.md)
- [venture-lifecycle.md](./venture-lifecycle.md)
- [research-machine.md](./research-machine.md)
- [research-cycle-detail-ru.md](./research-cycle-detail-ru.md)
- [launch-machine.md](./launch-machine.md)
- [artifact-and-knowledge-flow.md](./artifact-and-knowledge-flow.md)
- [governance-and-runtime.md](./governance-and-runtime.md)

## Status Markers

Every diagram should use this language:

- `LIVE` = exists and is operating in the live company
- `PARTIAL` = exists by documents and agent behavior, but not fully enforced
- `TARGET` = intended future machine behavior

## Current Use

Start with:

1. [org-map.md](./org-map.md)
2. [venture-lifecycle.md](./venture-lifecycle.md)
3. [research-machine.md](./research-machine.md)

Use the other documents to drill into:

- launch execution
- artifact handoffs
- permissions and runtime settings
