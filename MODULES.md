# Module Maturity Map

This repo is an early design project, not a finished company operating system.

Use this map to understand which modules are already useful as references and which are still open design territory.

## Maturity Labels

- `Reference`: the deepest and most reusable current module in the repo
- `In Progress`: meaningful structure exists, but the module is not yet stable enough to treat as a strong reference
- `Draft`: present as design intent, early scaffolding, or thin policy surface only

## Modules

| Module | Maturity | What it currently gives you | Start here |
|---|---|---|---|
| Research | `Reference` | strongest current module; sourcing, evaluation, shared `Idea Card`, history layer, doctrine, review discipline | [docs/research/README.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/README.md) |
| Company Ontology and Operating Policy | `In Progress` | company shape, stage model, gates, budgets, top-level ownership | [docs/operating-spec.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/operating-spec.md), [COMPANY.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/COMPANY.md) |
| Runtime / Paperclip Portability | `In Progress` | import package, agent structure, runtime target assumptions | [paperclip.manifest.json](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/paperclip.manifest.json), [docs/import-runbook.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/import-runbook.md) |
| Launch / Venture Definition | `In Progress` | Gate B framing, launch handoffs, venture-definition surfaces | [docs/atlas/launch-machine.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/atlas/launch-machine.md), [docs/handoffs/research-to-launch.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/handoffs/research-to-launch.md) |
| Engineering / Build | `Draft` | substrate assumptions, role shells, readiness surfaces | [docs/runbooks/engineering-substrate.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/runbooks/engineering-substrate.md), [docs/playbooks/build-playbook.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/playbooks/build-playbook.md) |
| Marketing / GTM | `Draft` | role shells, launch-facing GTM dependencies, skill surfaces | [teams/marketing/TEAM.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/teams/marketing/TEAM.md), [agents/cmo/AGENTS.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/agents/cmo/AGENTS.md) |
| Support / Feedback | `Draft` | support team shell, feedback handoffs, signal-review surfaces | [teams/support/TEAM.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/teams/support/TEAM.md), [docs/handoffs/launch-to-support.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/handoffs/launch-to-support.md) |
| Finance / Payment Control | `Draft` | payment-event templates, policy hooks, escalation surfaces | [docs/templates/venture/payment-events.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/templates/venture/payment-events.md), [docs/handoffs/payment-ambiguity-to-board.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/handoffs/payment-ambiguity-to-board.md) |
| Observability / Governance | `In Progress` | factory health, org hygiene, delegation contracts, control surfaces | [docs/observability/factory-health-metrics.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/observability/factory-health-metrics.md), [docs/delegation/manager-delegation-contracts.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/delegation/manager-delegation-contracts.md) |

## Current Reading Order

If you want to understand the project in the right order:

1. [README.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/README.md)
2. [docs/research/README.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/research/README.md)
3. [docs/operating-spec.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/docs/operating-spec.md)
4. [COMPANY.md](/Users/vladislavbogdan/Documents/Вайб-проекты/NoHum/Nohum-studio/COMPANY.md)

## Design Rule

Do not treat a `Draft` module as if it were already production-grade organizational logic.

NoHum is being opened in public precisely so the weaker modules can be worked through with the same depth that research already has.
