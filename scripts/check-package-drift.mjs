import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

const expectedActiveRuntimeAgents = new Set([
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

const expectedRootTasks = new Set([
  "tasks/bootstrap-company-access-and-secrets/TASK.md",
  "tasks/bootstrap-company/TASK.md",
]);

const ignitionTask = "docs/templates/tasks/start-first-research-cycle.md";
const localAbsolutePathPattern = new RegExp("/" + "Users/");

const mustNotExist = [
  "paperclip.manifest.json",
  "scripts/generate-detailed-org.mjs",
  "templates",
  "docs/parked",
  "agents/market-proof-analyst",
  "agents/market-signal-scout",
  "agents/research-synthesizer",
  "agents/rat-designer",
  "packages/product-bet-definition",
  "scripts/check-product-bet-package.mjs",
  "tasks/run-automated-product-bet-cycle/TASK.md",
  "tasks/run-product-bet-definition-sprint/TASK.md",
  "tasks/compile-product-bet-batch/TASK.md",
  "tasks/create-rat-plan-batch/TASK.md",
  "tasks/run-safe-rat-batch/TASK.md",
  "tasks/write-evidence-events/TASK.md",
  "tasks/route-product-bet-decisions/TASK.md",
  "tasks/run-pre-market-autoreason-batch/TASK.md",
  "tasks/write-product-bet-learning-report/TASK.md",
  "docs/templates/product-bets/decision-update.md",
  "docs/templates/product-bets/task-templates/compile-product-bet-definition.md",
  "docs/templates/product-bets/task-templates/run-product-bet-autoreason.md",
  "docs/templates/product-bets/task-templates/write-product-bet-evidence-events.md",
  "docs/templates/product-bets/task-templates/route-product-bet-gate-b-recommendation.md",
  "docs/templates/product-bets/task-templates/write-product-bet-learning-report.md",
  "docs/templates/product-bets/rat-plan.md",
  "docs/templates/product-bets/assumption-map.md",
  "docs/templates/product-bets/evidence-event.md",
  "docs/product-bets/rat-execution-boundaries.md",
];

const requiredProductBetValidationPaths = [
  "skills/product-bet-validation-loop/SKILL.md",
  "skills/validation-surface-factory/SKILL.md",
  "skills/landing-cro-review/SKILL.md",
  "skills/anti-ai-slop-copy-review/SKILL.md",
  "skills/organic-distribution-testing/SKILL.md",
  "skills/community-prospecting/SKILL.md",
  "skills/engineering-as-marketing-wedge/SKILL.md",
  "skills/observation-window-evaluation/SKILL.md",
  "docs/templates/product-bets/landing-design.md",
  "docs/templates/product-bets/copy-variant-matrix.md",
  "docs/templates/product-bets/waitlist-form-spec.md",
  "docs/templates/product-bets/surface-version.md",
  "docs/templates/product-bets/surface-qa.md",
  "docs/templates/product-bets/anti-ai-slop-review.md",
  "docs/templates/product-bets/pain-language-map.md",
  "docs/templates/product-bets/search-intent-map.md",
  "docs/templates/product-bets/community-prospecting-map.md",
  "docs/templates/product-bets/thread-scorecard.md",
  "docs/templates/product-bets/free-value-wedge.md",
  "docs/templates/product-bets/organic-distribution-test-plan.md",
  "docs/templates/product-bets/traffic-attempt.md",
  "docs/templates/product-bets/traffic-source-report.md",
  "docs/templates/product-bets/observation-window.md",
  "docs/templates/product-bets/validation-cycle-report.md",
  "docs/templates/product-bets/validation-risk-map.md",
  "docs/templates/product-bets/validation-evidence-event.md",
  "docs/templates/product-bets/task-templates/run-product-bet-validation-sprint.md",
  "docs/templates/product-bets/task-templates/run-ai-hardening-loop.md",
  "docs/templates/product-bets/task-templates/compile-initial-product-bet-card.md",
  "docs/templates/product-bets/task-templates/run-autoreason-council.md",
  "docs/templates/product-bets/task-templates/build-validation-surface.md",
  "docs/templates/product-bets/task-templates/run-organic-distribution-test.md",
  "docs/templates/product-bets/task-templates/write-validation-evidence-events.md",
  "docs/templates/product-bets/task-templates/monitor-observation-window.md",
  "docs/templates/product-bets/task-templates/route-validation-result.md",
  "docs/templates/product-bets/task-templates/write-gate-b-recommendation.md",
  "docs/templates/product-bets/task-templates/write-validation-learning-report.md",
];

const requiredProductBetCardTokens = [
  "selected_test_revision",
  "landing_design_ref",
  "waitlist_form_spec_ref",
  "organic_distribution_test_plan_ref",
  "traffic_attempt_refs",
  "traffic_source_report_ref",
  "observation_window",
  "behavior_signals",
  "validation_decision",
  "revise_offer",
  "revise_landing",
  "revise_channel",
  "open_fork",
];

const requiredTaskTemplates = [
  "docs/templates/tasks/start-first-research-cycle.md",
  "docs/templates/tasks/run-market-signal-batch.md",
  "docs/templates/tasks/run-market-proof-lite-batch.md",
  "docs/templates/tasks/research-pre-intake-duplicate-check.md",
  "docs/templates/tasks/research-history-sync.md",
  "docs/templates/tasks/weekly-research-history-audit.md",
  "docs/templates/tasks/promote-queued-venture.md",
  "docs/templates/tasks/substrate-readiness-review.md",
  "docs/templates/tasks/daily-ceo-operating-review.md",
  "docs/templates/tasks/daily-chief-of-staff-blocked-work-review.md",
  "docs/templates/tasks/daily-research-lead-queue-refresh.md",
  "docs/templates/tasks/daily-launch-lead-readiness-review.md",
  "docs/templates/tasks/daily-vp-engineering-substrate-review.md",
  "docs/templates/tasks/daily-support-lead-signal-review.md",
  "docs/templates/tasks/daily-agent-mechanic-runtime-audit.md",
  "docs/templates/tasks/weekly-board-review.md",
  "docs/templates/tasks/portfolio-health-review.md",
  "docs/templates/tasks/weekly-factory-health-review.md",
  "docs/templates/tasks/weekly-org-hygiene-review.md",
  "docs/templates/tasks/weekly-self-improvement-review.md",
  "docs/templates/tasks/weekly-self-improvement-failed-experiment-audit.md",
  "docs/templates/tasks/weekly-skill-instruction-drift-review.md",
  "docs/templates/tasks/delegation-contract-audit.md",
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

const inRuntimeNotPackage = diffSets(runtimeAgents, packageAgentSlugs);

if (inRuntimeNotPackage.length) {
  errors.push(`Agents in .paperclip.yaml but missing COMPANY graph: ${inRuntimeNotPackage.join(", ")}`);
}

const allAgentSlugs = new Set(
  fs
    .readdirSync(path.join(root, "agents"))
    .filter((slug) => fs.existsSync(path.join(root, "agents", slug, "AGENTS.md")))
    .sort(),
);

const missingImportedAgents = diffSets(allAgentSlugs, packageAgentSlugs);
const unexpectedImportedAgents = diffSets(packageAgentSlugs, allAgentSlugs);

if (missingImportedAgents.length) {
  errors.push(`Root import is missing company agents: ${missingImportedAgents.join(", ")}`);
}

if (unexpectedImportedAgents.length) {
  errors.push(`Root import has unknown agents: ${unexpectedImportedAgents.join(", ")}`);
}

const unexpectedRuntimeAgents = diffSets(runtimeAgents, expectedActiveRuntimeAgents);
const missingActiveRuntimeAgents = diffSets(expectedActiveRuntimeAgents, runtimeAgents);

if (unexpectedRuntimeAgents.length) {
  errors.push(`.paperclip.yaml has non-day-1 active runtime agents: ${unexpectedRuntimeAgents.join(", ")}`);
}

if (missingActiveRuntimeAgents.length) {
  errors.push(`.paperclip.yaml is missing day-1 active runtime agents: ${missingActiveRuntimeAgents.join(", ")}`);
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

const activeTaskFiles = fs
  .readdirSync(path.join(root, "tasks"))
  .flatMap((slug) => {
    const taskPath = path.join(root, "tasks", slug, "TASK.md");
    return fs.existsSync(taskPath) ? [rel(taskPath)] : [];
  })
  .sort();

for (const taskPath of activeTaskFiles) {
  if (!expectedRootTasks.has(taskPath)) {
    errors.push(`Root tasks directory contains non-bootstrap active task: ${taskPath}`);
  }
}

for (const templatePath of requiredTaskTemplates) {
  const absolute = path.join(root, templatePath);
  if (!fs.existsSync(absolute)) {
    errors.push(`Missing manager-created task template: ${templatePath}`);
  } else if (!packageFiles.has(templatePath)) {
    errors.push(`Manager-created task template is not in COMPANY graph: ${templatePath}`);
  } else {
    const kind = extractScalar(frontmatter(read(absolute)), "kind");
    if (kind !== "task_template") {
      errors.push(`Manager-created task template must use kind: task_template: ${templatePath}`);
    }
  }
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

for (const item of requiredProductBetValidationPaths) {
  if (!fs.existsSync(path.join(root, item))) {
    errors.push(`Missing Product Bet validation path: ${item}`);
  } else if (!packageFiles.has(item)) {
    errors.push(`Product Bet validation path is not in COMPANY graph: ${item}`);
  }
}

const productBetCardPath = path.join(root, "docs/templates/product-bets/product-bet-card.md");
const productBetCard = read(productBetCardPath);
for (const token of requiredProductBetCardTokens) {
  if (!productBetCard.includes(token)) {
    errors.push(`Product Bet Card missing validation token: ${token}`);
  }
}

const gateBRecommendation = read(path.join(root, "docs/templates/product-bets/gate-b-recommendation.md"));
for (const token of ["observation_window_complete", "organic_traffic_attempts_complete", "waitlist_or_signup_intent_measured"]) {
  if (!gateBRecommendation.includes(token)) {
    errors.push(`Gate B recommendation missing validation criterion: ${token}`);
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
