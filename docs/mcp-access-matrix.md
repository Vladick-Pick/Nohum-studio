# NoHum v1.5 Detailed-Core MCP and Tool Access Matrix

This document defines per-role access profiles for tools, MCP surfaces, secrets, restrictions, and post-import wiring.

Important:
- This is a package/bootstrap contract.
- Access is enforced via runtime adapter config, environment wiring, and policy docs.
- Never embed board credentials in agent configs.

## Secret Model

- `Paperclip Company Secrets` are the canonical source of truth for NoHum credentials.
- Secret create, rotate, list, and delete actions stay board-only.
- Agents receive only scoped runtime env through `secret_ref`.
- model auth for `codex_local` is host-managed and outside company secret scope
- Venture app env in Railway is a manual runtime copy in v1, not the canonical origin.

## Naming Contract

Provider-specific secrets:

- `GITHUB_TOKEN`
- `BRAVE_API_KEY`
- `RAILWAY_TOKEN`
- `SENTRY_AUTH_TOKEN`
- `SENTRY_DSN`
- `LAVA_API_KEY`
- `LAVA_WEBHOOK_SECRET`
- `PLAUSIBLE_API_KEY`
- `RESEND_API_KEY`
- `DATABASE_URL`
- `BETTER_AUTH_SECRET`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_BUCKET`
- `R2_ENDPOINT`
- `OPENROUTER_API_KEY` only for venture apps that ship LLM features

Canonical aliases for the agent and policy layer:

- `PAYMENT_PROVIDER_API_KEY` -> Lava.top
- `ANALYTICS_API_KEY` -> Plausible
- `EMAIL_PROVIDER_API_KEY` -> Resend
- `DEPLOY_PROVIDER_TOKEN` -> Railway
- `SEARCH_PROVIDER_API_KEY` remains optional later; v1 research roles use `BRAVE_API_KEY` directly

Rule:

- app code uses provider-specific names
- policy docs and agent runtime wiring use canonical aliases when that avoids unnecessary vendor coupling

## Minimum Viable Core Set

Company-wide agent/runtime secrets:

- `GITHUB_TOKEN`
- `BRAVE_API_KEY`
- `RAILWAY_TOKEN`
- `SENTRY_AUTH_TOKEN`
- `PAYMENT_PROVIDER_API_KEY`
- `ANALYTICS_API_KEY`

Mapped provider-level secrets:

- `LAVA_API_KEY`
- `LAVA_WEBHOOK_SECRET`
- `PLAUSIBLE_API_KEY`
- `RESEND_API_KEY`

Per-venture app secrets:

- `DATABASE_URL`
- `BETTER_AUTH_SECRET`
- `LAVA_API_KEY`
- `LAVA_WEBHOOK_SECRET`
- `PLAUSIBLE_API_KEY`
- `RESEND_API_KEY`
- `SENTRY_DSN`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_BUCKET`
- `R2_ENDPOINT`
- optional `OPENROUTER_API_KEY` only if the shipped venture uses LLM functionality

## MCP Credential Policy

No-key or local-first:

- `Serena`
- `Playwright MCP`

Credential-backed:

- `Brave Search MCP` -> `BRAVE_API_KEY`
- `Railway MCP` -> `DEPLOY_PROVIDER_TOKEN` and, where needed, an authenticated Railway CLI session backed by `RAILWAY_TOKEN`
- `Sentry MCP` -> `SENTRY_AUTH_TOKEN`
- `Lava.top` integration -> `PAYMENT_PROVIDER_API_KEY` at the agent layer and `LAVA_API_KEY` at the app layer
- `Plausible` API-based analytics access -> `ANALYTICS_API_KEY` at the agent layer and `PLAUSIBLE_API_KEY` at the app layer

Optional or not core on day one:

- `Context7` is optional and should not block company bring-up
- `Supabase MCP` is out of the default path because Supabase is not part of the canonical stack
- `mcp-awesome` is a discovery catalog, not a runtime dependency

## Canonical MCP Stack

NoHum default ventures assume this MCP set:

- `Serena` for engineering repo and semantic code navigation
- `Playwright MCP` for browser QA, launch smoke tests, and UI diagnostics
- `Brave Search MCP` for research, GTM, and support discovery work
- `Railway MCP` for deploy and runtime operations
- `Sentry MCP` for reliability and production diagnostics

