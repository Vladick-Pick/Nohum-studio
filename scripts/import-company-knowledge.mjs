#!/usr/bin/env node
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const DEFAULT_ATTACH_PATHS = [
  "docs/research/copyable-product-thesis.md",
  "docs/research/contracts/intake-and-handoffs.md",
  "docs/research/contracts/shared-adapters.md",
  "docs/research/research-execution-system.md",
];

const HELP = `Import NoHum repository files into Paperclip company knowledge.

Usage:
  node scripts/import-company-knowledge.mjs --company-id <uuid> --apply [options]

Options:
  --apply                         Write to Paperclip DB. Without this, dry-run only.
  --company-id <uuid>             Target Paperclip company id.
  --database-url <url>            Postgres URL. Defaults to PAPERCLIP_DATABASE_URL or DATABASE_URL.
  --postgres-module <path>        Path to a postgres package/module, useful on Paperclip servers.
  --repo-root <path>              Repository root. Defaults to current working directory.
  --source-ref <git-ref>          Git ref/commit to import. Defaults to HEAD.
  --include-archive               Include docs/archive files. Default: excluded.
  --attach-issue <identifier>     Attach critical knowledge docs to this issue. Repeatable.
  --attach-path <path>            Path to attach to target issues. Repeatable.
  --comment                       Add a system comment to attached issues.
  --help                          Show this help.

Examples:
  node scripts/import-company-knowledge.mjs --company-id abcd --source-ref origin/main
  node scripts/import-company-knowledge.mjs --company-id abcd --apply --database-url postgres://paperclip:paperclip@127.0.0.1:54329/paperclip --postgres-module /home/paperclip/releases/current/node_modules/.pnpm/postgres@3.4.8/node_modules/postgres --source-ref origin/main --attach-issue NOHAA-8 --attach-issue NOHAA-9 --comment
`;

function parseArgs(argv) {
  const out = {
    apply: false,
    companyId: process.env.PAPERCLIP_COMPANY_ID || "",
    databaseUrl: process.env.PAPERCLIP_DATABASE_URL || process.env.DATABASE_URL || "",
    postgresModule: process.env.PAPERCLIP_POSTGRES_MODULE || "",
    repoRoot: process.cwd(),
    sourceRef: "HEAD",
    includeArchive: false,
    attachIssues: [],
    attachPaths: [],
    comment: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = () => {
      i += 1;
      if (i >= argv.length) throw new Error(`Missing value for ${arg}`);
      return argv[i];
    };
    if (arg === "--apply") out.apply = true;
    else if (arg === "--company-id") out.companyId = next();
    else if (arg === "--database-url") out.databaseUrl = next();
    else if (arg === "--postgres-module") out.postgresModule = next();
    else if (arg === "--repo-root") out.repoRoot = next();
    else if (arg === "--source-ref") out.sourceRef = next();
    else if (arg === "--include-archive") out.includeArchive = true;
    else if (arg === "--attach-issue") out.attachIssues.push(next());
    else if (arg === "--attach-path") out.attachPaths.push(next());
    else if (arg === "--comment") out.comment = true;
    else if (arg === "--help" || arg === "-h") out.help = true;
    else throw new Error(`Unknown argument: ${arg}`);
  }
  return out;
}

function git(repoRoot, args, opts = {}) {
  return execFileSync("git", args, {
    cwd: repoRoot,
    encoding: opts.encoding ?? "utf8",
    maxBuffer: opts.maxBuffer ?? 64 * 1024 * 1024,
  });
}

function normalizePath(value) {
  return value.split(path.sep).join("/").replace(/^\.\/+/, "");
}

function hasGit(repoRoot) {
  try {
    git(repoRoot, ["rev-parse", "--is-inside-work-tree"]);
    return true;
  } catch {
    return false;
  }
}

function listGitFiles(repoRoot, sourceRef) {
  const commit = git(repoRoot, ["rev-parse", "--verify", sourceRef]).trim();
  const raw = git(repoRoot, ["ls-tree", "-r", "--name-only", commit]);
  const paths = raw
    .split("\n")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .filter((entry) => /\.(md|ya?ml)$/i.test(entry));
  return { commit, paths };
}

function listFilesystemFiles(repoRoot) {
  const paths = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === ".git") continue;
      const absolute = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(absolute);
        continue;
      }
      const relative = normalizePath(path.relative(repoRoot, absolute));
      if (/\.(md|ya?ml)$/i.test(relative)) paths.push(relative);
    }
  }
  walk(repoRoot);
  return { commit: "filesystem", paths: paths.sort() };
}

function readGitFile(repoRoot, commit, filePath) {
  return git(repoRoot, ["show", `${commit}:${filePath}`], { maxBuffer: 128 * 1024 * 1024 });
}

function readFilesystemFile(repoRoot, filePath) {
  return fs.readFileSync(path.join(repoRoot, filePath), "utf8");
}

