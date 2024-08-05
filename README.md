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
Sinp can also be used with .then:
```js
input('> ').then(function (inp) {
    console.log('You said:', inp);
});
```
The "prompt" parameter is optional, and defaults to an empty string.

Sinp can also output a buffer instead of a string for more control:
```js
input('> ', true).then(function (inp) {
    console.log(inp.toString().trim()); // Buffer mode won't trim the input
});
```

## Motivation
A lot of other stdin readers are bloated with features that often aren't used. Sinp was created to be a simple input reader with no extra features or dependencies. Sinp doesn't even depend on readlines.
