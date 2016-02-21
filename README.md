[![Build Status][ci-img]][ci-url]
[![Coverage Status][cov-img]][cov-url]

# haraka-constants

Haraka constants. Exports the following constants used throughout Haraka:

    CONT: 900,
    STOP: 901,
    DENY: 902,
    DENYSOFT: 903,
    DENYDISCONNECT: 904,
    DISCONNECT: 905,
    OK: 906,
    NEXT_HOOK: 907,
    DELAY: 908,
    DENYSOFTDISCONNECT: 909

# Exported Functions

## import

Populates an object with the constants.

```js
var constants = require('haraka-constants');
var myObj = {};
constants.import(myObj);

// myObj.cont === 900
```

## translate

Converts a numeric constant to it's string representation.

```js
var constants = require('haraka-constants');
// 'CONT' === constants.translate(900);
```


[ci-img]: https://travis-ci.org/haraka/haraka-constants.svg?branch=master
[ci-url]: https://travis-ci.org/haraka/haraka-constants
[cov-img]: https://codecov.io/github/haraka/haraka-constants/coverage.svg
[cov-url]: https://codecov.io/github/haraka/haraka-constants?branch=master
