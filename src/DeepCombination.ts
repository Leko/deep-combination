interface DeepCombination extends Iterable<any[]> {
  addDimention(items: any[]): DeepCombination;
  makeCombinations(depth: number, items: any[]): Generator<any[]>;
}

// It's just implementation.
// If you're looking for type definition, please refer ../generate-dts.js
export function createCombinator(init: any[][] = []): DeepCombination {
  const dimentions: any[][] = init;

  return {
    addDimention(items: any[]): DeepCombination {
      return createCombinator(dimentions.concat([items]));
    },

    *makeCombinations(depth: number, items: any[]): Generator<any[]> {
      if (!Array.isArray(dimentions[depth])) {
        yield items;
      } else {
        for (let item of dimentions[depth]) {
          yield* this.makeCombinations(depth + 1, items.concat([item]));
        }
      }
    },

    *[Symbol.iterator]() {
      yield* this.makeCombinations(0, []);
    }
  };
}
