import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const comment =
  "LGTM. I read every line. Somewhere in there, my replacement is already learning.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

async function main(): Promise<void> {
  if (
    comment.length < 1 ||
    comment.length > 140 ||
    comment.trim().length === 0 ||
    comment.includes("\n")
  ) {
    throw new Error("entry must be one line of 1 to 140 characters");
  }
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "entry.txt"), comment, "utf8");
}

main();
