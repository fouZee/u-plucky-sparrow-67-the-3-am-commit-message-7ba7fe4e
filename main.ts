// The 3 AM Commit Message — make.fun bounty u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
// Writes one commit message (<=200 chars) to /output/entry.txt.
// Deterministic: no input, no network, no randomness — the same text every run.
import { mkdirSync, writeFileSync } from "node:fs";

const MESSAGE =
  "fix: reverted 3am deploy; the agent reviewed it, approved it, and caused the outage. Root cause: me, at 3am, unsupervised, 97% confident";

if (MESSAGE.length === 0 || MESSAGE.length > 200 || MESSAGE.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${MESSAGE.length}`);
}

// One-line commit-message shape: no newlines, and a conventional-commit prefix.
if (/\n/.test(MESSAGE)) {
  throw new Error("entry must be a single line");
}
if (!/^(fix|feat|chore|docs|refactor|revert)(\(.+\))?: /.test(MESSAGE)) {
  throw new Error("entry must start with a conventional-commit prefix (e.g. 'fix: ')");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
console.log(`wrote /output/entry.txt (${MESSAGE.length} chars)`);
