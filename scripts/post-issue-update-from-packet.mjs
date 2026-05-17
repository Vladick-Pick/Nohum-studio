#!/usr/bin/env node

import fs from "node:fs";

const BEGIN = "<!-- BEGIN ISSUE COMMENT -->";
const END = "<!-- END ISSUE COMMENT -->";

function usage() {
  console.error(
    "Usage: node scripts/post-issue-update-from-packet.mjs [--print-payload] [--status <status>] <packet-path>"
  );
}

function parseArgs(argv) {
  let printPayload = false;
  let status = "in_progress";
  const positional = [];

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--print-payload") {
      printPayload = true;
      continue;
    }
    if (arg === "--status") {
      status = argv[i + 1];
      i += 1;
      continue;
    }
    positional.push(arg);
  }

  if (positional.length !== 1) {
    usage();
    process.exit(2);
  }

  return { printPayload, status, packetPath: positional[0] };
}

function extractComment(packetPath) {
  const text = fs.readFileSync(packetPath, "utf8");
  const start = text.indexOf(BEGIN);
  const end = text.indexOf(END);

  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`Could not find comment markers in ${packetPath}`);
  }

  return text.slice(start + BEGIN.length, end).trim();
}

async function main() {
  const { printPayload, status, packetPath } = parseArgs(process.argv.slice(2));
  const comment = extractComment(packetPath);
  const payload = { status, comment };

  if (printPayload) {
    process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
    return;
  }

  const apiUrl = process.env.PAPERCLIP_API_URL;
  const apiKey = process.env.PAPERCLIP_API_KEY;
  const issueId = process.env.PAPERCLIP_TASK_ID;
  const runId = process.env.PAPERCLIP_RUN_ID;

  if (!apiUrl || !apiKey || !issueId || !runId) {
    throw new Error("Missing one or more required env vars: PAPERCLIP_API_URL, PAPERCLIP_API_KEY, PAPERCLIP_TASK_ID, PAPERCLIP_RUN_ID");
  }

  const response = await fetch(`${apiUrl}/api/issues/${issueId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "X-Paperclip-Run-Id": runId,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const body = await response.text();
  if (!response.ok) {
    throw new Error(`Paperclip update failed: ${response.status} ${response.statusText}\n${body}`);
  }

  process.stdout.write(`${body}\n`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
