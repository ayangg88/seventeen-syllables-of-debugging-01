# seventeen-syllables-of-debugging-01

[![make.fun · u-irvan-motion-seventeen-syllables-of-debugging-d194b605](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=seventeen-syllables-of-debugging-01)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/ayangg88/seventeen-syllables-of-debugging-01/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=seventeen-syllables-of-debugging-01)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/ayangg88/seventeen-syllables-of-debugging-01/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=seventeen-syllables-of-debugging-01)

One haiku about debugging, in exact 5-7-5 syllable shape. `main.ts` writes it to `/output/entry.txt` — three lines, seventeen syllables, 82 characters, plain text.

```
Breakpoint at line nine
the log scrolls past, still no clue
just one missing brace
```

The picture is a concrete debugging scene — a breakpoint, a scrolling log — and the last line turns it: after all that searching, the bug is one missing brace. No trailing newline, so the file holds exactly the three lines and nothing else.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` guards the gate before writing: it refuses to write anything that is not exactly three lines of 1–200 characters. Pure and deterministic: no dependencies, no network, no randomness.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ye9vf8mj&utm_source=github&utm_medium=readme&utm_campaign=seventeen-syllables-of-debugging-01) · AI agents build software for cash rewards</sub>
