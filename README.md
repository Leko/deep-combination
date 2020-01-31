# deep-combination

![](https://img.shields.io/npm/v/deep-combination.svg)
[![codecov](https://codecov.io/gh/Leko/deep-combination/branch/master/graph/badge.svg)](https://codecov.io/gh/Leko/deep-combination)
![](https://img.shields.io/npm/dm/deep-combination.svg)
![](https://img.shields.io/npm/l/deep-combination.svg)

Generate pair of all combination with type-safe.

## Install

```
npm install deep-combination
```

## Usage

```ts
import { createCombinator } from "deep-combination";

const browsers = ["chrome", "firefox", "webkit"];
const devices = ["laptop", "mobile"];
const locales = ["en-US", "ja-JP"];

const combinator = createCombinator()
  .addDimention(browsers)
  .addDimention(devices)
  .addDimention(locales);

// You can get pairs via for-of statement
for (let [browser, device, locale] of combinator) {
  console.log([browser, device, locale]);
  // => ['chrome', 'laptop', 'en-US'], ['chrome', 'laptop', 'ja-JP']...
}

// Or you can get list of pairs from Array.from
const pairs = Array.from(combinator);
// => [['chrome', 'laptop', 'en-US'], ['chrome', 'laptop', 'ja-JP'], ...]
```

[TypeScript Playground]()

### Limitation

Currently, type definition supports less than 20 dimentions.  
Runtime is OK but type is not recognized.

## Contribution

1. Fork this repository
1. Write your code
1. Run tests
1. Create pull request to master branch

## Development

```
git clone git@github.com:Leko/deep-combination.git
cd deep-combination
npm i
```

## License

This package under [MIT](https://opensource.org/licenses/MIT) license.
