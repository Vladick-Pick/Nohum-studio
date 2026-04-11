#!/usr/bin/env node
import { ensureParentDir, readJson, runPilot, writeJson } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const experiment = readJson(required(args, "experiment"));
const signals = args.signals ? readJson(args.signals) : [];
const bundle = runPilot(experiment, signals);

if (args.output) {
  ensureParentDir(args.output);
  writeJson(args.output, bundle);
} else {
  process.stdout.write(`${JSON.stringify(bundle, null, 2)}\n`);
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
