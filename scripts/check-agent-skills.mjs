import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const agentsDir = path.join(root, "agents");
const skillsDir = path.join(root, "skills");
const runtimeSkills = new Set([
  "paperclip",
  "paperclip-create-agent",
  "paperclip-knowledge",
  "para-memory-files",
]);

function readFrontmatter(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  return match ? match[1] : "";
}

function extractSkills(frontmatter) {
  const lines = frontmatter.split(/\r?\n/);
  const skills = [];
  let inSkills = false;

  for (const line of lines) {
    if (line.trim() === "skills:") {
      inSkills = true;
      continue;
    }

    if (!inSkills) continue;

    const match = line.match(/^\s*-\s*([a-z0-9-]+)\s*$/);
    if (match) {
      skills.push(match[1]);
      continue;
    }

    if (line.trim() === "") continue;
    if (!line.startsWith(" ")) break;
  }

  return skills;
}

const missing = [];

for (const slug of fs.readdirSync(agentsDir).sort()) {
  const agentPath = path.join(agentsDir, slug, "AGENTS.md");
  if (!fs.existsSync(agentPath)) continue;

  const frontmatter = readFrontmatter(agentPath);
  const skills = extractSkills(frontmatter);

  for (const skill of skills) {
    if (runtimeSkills.has(skill)) continue;
    const skillPath = path.join(skillsDir, skill, "SKILL.md");
    if (!fs.existsSync(skillPath)) {
      missing.push(`${slug}: ${skill}`);
    }
  }
}

if (missing.length > 0) {
  console.error("Missing local skill files for agent references:");
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log("All agent skill references resolve to local skills or approved runtime skills.");
