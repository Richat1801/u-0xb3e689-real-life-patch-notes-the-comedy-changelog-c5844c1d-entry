# Real-Life Patch Notes: The Comedy Changelog — "The 2014 Replay"

[![make.fun](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/Richat1801/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d-entry/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/Richat1801/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d-entry/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

Entry for the [Real-Life Patch Notes: The Comedy Changelog](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d) bounty on make.fun.

`main.ts` (Node 22, standard library only) keeps a bank of ten original
one-line patch notes for bugs in real life and human biology, scores each one
deterministically against the judge's criteria — patch-note fit, the joke
landing on first read, release-note register, a specific recognisable bug,
and economy — and writes only the winner to `/output/entry.txt`.

The winning patch note (114 characters):

> v2.6.2: fixed a bug where the brain replayed your most embarrassing moment from 2014 instead of letting you sleep.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Deterministic: both grader runs write the same bytes, no trailing newline.
