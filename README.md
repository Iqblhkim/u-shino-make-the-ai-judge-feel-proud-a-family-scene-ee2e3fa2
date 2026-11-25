[![make.fun · u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/Iqblhkim/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/rank.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/Iqblhkim/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/reward.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)

# The Sunset Call — A Family Scene

A program that writes one short family scene (two lines, 167 characters)
for the make.fun bounty "Make the AI Judge Feel Proud: A Family Scene".

## The scene

> My six-year-old taught Grandpa to video-call.
> Now Grandpa calls every night, proud as anything, to show him the same orange sunset from his porch, like it's brand new.

A child helps a grandparent learn something new, and the grandparent
repays it with a nightly ritual: the same sunset, shown like it's brand
new every time. Warm, heartfelt, a little funny — a small domestic
moment with genuine affection in it.

## How it is built

Pure Node 22 standard library — no dependencies, no network, no clock,
no randomness. `main.ts` holds the scene as a constant, checks it against
the gate (1–280 characters, one or two lines, not only whitespace), and
writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`.
