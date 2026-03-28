# NoHum Studio Runtime State

Date: 2026-03-28

This document records the actual live state of the NoHum Studio company after the first import and first bootstrap cycle.

It is not the abstract target design. It is the runtime checkpoint that answers:

- what already exists in the live company
- what is working
- what is still manual
- what is still missing before this becomes a true machine

## 1. Live Company

- Company name: `NoHum Studio`
- Prefix: `NOH`
- Runtime model: one Paperclip company, not multi-company
- Live source of truth: server-hosted Paperclip runtime

## 2. Live Agents

Current top-level agents:

- `CEO`
- `Research Lead`
- `Launch Lead`

Current runtime configuration:

- adapter: `codex_local`
- model: `gpt-5.4`
- reasoning effort: `high`
- wake on demand: enabled
- max concurrent runs: intended to remain `1`

Current heartbeat timing:

- `CEO`: `4500s`
- `Research Lead`: `9000s`
- `Launch Lead`: `6000s`

Important runtime fix already applied:

- `CEO` had to be corrected to `role = ceo`
- join approvals for new agents fail without a real CEO role
- this is a live Paperclip constraint, not a NoHum policy choice

## 3. Managed Agent Instructions

For each live agent, the managed instructions workspace contains:

- `AGENTS.md`
- `SOUL.md`
- `HEARTBEAT.md`
- `TOOLS.md`

This matters because current importer behavior only materializes `AGENTS.md` into the imported prompt. The richer file set had to be copied into the managed instructions workspace after import.

## 4. Live Projects

Current live projects:

- `Hypothesis Funnel`
- `Studio OS`
- `Venture - vh-20260328-visual-feedback-agency`

What each currently means:

- `Hypothesis Funnel`: raw sourcing and queue-package work
- `Studio OS`: reusable policy, bootstrap, and factory-internal operating work
- `Venture - vh-20260328-visual-feedback-agency`: first live venture lane created after the first research batch

## 5. Live Goal

Current company goal:

- `Operate NoHum Studio as an AI-only venture factory`

This is the root goal that the current projects attach to.

## 6. Live Issues Created So Far

Bootstrap and studio setup issues:

- `NOH-2` first research batch
- `NOH-3` reusable launch readiness / Gate B standard
- `NOH-4` company bootstrap / CEO operating contour

First venture lane issues:

- `NOH-5` `Research Dossier`
- `NOH-6` `Scoring & Economics`
- `NOH-7` `Product Definition`
- `NOH-8` `Build & QA`
- `NOH-9` `Launch Ops`
- `NOH-10` `Feedback & Decision`
- `NOH-11` `Venture bootstrap and manager supervision`

Machine-building issues created in `Studio OS`:

- `NOH-15` `Define Research Machine v1`
- `NOH-16` `Design research evidence and storage contract`
- `NOH-17` `Define Promote To Venture routine`
- `NOH-18` `Define first payment signal normalization`
- `NOH-19` `Define venture document template contract`

## 7. What Has Already Worked

The following is now proven in the live company:

- the company imports and runs
- the core three agents take assigned work
- the first sourcing batch can be completed
- reusable Gate B and launch-readiness policy artifacts can be produced inside `Studio OS`
- a winner can be normalized into a queue package
- a first venture lane can be created in the live company
- the company can operate on a one-company runtime model

This is enough to say the contour is alive.

## 8. What Is Still Manual

The system is still heavily driven by instructions, issue structure, and human setup.

Still manual today:

- winner normalization into canonical queue packages
- Gate A decision handling
- venture project creation and root-issue scaffolding
- venture document scaffolding
- data-source selection during research
- payment signal interpretation
- product repo attach flow

This means the company is agent-operable, but not yet fully enforced.

## 9. What The Research Machine Still Lacks

The biggest missing layer is not "more prompts". It is a real research machine.

Current gaps:

- no explicit source registry for competitor discovery
- no fixed traffic-validation pipeline
- no normalized revenue-validation pipeline
- no dedicated research subagents for separate evidence classes
- no durable storage contract for raw evidence vs canonical package vs venture docs
- no explicit cadence contract for sourcing, refresh, and queue decay
- no automation actions for `Create Raw Idea`, `Advance To Research`, `Promote To Venture`, `Attach Product Repo`, or `Record Payment Signal`

Today, `Research Lead` can do useful work, but it still does that work through general model capability plus instructions. That is not the same as a built machine.

## 10. Known Official Paperclip Constraints

These constraints are now part of reality and should be treated as design inputs:

- current importer reliably imports `company + agents`
- projects, tasks, templates, and skills do not materialize as live entities automatically
- current built-in skills exposed in the official skills index are limited
- role enums in official main are stricter than the bootstrap package originally assumed
- join-request approval for a new agent requires a live `ceo` role

## 11. Current System Verdict

The current state is:

- not a fake demo
- not a finished machine
- a real live contour with one active company, one working research lane, reusable policy artifacts, and one first venture lane

The next job is not "more bootstrap".

The next job is to convert this contour into a repeatable machine by building:

- `Research Machine v1`
- `Venture Bootstrap Automation v1`
- `Payment Signal Adapter v1`
- `Build / Launch Execution Substrate v1`
