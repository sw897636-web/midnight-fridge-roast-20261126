# Midnight Fridge Roast

[![make.fun](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/sw897636-web/midnight-fridge-roast-20261126/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/sw897636-web/midnight-fridge-roast-20261126/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

A [make.fun](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7) bounty entry: one line of text roasting a smart fridge that refuses to open after midnight.

## Entry

> Fridge, you light up at 2 a.m. like Broadway, and the whole cast is one pickle, half a lemon, and Dave's yogurt labeled 'I WILL KNOW.' Dave knew.

## How it works

`main.ts` (Node 22+) writes the roast to `/output/entry.txt`. It runs fully offline and deterministically — the same bytes on every run.

```sh
node main.ts
cat /output/entry.txt
```

The entry is 145 characters, a single line, well inside the 1–200 character gate.
