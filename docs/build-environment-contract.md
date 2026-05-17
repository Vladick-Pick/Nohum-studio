# Studio OS Build Environment Contract

Date: 2026-05-02

## Intent

This contract defines the minimum build environment substrate required before a NoHum venture can move from approved definition into engineering execution.

The goal is to make build setup:

- boring
- repeatable
- reviewable
- rollback-safe

This is a canonical artifact. Engineering should not start from comments-only setup notes or implied environment knowledge.

## When This Contract Applies

Use this contract after `Gate B` passes and before `Attach Product Repo` is treated as complete.

It governs:

- repo scaffold expectations
- issue workspace attachment
- environment classes
- secrets and config boundaries
- CI/CD gate expectations
- rollout and rollback requirements
- substrate review questions and risks

## Verified Attached Workspace Reality

Observed in this attached repository on `2026-05-02`:

- repo shape: documentation and import-package workspace, not a conventional app service repo
- root toolchain manifests present: none
- root toolchain manifests absent: `package.json`, lockfile, `Dockerfile`, `Makefile`, `pyproject.toml`, `go.mod`, `Cargo.toml`
- executable local scripts:
  - `scripts/check-agent-skills.mjs`
  - `scripts/generate-detailed-org.mjs`
- verified runtime in this workspace: `node v24.14.0`
- repo-local package manager required: none
- repo-local install step required before verification: none

Implication:

- the minimum usable build surface for this workspace is the Node runtime plus the checked-out repo contents
- there is no evidence in this repo that `npm`, `pnpm`, `yarn`, `bun`, `pip`, `go`, or `cargo` are required for the smallest local verification path

## Entry Criteria

Build setup may begin only when all of the following already exist:

- approved Gate B packet
- approved `definition-to-build` handoff dossier
- venture-specific acceptance criteria
- fixed `venture_id`
- fixed offer, pricing, and checkout path
- chosen analytics destination
- chosen payment provider target or explicit `none yet` decision
- named implementation owner, reviewer, QA owner, and release owner

If any item is missing, the correct outcome is `RETRY`, not silent environment invention.

## Repo-Local Bootstrap And Verification

For the currently attached Studio OS workspace, the exact non-mutating bootstrap and verification path is:

1. Confirm the verified runtime:

```bash
node --version
```

Expected verified value in this heartbeat:

```text
v24.14.0
```

2. Run the smallest command that proves the checked-out workspace is usable:

```bash
node scripts/check-agent-skills.mjs
```

Expected success output:

```text
All agent skill references resolve to local skills.
```

3. When substrate review needs stronger proof that the generator path works without mutating the active checkout, use a scratch-copy run:

```bash
tmpdir=$(mktemp -d) && tar --exclude=.git -cf - . | tar -xf - -C "$tmpdir" && cd "$tmpdir" && node scripts/generate-detailed-org.mjs && node scripts/check-agent-skills.mjs
```

Verified result in this heartbeat:

- the generator completed in a clean scratch copy
- the follow-up skill-reference check passed

Use step 2 as the minimum workspace-usability check.
Use step 3 when the substrate review needs end-to-end proof of the generation path.

## Required Environment Objects

The build substrate for one venture must expose exactly these objects:

1. Product repo
   - named with the venture identity
   - one default branch
   - one protected review path
2. Issue workspace
   - attached to the repo
   - reproducible from the current default branch
   - usable for implementation, review, and QA evidence capture
3. Preview deployment target
   - isolated from production
   - reachable by reviewers and QA
   - safe to point at sandbox or non-production integrations
4. Production deployment target
   - reachable only through release flow
   - has a known previous-good rollback target
5. Environment manifest
   - documents URLs, owners, secret classes, and current status
   - stored with the venture's canonical build or release artifacts

## Environment Classes

| Environment | Purpose | Traffic | Integration mode | Minimum exit check |
|---|---|---|---|---|
| Build workspace | Implementation and local verification | Internal only | Sandbox or mock by default | Repro steps and fresh verification evidence exist |
| Preview | Review, QA, and release-candidate checks | Internal and controlled reviewers | Sandbox where possible; live only if isolated and justified | Critical path smoke test passes |
| Production | Real user traffic | External | Live integrations only | Canary passes and rollback target is recorded |

Rules:

- Preview must not share production-only secrets.
- Production must not be mutated directly from an unreviewed branch or ad-hoc shell session.
- If a venture does not need a preview URL, the contract must still define an equivalent reviewable release candidate surface.

## Secret And Config Boundary

The venture must classify every secret and runtime setting before release. At minimum:

