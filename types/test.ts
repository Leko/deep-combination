import { createCombinator } from "..";

const combinator1 = createCombinator().addDimention(["chrome", "firefox"]);
for (let [browser] of combinator1) {
  browser; // $ExpectType string
}

class A {}

const combinator3 = createCombinator()
  .addDimention(["chrome", "firefox"])
  .addDimention([1, 2])
  .addDimention([new A()]);
for (let [browser, num, instance] of combinator3) {
  browser; // $ExpectType string
  num; // $ExpectType number
  instance; // $ExpectType A
}

// $ExpectType [string, number, A][]
Array.from(combinator3);
