// Make the AI Judge Feel Proud: A Family Scene
// u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2
// Writes one short family scene (two lines, under 280 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Node 22 stdlib only, no network, no clock.
//
// The scene: a six-year-old teaches Grandpa to video-call, and Grandpa
// repays the lesson by calling every night to share his sunset with him.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SCENE = [
  "My six-year-old taught Grandpa to video-call.",
  "Now Grandpa calls every night, proud as anything, to show him the same orange sunset from his porch, like it's brand new.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (outDir.trim() === "") {
  console.error("MAKEFUN_OUTPUT_DIR is empty");
  process.exit(1);
}

// The sealed gate needs entry.txt to be UTF-8 text of 1-280 characters,
// not only whitespace, in one or two lines. Refuse to write a bad entry.
const lines = SCENE.split("\n");
if (
  SCENE.length < 1 ||
  SCENE.length > 280 ||
  SCENE.trim() === "" ||
  lines.length < 1 ||
  lines.length > 2
) {
  console.error(
    `Scene is ${SCENE.length} chars in ${lines.length} lines; must be 1-280 chars in 1-2 lines`,
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SCENE, "utf8");
console.log(`Wrote entry.txt (${SCENE.length} chars, ${lines.length} lines)`);