function classifyLayer(filePath) {
  if (filePath.startsWith("docs/archive/")) return "archive";
  if (filePath.startsWith("docs/templates/")) return "template";
  if (filePath.startsWith("docs/experiments/")) return "future_design";
  if (filePath.startsWith("agents/")) return "agent_instruction";
  if (filePath.startsWith("skills/")) return "skill";
  if (filePath.startsWith("teams/")) return "team";
  if (filePath.startsWith("projects/")) return "project";
  if (filePath.startsWith("tasks/")) return "bootstrap_task";
  if (filePath === "COMPANY.md" || filePath === ".paperclip.yaml" || filePath === ".paperclip.yml") return "runtime_manifest";
  if (filePath.startsWith("docs/research/")) return "active_research";
  if (filePath.startsWith("docs/product-bets/")) return "active_product_bet";
  if (filePath.startsWith("docs/playbooks/")) return "playbook";
  if (filePath.startsWith("docs/runbooks/")) return "runbook";
  if (filePath.startsWith("docs/decisions/")) return "architecture_decision";
  if (filePath.startsWith("docs/readiness/")) return "readiness";
  if (filePath.startsWith("docs/handoffs/")) return "handoff";
  if (filePath.startsWith("docs/atlas/")) return "atlas";
  if (filePath.startsWith("docs/")) return "org_library";
  return "repo_admin";
}

function titleFor(filePath, layer) {
  const prefix = layer === "archive"
    ? "[ARCHIVE] "
    : layer === "template"
      ? "[TEMPLATE] "
      : layer === "future_design"
        ? "[FUTURE] "
        : "";
  return `${prefix}Repo Doc: ${filePath}`;
}

function isCanonical(layer) {
  return !["archive", "template", "future_design", "repo_admin"].includes(layer);
}

