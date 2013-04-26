# tor-exits

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
  { 
    exitNode: '00A7C669AE71F957383A6288BB3A2AFEDB17D8B8',
    published: '2013-04-26 06:14:51',
    lastStatus: '2013-04-26 07:02:46',
    exitAddress: { address: '92.247.177.98', timestamp: '2013-04-26 07:03:29' } 
  },
  
  ...

```
