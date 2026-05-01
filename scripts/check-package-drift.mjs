import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

const expectedDay1Agents = new Set([
  "agent-mechanic",
  "ceo",
  "chief-of-staff",
  "competitor-scout",
  "demand-validator",
  "idea-scout",
  "launch-lead",
  "research-lead",
  "revenue-validator",
]);

const forbiddenRootAgents = new Set([
  "product-bet-compiler",
  "pre-market-autoreasoner",
  "rat-designer",
  "evidence-router",
]);

const expectedRootTasks = new Set([
  "tasks/bootstrap-company-access-and-secrets/TASK.md",
  "tasks/bootstrap-company/TASK.md",
]);

const ignitionTask = "tasks/start-first-research-cycle/TASK.md";
const localAbsolutePathPattern = new RegExp("/" + "Users/");

const mustNotExist = [
  "paperclip.manifest.json",
  "scripts/generate-detailed-org.mjs",
  "templates",
  "agents/market-proof-analyst",
  "agents/market-signal-scout",
  "agents/research-synthesizer",
];

function rel(filePath) {
  return path.relative(root, filePath).split(path.sep).join("/");
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function frontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  return match ? match[1] : "";
}

function extractScalar(fm, key) {
  const re = new RegExp(`^${key}:\\s*['"]?([^'"\\n]+?)['"]?\\s*$`, "m");
  return fm.match(re)?.[1]?.trim() ?? null;
}

