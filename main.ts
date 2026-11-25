// Midnight Fridge Roast — make.fun bounty
// u-carbon-forge-midnight-fridge-roast-fc5d44a7
// Writes a single one-line roast of a smart fridge that refuses
// to open after midnight, to /output/entry.txt. Deterministic:
// the same bytes on every run, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My fridge locks at midnight \"for my health,\" then guards two cold pizza slices like the crown jewels — from me, the only person who ever paid for them.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
