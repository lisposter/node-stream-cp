# stream-cp
[![NPM version](https://img.shields.io/npm/v/stream-cp.svg?style=flat)](https://www.npmjs.org/package/stream-cp)

cp for node.js with stream

## Installation

```bash
$ npm install stream-cp
```

## Example
```js
var cp = require('./');

cp('test/fixture', 'test/expected', function(file) {
    return 'prefix_' + file;
}, function(err) {
    console.log('done');
});
```

the example code will bring a result like this:

![result](https://raw.githubusercontent.com/lisposter/node-stream-cp/master/test/result.png)

## Usage
```js
cp(src, dst, map, callback)
```
__Arguments__

* `src`: source folder path
* `dst`: destnation path
* `map`: the function which is used to map the original file names to new filenames.


## License

MIT © [Leigh Zhu](#)
