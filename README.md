# Sinp
A simple standard input reader

## Installation
```bash
npm i sinp
```

## Usage
```js
const input = reqiure('sinp');

(async function () {
    const inp = input('> ');
    console.log('You said:', await inp);
})();
```
## Motivation
A lot of other stdin readers are bloated with features that often aren't used. Sinp was created to be a simple input reader with no extra features or dependencies. Sinp doesn't even depend on readlines.
