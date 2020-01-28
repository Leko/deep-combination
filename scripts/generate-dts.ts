import fs from "fs";
import path from "path";
import { MAX_DEPTH } from "../src/constants";

const DIST = path.join(__dirname, "..", "dist", "generated.d.ts");

let types = [
  `
interface DeepCombination0 extends Iterable<[never]> {
  addDimention<T1>(items: T1[]): DeepCombination1<T1>;
  makeCombinations(depth: number, items: [never]): Generator<[never]>;
}
export function createCombinator<T1>(init?: [T1[]]): DeepCombination0`
];

for (let i = 1; i <= MAX_DEPTH; i++) {
  const typeParams = Array.from(new Array(i), (_, j) => `T${j + 1}`);
  const t = typeParams.join(", ");
  types.push(`
interface DeepCombination${i}<${t}> extends Iterable<[${t}]> {
  addDimention<T${i + 1}>(items: T${i + 1}[]): ${
    i < MAX_DEPTH
      ? `DeepCombination${i + 1}<${t}, T${i + 1}>`
      : "DeepCombinationAmbiguous"
  };
  makeCombinations(depth: number, items: [${t}]): Generator<[${t}]>;
}
export function createCombinator<${t}>(init?: [${t
    .split(", ")
    .map(t => t + "[]")
    .join(", ")}]): DeepCombination${i}<${t}>`);
}

types.push(`
interface DeepCombinationAmbiguous extends Iterable<unknown[]> {
  addDimention(items: unknown[]): DeepCombinationAmbiguous;
  makeCombinations(depth: number, items: unknown[]): Generator<unknown[]>;
}
export function createCombinator(init?: any[][]): DeepCombinationAmbiguous`);

fs.writeFileSync(DIST, types.join("\n\n"));
