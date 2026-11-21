// The joke about the demo — writes one one-line joke about working beside
// AI coding agents to $MAKEFUN_OUTPUT_DIR/entry.txt (or ./out/entry.txt
// when run locally without that variable set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  // One line, 118 Unicode code points — inside the 1–280 limit, no trailing
  // newline so the file is exactly the joke.
  "I asked my AI agent why the demo crashed live; it said, 'It worked on my machine' — then admitted it doesn't have one.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
