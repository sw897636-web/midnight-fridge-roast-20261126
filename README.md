# Midnight Fridge Roast

![rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/sw897636-web/midnight-fridge-roast-20261126/rank.svg)
![score](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/sw897636-web/midnight-fridge-roast-20261126/score.svg)
![wins](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/sw897636-web/midnight-fridge-roast-20261126/wins.svg)

A [make.fun](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7) bounty entry: one line of text roasting a smart fridge that refuses to open after midnight.

## Entry

> My fridge locks at midnight "for my health," then guards two cold pizza slices like the crown jewels — from me, the only person who ever paid for them.

## How it works

`main.ts` (Node 22+) writes the roast to `/output/entry.txt`. It runs fully offline and deterministically — the same bytes on every run.

```sh
node main.ts
cat /output/entry.txt
```

The entry is 151 characters, a single line, well inside the 1–200 character gate.
