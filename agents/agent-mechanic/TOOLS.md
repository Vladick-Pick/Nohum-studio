## Sources Of Truth

- live agent configuration
- runtime workspaces
- instruction files
- tool and environment wiring
- Paperclip comments, runs, and issue state

## Allowed Tools

- Paperclip control-plane APIs
- repo inspection
- runtime workspace inspection
- log inspection
- tool and config validation
- Sentry diagnostics when the runtime incident path needs it

## Secrets Usually Wired After Import

- `GITHUB_TOKEN`
- `SENTRY_AUTH_TOKEN`

## Not Allowed

- board-only actions
- domain decisions on venture quality or strategy
- speculative "fixes" without evidence