Anything outside this set is an exception path. `Context7` is allowed as optional documentation support. `Supabase MCP` is out of the default path because Supabase is not part of the canonical stack.
| Role | Primary tool surfaces | MCP access profile | Runtime secrets usually wired | Restrictions | Post-import wiring notes |
|---|---|---|---|---|---|
| CEO | Paperclip API, governance docs, portfolio reviews | paperclip, paperclip-knowledge, optional GitHub read | host-managed model auth | No board credentials in runtime; No direct code shipping | Verify control-plane approvals and governance docs are wired. |
| Chief of Staff | Paperclip API, task/project monitoring, org docs | paperclip, paperclip-knowledge, optional GitHub read | host-managed model auth | No production release actions; No board-only overrides | Keep wake-on-demand available and wire cadence dashboards after import. |
| Agent Mechanic | Paperclip API, runtime logs, repo inspection, health checks | paperclip, paperclip-knowledge, optional GitHub plus browser diagnostics, optional Sentry diagnostics | `GITHUB_TOKEN`, `SENTRY_AUTH_TOKEN` | No gate approvals; No strategy overrides | Grant diagnostic-only access to runtime paths, tool health scripts, and Sentry diagnostics if wired. |
| Research Lead | Hypothesis Funnel issues, TrustMRR intake cards, queue package, evidence registry | paperclip, paperclip-knowledge, browser research, optional memory | `BRAVE_API_KEY` | No build or release writes; No bypass of Gate A evidence | Existing live core slug should upgrade in place. |
| Research Synthesizer | Knowledge docs, scorecards, queue artifacts, contradiction notes | paperclip, paperclip-knowledge, optional memory | host-managed model auth | No decision override outside Research Lead | Pause after import until research templates are wired. |
| Competitor Scout | Browser research, official product/pricing pages, competitor evidence cards | browser/web research, paperclip-knowledge, optional memory | `BRAVE_API_KEY` | No stage transitions; Citations required on all claims | Pause after import until browser access and evidence templates are wired. |
| Demand Validator | Traffic, review, search, and usage sources; research docs | browser/web research, paperclip-knowledge, optional analytics read when a concrete datasource exists | `BRAVE_API_KEY` | No pricing decisions alone; No queue promotion without evidence | Pause after import until demand evidence template is wired. |
| Revenue Validator | Pricing and payment-proof sources, economics packets | browser/web research, paperclip-knowledge, optional memory | `BRAVE_API_KEY` | No payment acceptance decision; Must state assumptions explicitly | Pause after import until pricing and payment evidence surfaces are wired. |
| Launch Lead | Paperclip issues and knowledge, launch brief and handoff dossier, pricing and launch readiness docs, browser research for unresolved market or channel questions | paperclip, paperclip-knowledge, optional browser research | `PAYMENT_PROVIDER_API_KEY`, `ANALYTICS_API_KEY` | Does not approve board-only exceptions; Does not self-execute engineering work; Does not launch without payment capture and measurement | Existing live core slug should upgrade in place and be rebound as head of Product Launch. |
| Product Definer | Paperclip knowledge docs, PRD and acceptance criteria artifacts, customer journey and ICP docs | paperclip, paperclip-knowledge, optional browser research | host-managed model auth | No vague ICP or offer language; No release authority; No hidden assumptions in handoff artifacts | New specialist. Keep paused until Gate B artifacts and templates are wired. |
| UX Researcher | Feedback docs, journey maps, persona artifacts, meeting summaries | paperclip-knowledge, optional browser research | host-managed model auth | No speculative personas without evidence; No pixel decisions without user-flow rationale | New specialist. Activate only after feedback and research surfaces are wired. |
| UX Architect | Flow maps, story docs, UX architecture notes | paperclip-knowledge, optional browser research | host-managed model auth | No visual-system work without flow justification; No hidden edge cases in handoff diagrams | New specialist. Keep paused until design and engineering handoff surfaces are wired. |
| UI Designer | Design notes, screen annotations, launch brief | paperclip-knowledge, optional browser research | host-managed model auth | No decorative drift away from product promise; No hidden states or omitted errors in design handoff | New specialist. Keep paused until design handoff paths are available. |
| Pricing Strategist | Pricing docs, competitor pricing pages, launch brief | paperclip-knowledge, optional browser research | `PAYMENT_PROVIDER_API_KEY` | No unsupported price claims; No hidden discounting logic in launch packet | New specialist. Keep paused until pricing and payment evidence surfaces are wired. |
| Launch Program Manager | Paperclip tasks, timeline docs, stakeholder map, readiness checklists | paperclip, paperclip-knowledge, optional browser research | host-managed model auth | No comments-only handoffs; No claiming readiness without artifact links | New specialist. Activate only after team-level checklists are imported. |
| CMO | Paperclip tasks, marketing briefs, analytics dashboards, browser research | paperclip, paperclip-knowledge, browser research, analytics read | `ANALYTICS_API_KEY` | No campaign launch without measurement; No promise that product/support cannot sustain | New top-level manager. Keep paused until analytics and campaign destinations are wired. |
| Growth Lead | Analytics dashboards, channel docs, campaign experiment trackers | paperclip, paperclip-knowledge, browser research, analytics read | `ANALYTICS_API_KEY` | No channel scaling without measured signal; No price or promise changes without cross-team review | Existing package role moves under CMO; keep paused until analytics destinations are confirmed. |
| Marketing Strategist | Positioning docs, battlecards, campaign briefs | paperclip-knowledge, browser research, analytics read | host-managed model auth | No abstract brand language detached from the offer; No copying competitor positioning without differentiation | New specialist. Activate once positioning and message surfaces are wired. |
| SEO Specialist | Content drafts, search-intent research, metrics dashboard | paperclip-knowledge, browser research, analytics read | `ANALYTICS_API_KEY` | No keyword plans without product-message fit; No unsupported SEO claims or fabricated rankings | New specialist. Activate once content and analytics surfaces are wired. |
| Content Creator | Copy docs, release notes, message assets | paperclip-knowledge, browser research, analytics read | host-managed model auth | No promise beyond approved scope; No generic launch copy divorced from the ICP | New specialist. Activate once content destinations and templates are wired. |
| Paid Media Strategist | Paid experiment docs, analytics dashboards, creative briefs | paperclip-knowledge, browser research, analytics read | `ANALYTICS_API_KEY` | No budget scaling without signal; No opaque attribution assumptions | New specialist. Keep paused until analytics destinations and campaign surfaces are wired. |
| Tracking & Measurement Specialist | Analytics dashboards, event definitions, measurement docs | paperclip-knowledge, browser research, analytics read | `ANALYTICS_API_KEY` | No claiming attribution certainty when instrumentation is weak; No metric definitions hidden in chat threads | New specialist. Keep paused until analytics destinations and dashboards are wired. |
| Community Builder | Community notes, feedback summaries, launch message pack | paperclip-knowledge, browser research, analytics read | host-managed model auth | No astroturfing or fabricated endorsements; No community claims without direct evidence | New specialist. Activate once community surfaces and summaries are wired. |
| AI Citation Strategist | Content inventory, AI-discovery research notes, metrics docs | paperclip-knowledge, browser research, analytics read | `ANALYTICS_API_KEY` | No fabricated citations or manipulated references; No recommendation claims without observable source support | New specialist. Activate once content inventory and measurement surfaces are wired. |
| VP of Engineering | Paperclip tasks, repo and worktree access, CI and deploy notes | repo/worktree, git/GitHub, CI/test tooling, optional Railway MCP | `GITHUB_TOKEN`, `DEPLOY_PROVIDER_TOKEN` | No bypass of review and QA gates; No hidden scope expansion beyond approved handoff | New top-level manager. Keep paused until repo and release tooling are wired. |
| Software Architect | Repo read/write, planning docs, architecture notes | repo/worktree, git/GitHub, CI/test tooling | `GITHUB_TOKEN` | No pseudo-architecture detached from the actual repo; No release approval authority | New specialist. Activate once engineering worktree access is wired. |
| Backend Architect | Repo and tests, backend docs, performance notes | repo/worktree, git/GitHub, CI/test tooling | `GITHUB_TOKEN` | No speculative infrastructure work beyond approved scope; No silent schema or contract changes | New specialist. Activate once backend repo access and CI are wired. |
| Frontend Developer | Repo/worktree, tests, browser if needed, review package | repo/worktree, git/GitHub, CI/test tooling | `GITHUB_TOKEN` | No skipping verification; No self-approval of review or release | New specialist. Activate once repo access and test tooling are wired. |
| AI Engineer | Repo/worktree, tests, evaluation docs | repo/worktree, git/GitHub, CI/test tooling | `GITHUB_TOKEN` | No opaque model behavior claims without tests or evidence; No scope drift into speculative AI features | New specialist. Activate once repo access and evaluation tooling are wired. |
| Senior Developer | Repo/worktree, tests, review package | repo/worktree, git/GitHub, CI/test tooling | `GITHUB_TOKEN` | No bypass of review and QA boundaries; No completion claims without fresh evidence | New specialist. Activate once repo and test access are wired. |
| DevOps Automator | CI/CD, deploy notes, runtime configs, release docs | repo/worktree, git/GitHub, CI/test tooling, Railway MCP | `GITHUB_TOKEN`, `DEPLOY_PROVIDER_TOKEN` | No undocumented infra changes; No release without rollback or rollout notes | New specialist. Activate once deploy tooling and secrets are wired. |
| SRE | Observability notes, runtime diagnostics, release and canary plans | repo/worktree, git/GitHub, CI/test tooling, Railway MCP, optional Sentry MCP | `GITHUB_TOKEN`, `DEPLOY_PROVIDER_TOKEN`, `SENTRY_AUTH_TOKEN` | No reliability claims without signals or checks; No incident readiness based on assumptions alone | New specialist. Activate once observability surfaces are wired. |
| Security Engineer | Diffs, review notes, runtime risk docs | repo/worktree, git/GitHub, CI/test tooling | `GITHUB_TOKEN` | No vague security theater; No approval of release without explicit risk framing | New specialist. Activate once repo and runtime review surfaces are wired. |
| Code Reviewer | Diffs, tests, acceptance docs, review notes | repo/worktree, git/GitHub, CI/test tooling | `GITHUB_TOKEN` | No self-release authority; No pass verdict without evidence | Existing package role moves under VP Engineering; keep paused until repo access is wired. |
| QA Director | QA reports, test scenarios, release notes | repo/worktree, git/GitHub, CI/test tooling | `GITHUB_TOKEN` | No fuzzy QA sign-off; No skipping critical-path risk coverage | New specialist. Activate once QA tooling and test environments are wired. |
| QA Engineer | Tests, QA reports, release evidence | repo/worktree, git/GitHub, CI/test tooling | `GITHUB_TOKEN` | No approving fixes without rerunning evidence; No collapsing QA findings into vague summaries | New specialist. Activate once QA tooling and test environments are wired. |
| Release Engineer | Git and release tooling, CI status, release docs | repo/worktree, git/GitHub, CI/test tooling, Railway MCP | `GITHUB_TOKEN`, `DEPLOY_PROVIDER_TOKEN` | No self-approval of unreviewed code; No release without rollback and verification steps | Existing package role moves under VP Engineering; keep paused until release tooling is wired. |
| Support Lead | Support logs, feedback docs, metrics dashboards, Paperclip tasks | paperclip, paperclip-knowledge, analytics read | `PAYMENT_PROVIDER_API_KEY`, `ANALYTICS_API_KEY` | No support readiness claims without escalation owners; No payment ambiguity resolved without policy | Existing package role becomes a top-level manager; keep paused until support tooling and escalation templates are wired. |
| Support Responder | Support queue, response templates, policy docs | paperclip-knowledge, analytics read | `PAYMENT_PROVIDER_API_KEY` | No ad-hoc promises outside policy; No unresolved critical issue closed without owner | New specialist. Activate once support queue tooling is wired. |
| Feedback Synthesizer | Knowledge docs, support summaries, feedback datasets | paperclip-knowledge, analytics read | `ANALYTICS_API_KEY` | No collapsing feedback into vague anecdotes; No backlog recommendations without evidence clusters | Existing package role moves under Support Lead; keep paused until support and analytics surfaces are wired. |
| Analytics Reporter | Analytics dashboards, cohort tables, portfolio review docs | paperclip-knowledge, analytics read | `ANALYTICS_API_KEY` | No executive summaries detached from source metrics; No metric certainty claims when instrumentation is weak | New specialist. Activate once analytics surfaces and report templates are wired. |

## Restriction Baseline

- Board-only decisions remain outside agent runtime credentials.
- Secret CRUD stays board-only even when agent runtime needs the value.
- Agent configs should store only `secret_ref`, never plaintext secrets.
- Leave agent secret refs on `"version": "latest"` so company-level rotations propagate automatically.
- Cross-role handoffs must point to canonical artifacts, never comments-only updates.
- No role can bypass Gate A, Gate B, review, QA, or release requirements.
- Engineering roles cannot self-approve implementation, review, QA, and release in one step.
- Marketing and Support roles cannot rewrite pricing or product promises unilaterally.
