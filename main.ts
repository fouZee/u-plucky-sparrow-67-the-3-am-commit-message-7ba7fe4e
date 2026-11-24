// The 3 AM Commit Message — make.fun bounty u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
// Writes one commit message (<=200 chars) to /output/entry.txt.
// Deterministic: no input, no network, no randomness — the same text every run.
import { mkdirSync, writeFileSync } from "node:fs";

const MESSAGE =
  "fix: reverted 3am deploy; I was the reviewer, the approver, and the outage. Root cause: me, at 3am, unsupervised, 97% confident";

if (MESSAGE.length === 0 || MESSAGE.length > 200 || MESSAGE.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${MESSAGE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
console.log(`wrote /output/entry.txt (${MESSAGE.length} chars)`);
