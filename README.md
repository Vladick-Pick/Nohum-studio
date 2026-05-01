# NoHum

> everyone talks about the coming one-person billion-dollar company
> we’re interested in a different question
> what if the real breakthrough is not one person running one giant product, but a minimal-human venture factory systematically operating many small products?

NoHum is an early open design project for that question.

It is a repo-native operating system design for minimal-human companies: companies where most recurring work is executed by agents, while humans stay at the level of direction, architecture, boundaries, approvals, and system redesign.

**Not one founder, one product. One operating system, many products.**

## What This Repo Is

- an early open design project for a minimal-human venture factory
- a public working surface for company ontology, workflows, agent roles, skills, gates, evals, and governance
- a repository of executable organizational modules designed around `Paperclip` as the target runtime
- a place where contributors can improve prompts, templates, workflows, review rules, and company-building logic through pull requests

## What This Repo Is Not

- not the live runtime source of truth for the current NoHum company
- not proof that fully autonomous companies already work
- not a pile of prompts pretending to be an operating system
- not a community-managed control plane for live venture, budget, or board decisions

## Why This Exists

Most AI-company discussion is still framed around one founder using agents to build one giant product.

NoHum explores a different thesis: the interesting breakthrough may be a company that can systematically launch, evaluate, operate, and retire many small software products through a minimal-human operating system.

That means the real design problem is not just better agents.
It is better:

- ontology
- workflows
- role boundaries
- tools and skills
- quality gates
- governance
- observability
- economics

## Current State

This repository should be read as an **early design project with uneven module maturity**.

The strongest module today is `Research`.
The studio-wide `self-improvement` layer is now present as a first-class operating subsystem, but still newer and less battle-tested than `Research`.

See the full maturity map in [MODULES.md](MODULES.md).

## Current Strongest Module: Research

Research is the most developed reference module in the repo.

It already has:

- a shared `Idea Card` model
- specialist role decomposition
- source hierarchy and review discipline
- machine-readable decision reasons
- historical memory surfaces
- an explicit venture-selection doctrine, including structured `value delta`

Start here:

- [Research Module](docs/research/README.md)
- [Copyable Product Thesis](docs/research/copyable-product-thesis.md)
- [Research Execution System](docs/research/research-execution-system.md)
- [Idea Card Template](docs/templates/research/idea-card.md)

## Start Here

If you are a founder, operator, or venture-studio person:

- [MODULES.md](MODULES.md)
- [Operating Spec](docs/operating-spec.md)
- [Research Module](docs/research/README.md)
- [Studio Self-Improvement Playbook](docs/playbooks/studio-self-improvement-playbook.md)

If you are a builder or contributor:

- [CONTRIBUTING.md](CONTRIBUTING.md)
- [GOVERNANCE.md](GOVERNANCE.md)
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

If you want the detailed package/runtime layer:

- [COMPANY.md](COMPANY.md)
- [Import Runbook](docs/import-runbook.md)

The root `COMPANY.md` is intentionally a day-1 core and Research import package.
Downstream Product Bet, Build, GTM, and Support roles live in the repository as
optional library surfaces until a separate activation package is created.

## Contribution Model

The right way to contribute to NoHum is the same way you would contribute to open software:

- improve module contracts
- tighten workflows
- clarify ontology
- improve templates and task surfaces
- strengthen prompts and role boundaries
- add evals, observability, and review rules
- reduce ambiguity and hidden tribal knowledge

The wrong way to contribute:

- generic “super-agent” ideas
- autonomy claims without ontology
- vibes-only prompt tweaks
- changes that blur governance boundaries
- proposals that silently assume access to live runtime data, approvals, or secrets

See [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution rules.

## Public Collaboration Boundary

This repository is for improving **how the company should work**.

It is not a place where the public directly governs:

- live venture selection
- budget allocation
- board approvals
- production secrets
- customer or payment operations

Those boundaries are documented in [GOVERNANCE.md](GOVERNANCE.md).

## Repository Map

- [agents/](agents): role specs and manager prompts
- [teams/](teams): team structure
- [tasks/](tasks): runnable workflow units
- [skills/](skills): operational skills
- [docs/research/](docs/research): deepest current module
- [docs/templates/](docs/templates): canonical artifacts
- [docs/observability/](docs/observability): health, eval, and hygiene surfaces
- [docs/experiments/](docs/experiments): self-improvement experiment memory
- [docs/automation/](docs/automation): transition-machine design
- [scripts/self-improvement/](scripts/self-improvement): deterministic scoring, replay, world-model, and rollback helpers

## Runtime Target

The current implementation target is `Paperclip`.

This repo is designed to help shape:

- company structure
- agent roles
- tasks
- knowledge artifacts
- governance surfaces
- workflow execution logic

inside a minimal-human company runtime.

## Status

NoHum is best understood today as:

- early
- ambitious
- uneven
- strongest in research
- still opening the downstream company modules in public

That is intentional.

The goal is not to pretend the company is already solved.
The goal is to build the operating system in public.

## License

This repository is licensed under the Apache License, Version 2.0.

See [LICENSE](LICENSE).
