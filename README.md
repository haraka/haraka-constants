# haraka-constants

[![Build][ci-img]][ci-url] [![Cover][cov-img]][cov-url] [![Qlty][qlty-img]][qlty-url]

Haraka constants. Exports the following SMTP result constants used throughout Haraka:

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

Each constant is exported in both lowercase (`cont`) and uppercase (`CONT`) form.

## write_excl

A bitmask of `fs` open flags (`O_CREAT | O_TRUNC | O_WRONLY | O_EXCL`) suitable for opening a file write-exclusively — fails if the file already exists.

## connection.state

Numeric identifiers for the connection state machine. Available under both bare and `STATE_`-prefixed names:

    CMD / STATE_CMD: 1,
    LOOP / STATE_LOOP: 2,
    DATA / STATE_DATA: 3,
    PAUSE / STATE_PAUSE: 4,
    PAUSE_SMTP / STATE_PAUSE_SMTP: 5,
    PAUSE_DATA / STATE_PAUSE_DATA: 6,
    DISCONNECTING / STATE_DISCONNECTING: 99,
    DISCONNECTED / STATE_DISCONNECTED: 100

# Exported Functions

## import

Populates an object with the uppercase constants.

```js
const constants = require('haraka-constants')
const myObj = {}
constants.import(myObj)

// myObj.CONT === 900
```

## translate

Converts a numeric constant to its string representation.

```js
const constants = require('haraka-constants')
// 'CONT' === constants.translate(900);
```

[ci-img]: https://github.com/haraka/haraka-constants/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/haraka/haraka-constants/actions/workflows/ci.yml
[cov-img]: https://codecov.io/github/haraka/haraka-constants/coverage.svg
[cov-url]: https://codecov.io/github/haraka/haraka-constants?branch=master
[qlty-img]: https://qlty.sh/gh/haraka/projects/haraka-constants/maintainability.svg
[qlty-url]: https://qlty.sh/gh/haraka/projects/haraka-constants
