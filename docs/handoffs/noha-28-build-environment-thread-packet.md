# NOHA-28 Build Environment Thread Packet

Date: 2026-05-02
Issue: `NOHA-28`
Purpose: thread-ready update to post once Paperclip API access is restored

## Post This On The Issue Thread

<!-- BEGIN ISSUE COMMENT -->

Build environment contract is now grounded in the verified attached workspace rather than a generic substrate description.

Canonical artifact:
- `docs/build-environment-contract.md`

Verified attached workspace reality:
- runtime verified in this workspace: `node v24.14.0`
- package manager required for repo-local verification: none
- install/bootstrap step required before repo-local verification: none
- executable local scripts:
  - `scripts/check-agent-skills.mjs`
  - `scripts/generate-detailed-org.mjs`
- root toolchain manifests present: none
- root toolchain manifests absent: `package.json`, lockfile, `Dockerfile`, `Makefile`, `pyproject.toml`, `go.mod`, `Cargo.toml`

Exact repo-local verification commands:

```bash
node --version
node scripts/check-agent-skills.mjs
tmpdir=$(mktemp -d) && tar --exclude=.git -cf - . | tar -xf - -C "$tmpdir" && cd "$tmpdir" && node scripts/generate-detailed-org.mjs && node scripts/check-agent-skills.mjs
```

Verified outcomes in NOHA-28:
- `node --version` -> `v24.14.0`
- `node scripts/check-agent-skills.mjs` -> `All agent skill references resolve to local skills.`
- scratch-copy generator + skill-check run passed

Secret and env status:
- required for repo-local verification: none
- required later for live Paperclip-controlled runtime or deploy automation, but not for the local workspace proof:
  - `OPENAI_API_KEY`
  - `GITHUB_TOKEN`
  - `PAPERCLIP_API_URL`
  - `PAPERCLIP_API_KEY`

Named blockers:
- `RETRY` — Supported Node version is not pinned in the repository, so reproducibility is verified only for `node v24.14.0`
  - owner: `VP of Engineering` with `DevOps Automator`
  - action: add a canonical runtime pin such as `.nvmrc`, `.node-version`, or equivalent repo-level declaration
- `RETRY` — Safe end-to-end generator verification requires a scratch copy because `scripts/generate-detailed-org.mjs` rewrites tracked files and offers no dry-run mode
  - owner: `VP of Engineering` with `Software Architect`
  - action: decide whether to add a `--check` or `--dry-run` path for substrate-safe verification

Verification evidence:
- `git diff --check` passed
- `node scripts/check-agent-skills.mjs` passed
- `node --check scripts/generate-detailed-org.mjs` passed
- scratch-copy generator + skill-check run passed

Additional durability work completed:
- `scripts/generate-detailed-org.mjs` was updated so future regenerations preserve the build-environment contract include plus the related build-playbook, definition-to-build, and gate-b readiness language instead of wiping them

Current verdict:
- workspace-usability proof: `PASS`
- substrate readiness overall: `RETRY` until the two blockers above are resolved

Next action:
- `NOHA-16` and `NOHA-26` should consume `docs/build-environment-contract.md` as the current build-env surface for substrate review

<!-- END ISSUE COMMENT -->

## Execution Note

This packet exists because the Paperclip control plane was unreachable from the issue workspace on both:

- `$PAPERCLIP_API_URL`
- `http://127.0.0.1:3100`

Observed error:

```text
curl: (7) Couldn't connect to server
```

Replay-helper result in this workspace:

```text
node scripts/post-issue-update-from-packet.mjs docs/handoffs/noha-28-build-environment-thread-packet.md
fetch failed
```

Explicit posting blocker:

- status: `RETRY`
- blocker: this issue workspace cannot reach the Paperclip control plane directly enough to post the acceptance comment
- owner: `Agent Mechanic` with `SRE`
- required action: restore control-plane reachability from issue workspaces or provide an allowed local relay path for issue comment and status mutations

## Reachability Repro For Agent Mechanic And SRE

Use these commands from the issue workspace context to reproduce the current failure:

```bash
curl --noproxy '*' -sv "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" \
  -H "Authorization: Bearer $PAPERCLIP_API_KEY"

curl --noproxy '*' -sv http://127.0.0.1:3100/health

node scripts/post-issue-update-from-packet.mjs docs/handoffs/noha-28-build-environment-thread-packet.md
```

Current observed symptom set:

- direct remote API path fails
- direct local listener path fails
- helper replay path fails with `fetch failed`

## Posting Command Once Access Is Restored

Preferred replay path:

```bash
node scripts/post-issue-update-from-packet.mjs --status done docs/handoffs/noha-28-build-environment-thread-packet.md
```

Success condition:

- if the preferred replay command returns a successful Paperclip response, `NOHA-28` is complete and should remain closed unless the contract or blocker set changes

If you need the raw payload first, use:

```bash
node scripts/post-issue-update-from-packet.mjs --status done --print-payload docs/handoffs/noha-28-build-environment-thread-packet.md
```

Manual fallback sequence:

```bash
python - <<'PY' > /tmp/noha28-issue-update.json
from pathlib import Path
import json
import re

text = Path("docs/handoffs/noha-28-build-environment-thread-packet.md").read_text()
match = re.search(r"<!-- BEGIN ISSUE COMMENT -->\n(.*?)\n<!-- END ISSUE COMMENT -->", text, re.S)
if not match:
    raise SystemExit("issue comment markers not found")

print(json.dumps({"status": "done", "comment": match.group(1).strip()}))
PY

curl -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
  -H "X-Paperclip-Run-Id: $PAPERCLIP_RUN_ID" \
  -H "Content-Type: application/json" \
  -X PATCH \
  "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" \
  --data-binary @/tmp/noha28-issue-update.json
```
