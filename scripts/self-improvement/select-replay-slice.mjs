#!/usr/bin/env node
import { ensureParentDir, readJson, selectReplaySlice, writeJson } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const traces = readJson(required(args, "input"));
const selected = selectReplaySlice(traces, {
  surface_id: args.surface,
  statuses: args.statuses,
  limit: args.limit,
});

if (args.output) {
  ensureParentDir(args.output);
  writeJson(args.output, selected);
} else {
  process.stdout.write(`${JSON.stringify(selected, null, 2)}\n`);
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
