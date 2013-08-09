# tor-exits

[![Build Status](https://travis-ci.org/freewil/tor-exits.png)](https://travis-ci.org/freewil/tor-exits)

## Install

```
npm install tor-exits
```

## Usage

```js
var tor = require('tor-exits');
tor.fetch(function(err, data) {
  if (err) return console.error(err);
  var nodes = tor.parse(data);
  console.log(nodes);
});
```

```js
[
  '92.247.177.98',
  ...
  ...
```
