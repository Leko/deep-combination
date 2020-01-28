import { createCombinator } from "./DeepCombination";

describe("createCombinator", () => {
  describe("constructor", () => {
    it("can instantiate correctly without any arguments", () => {
      createCombinator();
    });
    it("can instantiate correctly with arguments", () => {
      const dc = createCombinator([[1, 2, 3]]);
      expect(Array.from(dc)).toStrictEqual([[1], [2], [3]]);
    });
  });
  describe("addDimention", () => {
    it("can add dimention correctly", () => {
      const dc = createCombinator();
      dc.addDimention(["a", "b", "c"]);
    });
  });
  describe("[Synbol.iterator]", () => {
    it("can iterate correctly", () => {
      const expected = [
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4]
      ];

      const dc = createCombinator()
        .addDimention([1, 2])
        .addDimention([3, 4]);

      let cursor = 0;
      for (let items of dc) {
        expect(items).toStrictEqual(expected[cursor]);
        cursor++;
      }
    });
  });
});
