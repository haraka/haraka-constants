const assert = require('node:assert/strict')
const { describe, it } = require('node:test')

const { constants: fs_const } = require('node:fs')

const constants = require('../index')
const write_excl_val =
  fs_const.O_CREAT | fs_const.O_TRUNC | fs_const.O_WRONLY | fs_const.O_EXCL

describe('constants', () => {
  it('cont', () => {
    assert.equal(constants.cont, 900)
  })
  it('CONT', () => {
    assert.equal(constants.CONT, 900)
  })
  it('stop', () => {
    assert.equal(constants.stop, 901)
  })
  it('deny', () => {
    assert.equal(constants.deny, 902)
  })
  it('DENY', () => {
    assert.equal(constants.DENY, 902)
  })
  it('WRITE_EXCL', () => {
    assert.equal(constants.WRITE_EXCL, write_excl_val)
  })
})

describe('import', () => {
  it('exists as function', () => {
    assert.equal(typeof constants.import, 'function')
  })
  it('populates an object', () => {
    const newObj = {}
    constants.import(newObj)
    delete newObj.connection
    assert.deepEqual(newObj, {
      CONT: 900,
      STOP: 901,
      DENY: 902,
      DENYSOFT: 903,
      DENYDISCONNECT: 904,
      DISCONNECT: 905,
      OK: 906,
      NEXT_HOOK: 907,
      DELAY: 908,
      DENYSOFTDISCONNECT: 909,
      WRITE_EXCL: write_excl_val,
    })
  })
})

describe('translate', () => {
  it('converts num to str', () => {
    assert.equal('CONT', constants.translate(900))
    assert.equal('DENY', constants.translate(902))
  })
  it('UNKNOWN', () => {
    assert.equal('UNKNOWN', constants.translate(800))
  })
})

describe('connection', () => {
  it('has connection state CMD', () => {
    assert.equal(constants.connection.state.CMD, 1)
  })
  it('has connection state STATE_CMD', () => {
    assert.equal(constants.connection.state.STATE_CMD, 1)
  })
  it('has connection state DISCONNECTED', () => {
    assert.equal(constants.connection.state.DISCONNECTED, 100)
  })
  it('has connection state STATE_DISCONNECTED', () => {
    assert.equal(constants.connection.state.STATE_DISCONNECTED, 100)
  })
})
