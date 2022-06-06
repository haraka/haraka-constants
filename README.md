[![Build Status][ci-img]][ci-url]
[![Coverage Status][cov-img]][cov-url]
[![Code Climate][clim-img]][clim-url]

[![NPM][npm-img]][npm-url]

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
const constants = require('haraka-constants');
const myObj = {};
constants.import(myObj);

// myObj.cont === 900
```

## translate

Converts a numeric constant to its string representation.

```js
const constants = require('haraka-constants');
// 'CONT' === constants.translate(900);
```


[ci-img]: https://github.com/haraka/haraka-constants/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/haraka/haraka-constants/actions/workflows/ci.yml
[cov-img]: https://codecov.io/github/haraka/haraka-constants/coverage.svg
[cov-url]: https://codecov.io/github/haraka/haraka-constants?branch=master
[clim-img]: https://codeclimate.com/github/haraka/haraka-constants/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-constants
[npm-img]: https://nodei.co/npm/haraka-constants.png
[npm-url]: https://www.npmjs.com/package/haraka-constants

