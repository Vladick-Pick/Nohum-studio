#!/usr/bin/env node
import fs from "node:fs";
import { ensureParentDir, readJson, registerExperiment, writeJson } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const record = readJson(required(args, "record"));
const registryPath = required(args, "registry");
const registry = fs.existsSync(registryPath) ? readJson(registryPath) : [];
const nextRegistry = registerExperiment(registry, record);

ensureParentDir(registryPath);
writeJson(registryPath, nextRegistry);

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