| Class | Requirement |
|---|---|
| Source control and deploy auth | Separate from product runtime secrets |
| App runtime config | Base URL, environment name, and feature flags are explicit |
| Payment integration | Sandbox and live credentials are separated |
| Analytics and measurement | Destination, write key, and event ownership are explicit |
| Error or uptime monitoring | Alert destination and owner are named |
| AI or third-party APIs | Present only when required by the product, with least-necessary scope |

Rules:

- Secrets are referenced by class and owner in docs; values never appear in repo docs.
- Sandbox and live credentials must never share the same variable source by accident.
- Cross-venture secret reuse requires an explicit note; default assumption is venture isolation.

Current attached-workspace secret status:

- required for repo-local verification: none
- required later for live Paperclip-controlled runtime or deploy automation, but not for the local workspace proof above:
  - `OPENAI_API_KEY`
  - `GITHUB_TOKEN`
  - `PAPERCLIP_API_URL`
  - `PAPERCLIP_API_KEY`

## CI/CD And Release Gate

The release path must preserve the engineering gate split already defined in the playbooks:

1. Implementation
   - code lands behind a reviewed branch or PR path
2. Review
   - reviewer sees fresh verification evidence
3. QA
   - QA validates the release candidate against the intended critical path
4. Release
   - release owner publishes rollout and rollback notes before production deploy

Minimum pipeline expectations:

- one automated verification step runs before merge or release
- release candidate artifact or commit is identifiable
- production deploy is traceable to a single reviewed revision
- rollback target is the last known-good production revision

## Canary And Rollback Contract

Every production release needs a narrow canary, even for small ventures.

Minimum canary:

- deploy one reviewed release candidate
- verify the public critical path
- verify one analytics or tracking event arrives
- verify payment path in sandbox or a safe live equivalent when checkout changed
- hold a rollback decision point before broader announcement or traffic push

Minimum rollback note:

- previous-good revision or artifact
- rollback trigger conditions
- owner who can execute the rollback
- post-rollback verification step

No release is complete without both canary and rollback notes.

## Observability Minimum

Before production:

- one health signal exists for the primary user path
- one error capture path exists
- one release log entry links venture, revision, environment, and owner
- support and release owners know where failures will appear first

If observability is weaker than this, the environment is not release-ready.

## Review Questions For Substrate Approval

Use these questions during substrate review:

- Can `Attach Product Repo` create or validate every required environment object above?
- Can each environment be rebuilt without relying on one person's memory?
- Are secret classes separated cleanly enough to prevent preview-to-production bleed?
- Does the release path preserve implementation, review, QA, and release as distinct gates?
- Is the rollback target known before production deploy starts?
- Is the current venture platform choice generic enough to automate later, or is it a one-off exception?

## Current Risk Notes

- The repository defines the contract, but the actual `Attach Product Repo` routine is still a target capability rather than live automation.
- The first deployment platform is not fixed in this repo, so venture-specific environment manifests still need a concrete provider decision.
- Shared company-level tokens are a cross-venture leakage risk if the runtime does not isolate secrets per venture environment.
- Preview environments that hit live payment or analytics systems must document why sandbox isolation was not possible.
- The repo does not pin the supported Node version through `.nvmrc`, `.node-version`, `package.json`, or an equivalent runtime manifest; the current proof is only against `node v24.14.0`.
- The generator script has no built-in dry-run mode; safe execution today depends on running it in a scratch copy when the current checkout contains unrelated work.

## Named Blockers And Owners

Current blockers or required follow-up from this workspace reality:

| Status | Blocker | Owner | Required action |
|---|---|---|---|
| `RETRY` | Supported Node version is not pinned in the repository, so reproducibility is verified only for `node v24.14.0` | `VP of Engineering` with `DevOps Automator` | Add a canonical runtime pin such as `.nvmrc`, `.node-version`, or equivalent repo-level declaration |
| `RETRY` | Safe end-to-end generator verification requires a scratch copy because `scripts/generate-detailed-org.mjs` rewrites tracked files and offers no dry-run mode | `VP of Engineering` with `Software Architect` | Decide whether to add a `--check` or `--dry-run` path for substrate-safe verification |
| `PASS` | No local secret is required to prove basic workspace usability | `DevOps Automator` | Keep repo-local verification separate from post-import runtime secret wiring |

## PASS / FAIL / RETRY Language

- `PASS`: all required environment objects exist, release gates are wired, and canary plus rollback notes are ready
- `RETRY`: the contract is understood but one or more prerequisites, secrets, or environment objects are missing
- `FAIL`: the proposed setup would skip gates, hide rollback, or mix environments unsafely
- `ESCALATE`: board or manager decision is needed on platform choice, budget, or policy exception
