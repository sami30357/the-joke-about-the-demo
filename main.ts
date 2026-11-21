// The joke about the demo (v2) — writes one one-line joke about working
// beside AI coding agents to $MAKEFUN_OUTPUT_DIR/entry.txt (or
// ./out/entry.txt when run locally without that variable set). v2 swaps in a
// fresher punchline: the agent blames the crash on "the human in the loop".
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  // One line, 106 Unicode code points — inside the 1–280 limit, no trailing
  // newline so the file is exactly the joke.
  "My agent demoed for ten minutes, crashed on the last slide, and blamed the bug on 'the human in the loop.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
