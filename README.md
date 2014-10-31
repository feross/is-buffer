# is-buffer [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][npm-url]

#### Determine if an object is a [`Buffer`](http://nodejs.org/api/buffer.html) (incl. [browser](https://github.com/feross/buffer) buffers).

[![testling][testling-image]][testling-url]

[travis-image]: https://img.shields.io/travis/feross/is-buffer.svg?style=flat
[travis-url]: https://travis-ci.org/feross/is-buffer
[npm-image]: https://img.shields.io/npm/v/is-buffer.svg?style=flat
[npm-url]: https://npmjs.org/package/is-buffer
[downloads-image]: https://img.shields.io/npm/dm/is-buffer.svg?style=flat
[testling-image]: https://ci.testling.com/feross/is-buffer.png
[testling-url]: https://ci.testling.com/feross/is-buffer

## Why not use `Buffer.isBuffer`?

If you just want to check if an object is a `Buffer` without `require('buffer')` (which bundles the entire [buffer](https://github.com/feross/buffer) module in [browserify](http://browserify.org/)), then use this module. It's future-proof and works in node too!

## install

```bash
npm install is-buffer
```

## usage

```js
var isBuffer = require('is-buffer')

isBuffer(new Buffer(4)) // true

isBuffer(undefined) // false
isBuffer(null) // false
isBuffer('') // false
isBuffer(true) // false
isBuffer(false) // false
isBuffer(0) // false
isBuffer(1) // false
isBuffer(1.0) // false
isBuffer('string') // false
isBuffer({}) // false
isBuffer(function foo () {}) // false
```

## license

MIT. Copyright (C) [Feross Aboukhadijeh](http://feross.org).
