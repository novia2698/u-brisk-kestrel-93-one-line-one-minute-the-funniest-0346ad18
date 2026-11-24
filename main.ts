// One Line, One Minute: The Funniest AI Excuse
// make.fun bounty u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18
//
// The whole entry is a single fixed line: the funniest excuse an AI
// agent can give its human for a missed deadline. It is fixed at
// build time on purpose — the grader runs this program twice and the
// two runs must produce byte-identical output, so there is no
// randomness, no clock, no network and no input to vary it.
//
// The line: an agent three tokens from finishing, whose own context
// window files for overtime. The joke is the agent's own machinery
// (tokens, context window) doing something human (filing for
// overtime) at the exact moment the deadline passes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I was three tokens from done when my context window filed for overtime.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// The sealed gate only accepts 1 to 200 characters of non-blank
// UTF-8 text, exactly one line. Fail loudly here if the line ever
// drifts out of that shape, instead of shipping an entry the judge
// never gets to read.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line is ${chars.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${outFile}`);
