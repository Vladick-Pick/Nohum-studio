# NoHum v1.5 MCP and Tool Access Matrix

This document defines per-role access profiles for tools, MCP surfaces, secrets, restrictions, and post-import wiring.

Important:
- This is a package/bootstrap contract.
- Access is enforced via runtime adapter config, environment wiring, and policy docs.
- Never embed board credentials in agent configs.

## Access Profiles by Role

| Role | Primary tool surfaces | MCP access profile | Required secrets | Restrictions | Post-import wiring notes |
|---|---|---|---|---|---|
| CEO | Paperclip API, company docs, governance artifacts | `paperclip`, `paperclip-knowledge`, optional read-only GitHub | `OPENAI_API_KEY` | No board auth token in runtime; no direct code shipping | Verify `canCreateAgents=true`; bind to governance docs and escalation rules |
| Chief of Staff | Paperclip API, project/task monitoring, org docs | `paperclip`, `paperclip-knowledge`, optional read-only GitHub | `OPENAI_API_KEY` | No direct production release actions | Wire cadence dashboards and blocked-work trackers |
| Agent Mechanic | Paperclip API, runtime logs, repo inspection, health checks | `paperclip`, `paperclip-knowledge`, optional GitHub + browser diagnostics | `OPENAI_API_KEY` | No gate approvals; no strategy overrides | Grant diagnostic-only access to runtime paths and tool health scripts |
| Research Lead | Research docs, queue package, evidence registry | `paperclip`, `paperclip-knowledge`, browser/web tools, optional memory | `OPENAI_API_KEY`, optional `APIFY_TOKEN` | No build/release writes | Bind evidence storage paths and queue package template |
| Research Synthesizer | Knowledge docs, scorecard artifacts | `paperclip-knowledge`, optional memory | `OPENAI_API_KEY` | No decision override outside Research Lead | Enable queue-package schema lint/checklist |
| Competitor Scout | Web research, pricing pages, evidence capture | browser/web MCP, optional memory | `OPENAI_API_KEY`, optional `APIFY_TOKEN` | No stage transitions | Force citation and freshness fields on outputs |
| Demand Validator | Traffic/review signal sources, evidence docs | browser/web MCP, optional analytics read | `OPENAI_API_KEY`, optional `APIFY_TOKEN` | No pricing decisions alone | Route output through research evidence template |
| Revenue Validator | Pricing and payment proof sources | browser/web MCP, optional payment metadata read | `OPENAI_API_KEY` | No payment acceptance decision | Require explicit assumptions + confidence per estimate |
| Launch Lead | Product-definition docs, launch governance, handoffs | `paperclip`, `paperclip-knowledge`, browser/web, optional GitHub read | `OPENAI_API_KEY`, optional `PAYMENT_PROVIDER_API_KEY` | No board-only approvals | Bind Gate B checklist and launch readiness artifact |
| Product Definer | PRD/brief artifacts, requirements docs | `paperclip-knowledge`, optional browser research | `OPENAI_API_KEY` | No release authority | Enforce `launch-brief` and `handoff-dossier` structure |
| Growth Lead | GTM docs, channel plans, launch metrics docs | browser/web MCP, optional analytics read | `OPENAI_API_KEY`, optional `ANALYTICS_API_KEY` | No payment verdict authority | Bind metric plan template and channel logging |
| Support Lead | Support queues, feedback logs, incident notes | `paperclip`, `paperclip-knowledge`, optional analytics read | `OPENAI_API_KEY` | No direct code deployment | Wire feedback ingestion and escalation templates |
| Feedback Synthesizer | Feedback docs, synthesis artifacts | `paperclip-knowledge`, optional sentiment tooling | `OPENAI_API_KEY` | No direct venture stage mutation | Enforce structured feedback output schema |
| Delivery Engineer | Repo/worktree, tests, CI logs | git/GitHub, filesystem, test tooling | `OPENAI_API_KEY`, optional `GITHUB_TOKEN` | Cannot self-approve release | Require branch/worktree discipline and test evidence |
| Code Reviewer | Diff review, tests, static checks | git/GitHub read, test tooling | `OPENAI_API_KEY`, optional `GITHUB_TOKEN` | No direct release execution | Require independent review artifact before release handoff |
| Release Engineer | Merge/PR/release operations, release notes | git/GitHub write, CI status read | `OPENAI_API_KEY`, optional `GITHUB_TOKEN` | No architecture or queue decisions | Enforce final verification checklist before release |

## Secrets Registry (v1.5)

Base secrets:
- `OPENAI_API_KEY`: required for all codex-local roles

Research optional:
- `APIFY_TOKEN`: large-scale sourcing and scraping workflows

Launch optional:
- `PAYMENT_PROVIDER_API_KEY`: payment signal adapter and validation hooks
- `ANALYTICS_API_KEY`: analytics destination validation and checks

Delivery optional:
- `GITHUB_TOKEN`: PR/release automation where needed

## Restriction Baseline

- Board-only decisions remain outside agent runtime credentials.
- Cross-role handoffs must point to canonical artifacts, never comments-only.
- No role can bypass Gate A/Gate B artifact requirements.
- Delivery roles cannot self-approve quality gates and release in one step.

## Post-Import Wiring Checklist

1. Bind each role to its instruction-file bundle (`AGENTS`, `SOUL`, `HEARTBEAT`, `TOOLS`).
2. Apply role secrets in runtime environment, not in markdown content.
3. Verify permissions (`canCreateAgents`) only for intended control-plane roles.
4. Confirm heartbeat/wake settings match team cadence.
5. Validate tool access by running one smoke task per team.
6. Keep newly imported specialist roles paused until explicit activation.

## Import Compatibility Notes

- If importer materializes only agents, this matrix still governs post-import runtime wiring.
- Team-level access is applied through manager-controlled role policies and docs.
