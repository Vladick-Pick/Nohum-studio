# Company Knowledge Import Runbook

## Purpose

Paperclip company import does not automatically turn every repository document
into durable company knowledge. The NoHum repository therefore has a separate
post-import knowledge step.

This prevents two failures:

- agents inventing substitute doctrine when `docs/**` are not present in the
  live company
- archived or future-design material being treated as active runtime policy

## Source Of Truth

Use the Git commit being imported as the source, not a dirty server workspace.

Recommended source:

```bash
git fetch origin main
git rev-parse origin/main
```

The importer records for every knowledge item:

- `source_path`
- `source_commit`
- `source_url`
- `sha256`
- `layer`
- `canonical`

The original file contents are stored after this metadata block.

## Layer Rules

| Repository path | Knowledge layer | Runtime meaning |
| --- | --- | --- |
| `COMPANY.md`, `.paperclip.yaml` | `runtime_manifest` | active import/runtime contract |
| `docs/research/**` | `active_research` | active pre-Gate-A research doctrine |
| `docs/product-bets/**` | `active_product_bet` | active post-Gate-A / pre-Gate-B doctrine |
| `docs/templates/**` | `template` | reusable artifact templates, not active work |
| `docs/archive/**` | `archive` | historical reference, not active doctrine |
| `docs/experiments/**` | `future_design` | experimental or future design only |
| `agents/**` | `agent_instruction` | durable agent instruction source |
| `skills/**` | `skill` | durable skill source |
| `teams/**` | `team` | durable team contract source |
| `projects/**` | `project` | durable project contract source |
| `tasks/**` | `bootstrap_task` | imported bootstrap task source |

Archived and future-design items may be imported, but their titles and metadata
must make the non-active status explicit.

## Dry Run

Run from the NoHum repository:

```bash
node scripts/import-company-knowledge.mjs \
  --company-id "$PAPERCLIP_COMPANY_ID" \
  --source-ref origin/main
```

This prints counts by layer and does not touch Paperclip.

## Apply On The Paperclip Server

Run from a clean checkout or a temporary archive of the exact Git ref:

```bash
node scripts/import-company-knowledge.mjs \
  --company-id "$PAPERCLIP_COMPANY_ID" \
  --database-url "$DATABASE_URL" \
  --postgres-module "$PAPERCLIP_POSTGRES_MODULE" \
  --source-ref origin/main \
  --attach-issue NOHAA-8 \
  --attach-issue NOHAA-9 \
  --comment \
  --apply
```

For the current hosted Paperclip release, `DATABASE_URL` is usually the embedded
Postgres URL and `PAPERCLIP_POSTGRES_MODULE` points at the release-local
`postgres` package.

## Required First-Sourcing Attachments

Attach these exact repository documents to the active first sourcing workflow:

- `docs/research/copyable-product-thesis.md`
- `docs/research/contracts/intake-and-handoffs.md`
- `docs/research/contracts/shared-adapters.md`
- `docs/research/research-execution-system.md`

The first sourcing cycle must not resume until these docs are attached as
company knowledge or explicit issue documents with matching hashes.

## Future Paperclip Importer Fix

The durable platform fix belongs in Paperclip company portability:

1. Treat `COMPANY.md` `includes` entries under `docs/**` as importable
   knowledge/document records, not as inert package files.
2. Preserve source path, source commit, source URL, sha256, and layer metadata.
3. Mark `docs/templates/**`, `docs/archive/**`, and `docs/experiments/**`
   distinctly so they cannot silently become active runtime doctrine.
4. Attach selected canonical docs to seed issues when the package declares that
   attachment.

Until Paperclip supports that natively, this repository script is the required
post-import bridge.
