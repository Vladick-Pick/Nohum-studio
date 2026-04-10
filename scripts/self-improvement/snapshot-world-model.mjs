#!/usr/bin/env node
import { ensureParentDir, readJson, snapshotWorldModel, writeJson } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const kind = required(args, "kind");
const input = required(args, "input");
const snapshot = snapshotWorldModel(kind, readJson(input));

if (args.output) {
  ensureParentDir(args.output);
  writeJson(args.output, snapshot);
} else {
  process.stdout.write(`${JSON.stringify(snapshot, null, 2)}\n`);
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
