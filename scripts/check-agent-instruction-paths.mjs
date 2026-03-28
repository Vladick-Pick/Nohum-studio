import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const agentsDir = path.join(root, "agents");
const badPatterns = [
  /^\s*-\s*`\.\/*SOUL\.md`\s*$/m,
  /^\s*-\s*`\.\/*HEARTBEAT\.md`\s*$/m,
  /^\s*-\s*`\.\/*TOOLS\.md`\s*$/m,
];
const offenders = [];

for (const slug of fs.readdirSync(agentsDir).sort()) {
  const agentPath = path.join(agentsDir, slug, "AGENTS.md");
  if (!fs.existsSync(agentPath)) continue;

  const text = fs.readFileSync(agentPath, "utf8");
  const found = badPatterns.filter((pattern) => pattern.test(text)).map((pattern) => pattern.source);
  if (found.length > 0) {
    offenders.push(`${slug}: ${found.join(", ")}`);
  }
}

if (offenders.length > 0) {
  console.error("Workspace-root relative overlay paths are still present in AGENTS.md:");
  for (const item of offenders) console.error(`- ${item}`);
  process.exit(1);
}

console.log("All AGENTS.md overlay paths use workspace-safe repo-root references.");
