// Real-Life Patch Notes: The Comedy Changelog (Node 22, standard library only).
//
// The program writes a single one-line patch note to /output/entry.txt: at
// most 160 characters, in the terse register of a real release note, for a
// bug in real life or human biology. The judge weighs, in order: whether it
// is a patch note about a real-life or human-biology bug, whether the joke
// lands on first read on a real comedic idea, whether it reads like an actual
// release note (version number, dry engineering register, fix stated as if
// shipped), whether it names a specific recognisable bug that makes the
// reader wince and laugh at once, and whether every word earns its place.
//
// So the program keeps a small bank of original candidates, scores each one
// deterministically on those five axes, and writes only the winner. No clock,
// no randomness, no network: both grader runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

type Candidate = {
  text: string;
  patch: number; // is a patch note about a real-life / human-biology bug
  funny: number; // the joke lands on first read on a real idea
  register: number; // reads like a real release note: version + dry fix
  specific: number; // names a specific recognisable bug, wince + laugh
  economy: number; // every word working, no padding, punchline needs no setup
};

// Every line below is original, written for this competition.
const BANK: Candidate[] = [
  {
    text: 'v2.6.2: fixed a bug where the brain replayed your most embarrassing moment from 2014 instead of letting you sleep.',
    patch: 5,
    funny: 5,
    register: 5,
    specific: 5,
    economy: 4,
  },
  {
    text: 'v1.8.4: fixed a bug where the bladder sent its low-battery warning only after the meeting had started.',
    patch: 5,
    funny: 5,
    register: 5,
    specific: 5,
    economy: 4,
  },
  {
    text: 'v2.0.7: fixed a bug where sneezing closed both eyes for 0.4 seconds while driving.',
    patch: 5,
    funny: 4,
    register: 5,
    specific: 5,
    economy: 5,
  },
  {
    text: 'v3.2.1: fixed a bug where yawning in a meeting triggered a chain reaction across the entire room.',
    patch: 5,
    funny: 4,
    register: 5,
    specific: 4,
    economy: 4,
  },
  {
    text: 'v1.3.9: fixed a bug where stepping on a Lego at 3 a.m. bypassed all pain filters.',
    patch: 5,
    funny: 4,
    register: 5,
    specific: 5,
    economy: 5,
  },
  {
    text: 'v4.1.0: fixed a bug where the stomach growled loudest during the silent part of the exam.',
    patch: 5,
    funny: 4,
    register: 5,
    specific: 4,
    economy: 4,
  },
  {
    text: 'v3.0.5: fixed a bug where the left leg fell asleep on a flight and woke up angry.',
    patch: 5,
    funny: 4,
    register: 5,
    specific: 4,
    economy: 5,
  },
  {
    text: 'v1.9.3: fixed a bug where hiccups ignored the mute button during job interviews.',
    patch: 5,
    funny: 4,
    register: 5,
    specific: 4,
    economy: 4,
  },
  {
    text: 'v5.0.2: fixed a bug where the body requested a snack 20 minutes after a full meal.',
    patch: 5,
    funny: 3,
    register: 5,
    specific: 4,
    economy: 4,
  },
  {
    text: 'v2.1.8: fixed a bug where the nose ran in winter while the legs refused to move at all.',
    patch: 5,
    funny: 3,
    register: 5,
    specific: 3,
    economy: 4,
  },
];

function score(c: Candidate): number {
  // Weights follow the judge's order: patch-note fit first, then the joke,
  // then the release-note register, then specificity, then economy.
  return c.patch * 3 + c.funny * 3 + c.register * 2 + c.specific * 2 + c.economy;
}

function pick(): Candidate {
  let best = BANK[0];
  for (const c of BANK.slice(1)) {
    if (score(c) > score(best)) best = c;
  }
  return best;
}

const winner = pick();

// Gate the whole bank, not just the winner: no candidate may exceed the
// 160-character cap, so a future re-score can never ship an invalid line.
for (const c of BANK) {
  if ([...c.text].length > 160 || c.text.includes('\n')) {
    throw new Error('bank candidate fails the 160-character one-line gate');
  }
}

// Gate: the entry must be 1-160 characters, one line, no trailing newline.
if ([...winner.text].length > 160 || winner.text.includes('\n')) {
  throw new Error('winning line fails the 160-character one-line gate');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), winner.text, 'utf8');
