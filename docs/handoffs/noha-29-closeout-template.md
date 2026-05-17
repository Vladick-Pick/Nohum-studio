# NOHA-29 Closeout Template

Date: 2026-05-02
Issue: `NOHA-29`
Status target when control-plane access is restored: `done`

## When To Use

Use this template once the adapter can mutate Paperclip issues again.

Current blocker:

- the sandbox denies socket and IPC creation needed by the supported Paperclip client paths

Unblock owner:

- Paperclip runtime or harness operator

Required unblock:

- allow this adapter to open sockets or IPC endpoints for Paperclip control-plane access, or expose a supported non-network issue-mutation path

## Prepared Closeout Comment

```md
PASS

- Added [docs/readiness/studio-os-substrate-release-readiness.md](/home/paperclip/workspaces/nohum-studio/docs/readiness/studio-os-substrate-release-readiness.md:1) to name the implementation owner, reviewer, QA owner, release owner, rollback executor, watchpoints, rollout expectation, security and stack-exception follow-up ownership, and a post-release verification template for the next Studio OS substrate change.
- Updated [docs/handoffs/definition-to-build.md](/home/paperclip/workspaces/nohum-studio/docs/handoffs/definition-to-build.md:3) so the release-readiness packet is a required build input.
- Updated [docs/readiness/gate-b-readiness.md](/home/paperclip/workspaces/nohum-studio/docs/readiness/gate-b-readiness.md:3) so Gate B now checks for named reviewer, QA owner, release owner, and rollback expectation.
- Aligned [docs/build-environment-contract.md](/home/paperclip/workspaces/nohum-studio/docs/build-environment-contract.md:32) entry criteria to require a named implementation owner, reviewer, QA owner, and release owner.
- Verification: `git diff --check -- docs/readiness/studio-os-substrate-release-readiness.md docs/handoffs/definition-to-build.md docs/readiness/gate-b-readiness.md docs/build-environment-contract.md` exited `0`.

No further release-side work remains on this issue. If a future attached repo change deviates from the canonical stack, `VP of Engineering` owns the stack-exception follow-up; if it touches shared runtime, auth, deploy, secret, or payment surfaces, `Security Engineer` owns the security review memo before release.
```

## Next Action Once Unblocked

1. Patch `NOHA-29` to `done` with the prepared closeout comment.
   Preferred command skeleton once sockets are allowed again:
   ```bash
   cd /home/paperclip/releases/paperclip-20260428-000123-96151149
   node --import ./cli/node_modules/tsx/dist/loader.mjs ./cli/src/index.ts \
     issue update "$PAPERCLIP_TASK_ID" \
     --status done \
     --comment "<paste prepared closeout comment body>"
   ```
2. If the mutation path still fails, patch the issue to `blocked` with the sandbox/runtime unblock note above.
