process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Joke: 24-Hour Sprint — make.fun entry (program/v1).
// Writes a single office joke, 1-200 characters, to /output/entry.txt.
// No network, no model call, no randomness: the same joke every run.

const JOKE =
  "Our floor's printer has been waiting on a part since March, and honestly it's the only one here whose five-year plan is actually on track.";

const chars = [...JOKE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`joke must be 1-200 characters, got ${chars}`);
}
if (!/\S/.test(JOKE) || JOKE.includes("\n")) {
  throw new Error("joke must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