function sha256(text) {
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function yamlQuote(value) {
  return JSON.stringify(String(value));
}

function buildBody({ filePath, layer, commit, sourceUrl, hash, importedAt, content }) {
  return [
    "---",
    `source_path: ${yamlQuote(filePath)}`,
    `source_commit: ${yamlQuote(commit)}`,
    `source_url: ${yamlQuote(sourceUrl)}`,
    `sha256: ${yamlQuote(hash)}`,
    `layer: ${yamlQuote(layer)}`,
    `canonical: ${isCanonical(layer) ? "true" : "false"}`,
    `imported_by: "scripts/import-company-knowledge.mjs"`,
    `imported_at: ${yamlQuote(importedAt)}`,
    "---",
    "",
    content.trimEnd(),
    "",
  ].join("\n");
}

function sourceUrlFor(commit, filePath) {
  return `https://github.com/Vladick-Pick/Nohum-studio/blob/${commit}/${filePath}`;
}

function summarize(filePath, layer, hash, commit) {
  return `Imported from NoHum repository path ${filePath} at ${commit} with sha256 ${hash.slice(0, 12)}; layer=${layer}.`;
}

function parseSourcePath(body) {
  if (typeof body !== "string") return null;
  const match = body.match(/^source_path:\s*"([^"]+)"/m) ?? body.match(/^source_path:\s*([^\n]+)/m);
  return match ? match[1].trim().replace(/^['"]|['"]$/g, "") : null;
}

function resolvePostgres(opts) {
  if (opts.postgresModule) {
    return createRequire(import.meta.url)(opts.postgresModule);
  }
  try {
    return createRequire(import.meta.url)("postgres");
  } catch (err) {
    throw new Error(
      "Cannot resolve postgres module. Pass --postgres-module /path/to/postgres or install postgres in this workspace.",
      { cause: err },
    );
  }
}

function buildEntries(opts) {
  const repoRoot = path.resolve(opts.repoRoot);
  const source = hasGit(repoRoot)
    ? listGitFiles(repoRoot, opts.sourceRef)
    : listFilesystemFiles(repoRoot);
  const commit = source.commit;
  const importedAt = new Date().toISOString();
  const paths = source.paths
    .filter((filePath) => opts.includeArchive || !filePath.startsWith("docs/archive/"))
    .sort();

  return paths.map((filePath) => {
    const content = commit === "filesystem"
      ? readFilesystemFile(repoRoot, filePath)
      : readGitFile(repoRoot, commit, filePath);
    const layer = classifyLayer(filePath);
    const hash = sha256(content);
    const sourceUrl = sourceUrlFor(commit, filePath);
    return {
      filePath,
      layer,
      hash,
      commit,
      title: titleFor(filePath, layer),
      kind: "note",
      summary: summarize(filePath, layer, hash, commit),
      sourceUrl,
      body: buildBody({ filePath, layer, commit, sourceUrl, hash, importedAt, content }),
    };
  });
}

function countBy(entries, key) {
  const out = {};
  for (const entry of entries) out[entry[key]] = (out[entry[key]] ?? 0) + 1;
  return out;
}

async function applyImport(opts, entries) {
  if (!opts.companyId) throw new Error("--company-id is required with --apply");
  if (!opts.databaseUrl) throw new Error("--database-url or PAPERCLIP_DATABASE_URL is required with --apply");

  const postgres = resolvePostgres(opts);
  const sql = postgres(opts.databaseUrl);
  const attachPaths = opts.attachPaths.length ? opts.attachPaths : DEFAULT_ATTACH_PATHS;

  const result = await sql.begin(async (tx) => {
    const existing = await tx`
      select id, title, body
      from knowledge_items
      where company_id = ${opts.companyId}
    `;
    const bySourcePath = new Map();
    const byTitle = new Map();
    for (const item of existing) {
      const sourcePath = parseSourcePath(item.body);
      if (sourcePath && !bySourcePath.has(sourcePath)) bySourcePath.set(sourcePath, item);
      if (!byTitle.has(item.title)) byTitle.set(item.title, item);
    }

    const imported = [];
    for (const entry of entries) {
      const current = bySourcePath.get(entry.filePath) ?? byTitle.get(entry.title) ?? null;
      if (current) {
        const [updated] = await tx`
          update knowledge_items
          set title = ${entry.title},
              kind = ${entry.kind},
              summary = ${entry.summary},
              body = ${entry.body},
              source_url = ${entry.sourceUrl},
              updated_at = now()
          where id = ${current.id}
          returning id, title
        `;
        imported.push({ id: updated.id, filePath: entry.filePath, action: "updated", hash: entry.hash, layer: entry.layer });
      } else {
        const [created] = await tx`
          insert into knowledge_items (
            id, company_id, title, kind, summary, body, source_url, created_at, updated_at
          )
          values (
            gen_random_uuid(), ${opts.companyId}, ${entry.title}, ${entry.kind}, ${entry.summary}, ${entry.body}, ${entry.sourceUrl}, now(), now()
          )
          returning id, title
        `;
        imported.push({ id: created.id, filePath: entry.filePath, action: "created", hash: entry.hash, layer: entry.layer });
      }
    }

    const importedByPath = new Map(imported.map((entry) => [entry.filePath, entry]));
    const attached = [];
    const issueRows = opts.attachIssues.length
      ? await tx`
          select id, identifier
          from issues
          where company_id = ${opts.companyId}
            and identifier = any(${opts.attachIssues})
        `
      : [];
    for (const issue of issueRows) {
      for (const filePath of attachPaths) {
        const item = importedByPath.get(filePath);
        if (!item) continue;
        const existingLink = await tx`
          select id
          from issue_knowledge_items
          where issue_id = ${issue.id}
            and knowledge_item_id = ${item.id}
          limit 1
        `;
        if (existingLink.length === 0) {
          const [sortRow] = await tx`
            select coalesce(max(sort_order), 0) + 10 as next_sort_order
            from issue_knowledge_items
            where issue_id = ${issue.id}
          `;
          await tx`
            insert into issue_knowledge_items (
              id, company_id, issue_id, knowledge_item_id, sort_order, created_at, updated_at
            )
            values (
              gen_random_uuid(), ${opts.companyId}, ${issue.id}, ${item.id}, ${sortRow.next_sort_order}, now(), now()
            )
          `;
        }
        attached.push({ issue: issue.identifier, filePath, knowledgeItemId: item.id });
      }
      if (opts.comment) {
        const attachedForIssue = attached.filter((entry) => entry.issue === issue.identifier);
        const lines = attachedForIssue.map((entry) => {
          const importedItem = importedByPath.get(entry.filePath);
          return `- ${entry.filePath} sha256=${importedItem?.hash ?? "unknown"}`;
        });
        await tx`
          insert into issue_comments (id, company_id, issue_id, author_type, body, created_at, updated_at)
          values (
            gen_random_uuid(),
            ${opts.companyId},
            ${issue.id},
            'system',
            ${[
              "SYSTEM UPDATE: canonical repository documents imported into Paperclip company knowledge.",
              "",
              `Source commit: ${entries[0]?.commit ?? "unknown"}`,
              `Imported knowledge items: ${imported.length}`,
              "",
              "Attached canonical documents:",
              ...lines,
              "",
              "Research agents remain paused until the operator explicitly resumes the lane.",
            ].join("\n")},
            now(),
            now()
          )
        `;
      }
    }

    return {
      imported,
      attached,
      created: imported.filter((entry) => entry.action === "created").length,
      updated: imported.filter((entry) => entry.action === "updated").length,
    };
  });

  await sql.end();
  return result;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    process.stdout.write(HELP);
    return;
  }

  const entries = buildEntries(opts);
  const summary = {
    apply: opts.apply,
    companyId: opts.companyId || null,
    sourceRef: opts.sourceRef,
    sourceCommit: entries[0]?.commit ?? null,
    fileCount: entries.length,
    layerCounts: countBy(entries, "layer"),
    attachIssues: opts.attachIssues,
    attachPaths: opts.attachPaths.length ? opts.attachPaths : DEFAULT_ATTACH_PATHS,
  };

  if (!opts.apply) {
    console.log(JSON.stringify({ ok: true, mode: "dry-run", summary }, null, 2));
    return;
  }

  const result = await applyImport(opts, entries);
  console.log(JSON.stringify({ ok: true, mode: "apply", summary, result }, null, 2));
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  if (err?.cause) console.error(err.cause);
  process.exit(1);
});
