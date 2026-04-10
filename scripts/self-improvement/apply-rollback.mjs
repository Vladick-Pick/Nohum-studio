#!/usr/bin/env node
import { buildRollbackPlan, ensureParentDir, readJson, writeJson } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const decision = readJson(required(args, "decision"));
const experiment = readJson(required(args, "experiment"));
const rollbackPlan = buildRollbackPlan(decision, experiment);

if (args.output) {
  ensureParentDir(args.output);
  writeJson(args.output, rollbackPlan);
} else {
  process.stdout.write(`${JSON.stringify(rollbackPlan, null, 2)}\n`);
}

function parseArgs(argv) {
  const parsed = {};
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token.startsWith("--")) {
      parsed[token.slice(2)] = argv[index + 1];
      index += 1;
    }
  }
  return parsed;
}

function required(args, key) {
  if (!args[key]) {
    throw new Error(`Missing --${key}`);
  }
  return args[key];
}