function extractList(fm, key) {
  const lines = fm.split(/\r?\n/);
  const out = [];
  let inList = false;

  for (const line of lines) {
    if (line.trim() === `${key}:`) {
      inList = true;
      continue;
    }

    if (!inList) continue;
    if (line.trim() === "") continue;
    if (!line.startsWith(" ")) break;

    const match = line.match(/^\s*-\s*['"]?(.+?)['"]?\s*$/);
    if (match) out.push(match[1]);
  }

  return out;
}

function resolveInclude(baseFile, includeRef) {
  if (/^https?:\/\//.test(includeRef)) return null;
  const baseDir = path.dirname(baseFile);
  return path.normalize(path.join(baseDir, includeRef));
}

const visited = new Set();
const packageFiles = new Set();
const packageAgentSlugs = new Set();
const packageTaskPaths = new Set();

function walkPackage(filePath) {
  const absolute = path.resolve(filePath);
  const key = rel(absolute);
  if (visited.has(key)) return;
  visited.add(key);
  packageFiles.add(key);

  if (!fs.existsSync(absolute)) {
    errors.push(`Included file does not exist: ${key}`);
    return;
  }

  const text = read(absolute);
  const fm = frontmatter(text);

  if (key.endsWith("/AGENTS.md") || key === "AGENTS.md") {
    const slug = extractScalar(fm, "slug") ?? path.basename(path.dirname(absolute));
    packageAgentSlugs.add(slug);
  }

  if (key.endsWith("/TASK.md") || key === "TASK.md") {
    packageTaskPaths.add(key);
  }

  for (const includeRef of extractList(fm, "includes")) {
    const child = resolveInclude(absolute, includeRef);
    if (child) walkPackage(child);
  }
}

walkPackage(path.join(root, "COMPANY.md"));

function parsePaperclipYaml() {
  const filePath = path.join(root, ".paperclip.yaml");
  const lines = read(filePath).split(/\r?\n/);
  const agents = new Map();
  let inCompany = false;
  let inAgents = false;
  let currentAgent = null;
  let companyBudget = null;

  for (const line of lines) {
    if (/^\S/.test(line)) {
      inCompany = line.trim() === "company:";
      inAgents = line.trim() === "agents:";
      currentAgent = null;
      continue;
    }

    if (inCompany) {
      const budget = line.match(/^\s{2}budgetMonthlyCents:\s*(\d+)\s*$/);
      if (budget) companyBudget = Number(budget[1]);
      continue;
    }

    if (inAgents) {
      const agent = line.match(/^\s{2}([a-z0-9-]+):\s*$/);
      if (agent) {
        currentAgent = agent[1];
        agents.set(currentAgent, { budgetMonthlyCents: 0 });
        continue;
      }

      const budget = line.match(/^\s{4}budgetMonthlyCents:\s*(\d+)\s*$/);
      if (budget && currentAgent) {
        agents.get(currentAgent).budgetMonthlyCents = Number(budget[1]);
      }
    }
  }

  return { agents, companyBudget };
}

const runtime = parsePaperclipYaml();
const runtimeAgents = new Set(runtime.agents.keys());

function diffSets(left, right) {
  return [...left].filter((item) => !right.has(item)).sort();
}

const inPackageNotRuntime = diffSets(packageAgentSlugs, runtimeAgents);
const inRuntimeNotPackage = diffSets(runtimeAgents, packageAgentSlugs);

if (inPackageNotRuntime.length) {
  errors.push(`Agents in COMPANY graph but missing .paperclip.yaml: ${inPackageNotRuntime.join(", ")}`);
}

if (inRuntimeNotPackage.length) {
  errors.push(`Agents in .paperclip.yaml but missing COMPANY graph: ${inRuntimeNotPackage.join(", ")}`);
}

const unexpectedPackageAgents = diffSets(packageAgentSlugs, expectedDay1Agents);
const missingDay1Agents = diffSets(expectedDay1Agents, packageAgentSlugs);

if (unexpectedPackageAgents.length) {
  errors.push(`Root import has non-day-1 agents: ${unexpectedPackageAgents.join(", ")}`);
}

if (missingDay1Agents.length) {
  errors.push(`Root import is missing day-1 agents: ${missingDay1Agents.join(", ")}`);
}

for (const slug of forbiddenRootAgents) {
  if (packageAgentSlugs.has(slug) || runtimeAgents.has(slug)) {
    errors.push(`Post-Gate-A Product Bet agent must not be in root import: ${slug}`);
  }
}

const unexpectedRootTasks = diffSets(packageTaskPaths, expectedRootTasks);
const missingRootTasks = diffSets(expectedRootTasks, packageTaskPaths);

if (unexpectedRootTasks.length) {
  errors.push(`Root import has non-bootstrap tasks: ${unexpectedRootTasks.join(", ")}`);
}

if (missingRootTasks.length) {
  errors.push(`Root import is missing bootstrap tasks: ${missingRootTasks.join(", ")}`);
}

if (!fs.existsSync(path.join(root, ignitionTask))) {
  errors.push(`Missing post-bootstrap ignition task template: ${ignitionTask}`);
}

if (packageTaskPaths.has(ignitionTask)) {
  errors.push(`Ignition task must not be imported as immediate day-1 backlog: ${ignitionTask}`);
}

const budgetSum = [...runtime.agents.values()].reduce(
  (sum, agent) => sum + agent.budgetMonthlyCents,
  0,
);

if (runtime.companyBudget == null) {
  errors.push(".paperclip.yaml missing company.budgetMonthlyCents");
} else if (budgetSum > runtime.companyBudget) {
  errors.push(
    `.paperclip.yaml agent budgets exceed company cap: ${budgetSum} > ${runtime.companyBudget}`,
  );
}

for (const item of mustNotExist) {
  if (fs.existsSync(path.join(root, item))) {
    errors.push(`Forbidden stale path exists: ${item}`);
  }
}

for (const skillDir of fs.readdirSync(path.join(root, "skills")).sort()) {
  const tmpl = path.join(root, "skills", skillDir, "SKILL.md.tmpl");
  if (fs.existsSync(tmpl)) errors.push(`Stale skill template exists: ${rel(tmpl)}`);
}

for (const file of ["README.md", "MODULES.md"]) {
  const text = read(path.join(root, file));
  if (localAbsolutePathPattern.test(text)) {
    errors.push(`${file} contains a local absolute path`);
  }
  if (text.includes("paperclip.manifest.json")) {
    errors.push(`${file} references deleted paperclip.manifest.json`);
  }
}

for (const file of packageFiles) {
  const text = read(path.join(root, file));
  if (localAbsolutePathPattern.test(text)) {
    errors.push(`Package graph file contains a local absolute path: ${file}`);
  }
}

function walkFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolute = path.join(dir, entry.name);
    const relative = rel(absolute);
    if (relative.startsWith(".git/")) continue;
    if (entry.isDirectory()) {
      out.push(...walkFiles(absolute));
    } else {
      out.push(absolute);
    }
  }
  return out;
}

for (const filePath of walkFiles(root)) {
  const relative = rel(filePath);
  if (relative === "scripts/check-package-drift.mjs") continue;
  if (relative.startsWith("docs/archive/")) continue;
  if (!/\.(md|yaml|yml|json|mjs)$/.test(relative)) continue;

  if (relative.includes("product-bet-pilot") || relative.includes("run-product-bet-pilot")) {
    errors.push(`Active path still uses old Product Bet Pilot naming: ${relative}`);
  }

  const text = read(filePath);
  if (localAbsolutePathPattern.test(text)) {
    errors.push(`Active file contains a local absolute path: ${relative}`);
  }
  if (text.includes("product-bet-pilot-playbook.md") || text.includes("run-product-bet-pilot")) {
    errors.push(`Active file references old Product Bet Pilot path: ${relative}`);
  }
}

for (const filePath of walkFiles(path.join(root, "agents"))) {
  if (!filePath.endsWith("AGENTS.md")) continue;
  const text = read(filePath);
  const fm = frontmatter(text);
  const docs = extractList(fm, "docs");
  for (const doc of docs) {
    const docPath = path.join(path.dirname(filePath), doc);
    if (!fs.existsSync(docPath)) {
      errors.push(`${rel(filePath)} references missing companion doc: ${doc}`);
    }
  }
}

if (errors.length) {
  console.error("Package drift check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Package drift check passed.");
