import fs from "fs";
import path from "path";
import { MAX_DEPTH } from "../src/constants";

const DIST = path.join(__dirname, "..", "types", "index.d.ts");

let types = [
  `
interface DeepCombination0 extends Iterable<[never]> {
  addDimention<T1>(items: T1[]): DeepCombination1<T1>;
}
export declare function createCombinator(): DeepCombination0`
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
}
export declare function createCombinator<${t}>(init: [${t
    .split(", ")
    .map(t => t + "[]")
    .join(", ")}]): DeepCombination${i}<${t}>`);
}

types.push(`
interface DeepCombinationAmbiguous extends Iterable<unknown[]> {
  addDimention(items: unknown[]): DeepCombinationAmbiguous;
}
export declare function createCombinator(init?: any[][]): DeepCombinationAmbiguous
export {};`);

fs.writeFileSync(DIST, types.join("\n\n"));
