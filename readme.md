# bpad

↔️ Leftpad and rightpad at the same time, aka balancedpad 

## Install

```bash
$ npm install bpad
```

```bash
$ yarn add bpad
```

## Usage

###### API

```js
/**
 * Pads a string on left & right sides
 * evenly if possible
 *
 * @param {string}  str   - The string to be padded.
 * @param {int}     width - The total length of the padded string.
 * @param {string}  ch    - The character to use when padding.
 * @param {boolean} left  - If true asymmetric padding will occur on the left.
 */
function bpad (str, width, ch, left) {...}
```

###### Examples

```js
const bpad = require('bpad')

bpad('foobar', 8)
// -> ' foobar '

bpad('foobar', 6)
// -> 'foobar'

bpad('foobar', 8, '*')
// -> '*foobar*'

bpad('foobar', 9, '*')
// -> '*foobar**'

bpad('foobar', 9, '*', true)
// -> '**foobar*'
```
