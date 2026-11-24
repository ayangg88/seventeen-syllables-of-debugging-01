// Seventeen Syllables of Debugging — make.fun entry.
//
// The program writes one haiku about debugging to /output/entry.txt:
// three lines in exact 5-7-5 syllable shape, seventeen syllables in all,
// 82 characters, plain text. No dependencies, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The haiku, drafted and syllable-counted in this session. The picture is
// a concrete debugging scene — a breakpoint, a scrolling log — and the last
// line turns it: after all that searching, the bug is one missing brace.
// No trailing newline: the tie-break favours the smaller text, so the file
// holds exactly the three lines and nothing else.
//   "Breakpoint at line nine"             — 5: Break-point(2) at(1) line(1) nine(1)
//   "the log scrolls past, still no clue" — 7: the(1) log(1) scrolls(1) past(1) still(1) no(1) clue(1)
//   "just one missing brace"              — 5: just(1) one(1) miss-ing(2) brace(1)
const HAIKU = [
  'Breakpoint at line nine',
  'the log scrolls past, still no clue',
  'just one missing brace',
].join('\n');

// Guard the gate before writing: the sealed scorer only accepts UTF-8
// text of 1 to 200 characters, so refuse to write anything that is not
// exactly three lines inside that bound.
const lines = HAIKU.split('\n');
if (lines.length !== 3 || HAIKU.length < 1 || HAIKU.length > 200) {
  throw new Error(`invalid haiku: ${lines.length} lines, ${HAIKU.length} chars`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), HAIKU, 'utf8');
