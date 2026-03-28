# Import Runbook

This runbook assumes the official `paperclipai/paperclip` CLI and upgrades the existing live `NoHum Studio` company instead of creating a new one.

## Goal

Import the v1.5 package into the current server-hosted company without duplicating the existing core identities.

## Package Source

Use the public repository or a checked-out local copy of it:

```sh
https://github.com/Vladick-Pick/Nohum-studio.git
```

or

```sh
/absolute/path/to/Nohum-studio
```

## CLI Shape

Current CLI syntax on the local Paperclip checkout:

```sh
pnpm paperclipai company import \
  --from <path-or-url> \
  --target <new|existing> \
  --company-id <existing-company-id> \
  --collision <rename|skip|replace> \
  --agents <comma-separated slugs or all> \
  --dry-run
```

## Why Import In Two Passes

The CLI accepts one collision strategy per import command.

NoHum v1.5 needs two different behaviors:

- existing core agents should be replaced only when identity parity is exact
- newly introduced specialists should be created as new agents and then paused

That means the safe path is a two-pass import.

## Step 1: Preview core-agent replacement

Core agents with expected identity parity:

- `ceo`
- `research-lead`
- `launch-lead`

```sh
pnpm paperclipai company import \
  --from /absolute/path/to/Nohum-studio \
  --target existing \
  --company-id <live-company-id> \
  --agents ceo,research-lead,launch-lead \
  --collision replace \
  --dry-run \
  --json
```

Review:

- exact match to existing live identities
- no rename behavior
- no unexpected duplicate agent plan
- valid role mapping and adapter config warnings only where expected

If preview shows rename or duplicate behavior for any core agent, stop here and switch to manual migration.

## Step 2: Apply core-agent replacement

```sh
pnpm paperclipai company import \
  --from /absolute/path/to/Nohum-studio \
  --target existing \
  --company-id <live-company-id> \
  --agents ceo,research-lead,launch-lead \
  --collision replace
```

## Step 3: Preview specialist import

New v1.5 agents:

- `chief-of-staff`
- `agent-mechanic`
- `research-synthesizer`
- `competitor-scout`
- `demand-validator`
- `revenue-validator`
- `product-definer`
- `growth-lead`
- `support-lead`
- `feedback-synthesizer`
- `delivery-engineer`
- `code-reviewer`
- `release-engineer`

```sh
pnpm paperclipai company import \
  --from /absolute/path/to/Nohum-studio \
  --target existing \
  --company-id <live-company-id> \
  --agents chief-of-staff,agent-mechanic,research-synthesizer,competitor-scout,demand-validator,revenue-validator,product-definer,growth-lead,support-lead,feedback-synthesizer,delivery-engineer,code-reviewer,release-engineer \
  --collision rename \
  --dry-run \
  --json
```

Review:

- every specialist is planned as a new agent
- no collision with the three existing core agents
- reporting lines are preserved
- if any specialist already exists from an earlier partial rollout, stop and switch that slug to manual remediation instead of using `rename`

## Step 4: Apply specialist import

```sh
pnpm paperclipai company import \
  --from /absolute/path/to/Nohum-studio \
  --target existing \
  --company-id <live-company-id> \
  --agents chief-of-staff,agent-mechanic,research-synthesizer,competitor-scout,demand-validator,revenue-validator,product-definer,growth-lead,support-lead,feedback-synthesizer,delivery-engineer,code-reviewer,release-engineer \
  --collision rename
```

## Step 5: Post-import runtime wiring

After both passes:

1. verify `CEO`, `Research Lead`, and `Launch Lead` were updated in place
2. verify the specialist roster was created once each
3. manually pause newly created specialists because portability manifest does not carry agent status
4. sync the four-file managed instruction bundles where runtime stores them separately
5. apply secrets and tool wiring from `docs/mcp-access-matrix.md`
6. verify budgets and heartbeat settings from `.paperclip.yaml`

## Import Reality

Expected imported runtime entities on current portability flow:

- company metadata
- agents

Do not assume automatic materialization of:

- `teams/`
- `skills/`
- `projects/`
- `tasks/`
- `templates/`
- `docs/`

Those remain the bootstrap and post-import wiring layer.
