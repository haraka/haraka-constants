
const assert = require('assert')

const node_const   = require('constants');

const constants      = require('../index');
const write_excl_val = node_const.O_CREAT | node_const.O_TRUNC | node_const.O_WRONLY | node_const.O_EXCL;

describe('constants', function () {
    it('cont', function () {
        assert.equal(constants.cont, 900);
    })
    it('CONT', function () {
        assert.equal(constants.CONT, 900);
    })
    it('stop', function () {
        assert.equal(constants.stop, 901);
    })
    it('deny', function () {
        assert.equal(constants.deny, 902);
    })
    it('DENY', function () {
        assert.equal(constants.DENY, 902);
    })
    it('WRITE_EXCL', function () {
        assert.equal(constants.WRITE_EXCL, write_excl_val);
    })
})

describe('import', function () {
    it('exists as function', function () {
        assert.equal(typeof constants.import, 'function');
    })
    it('populates an object', function () {
        const newObj = {};
        constants.import(newObj);
        delete newObj.connection;
        assert.deepEqual(newObj,
            {
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
                WRITE_EXCL: write_excl_val
            }
        );
    })
})

describe('translate', function () {
    it('converts num to str', function () {
        assert.equal('CONT', constants.translate(900));
        assert.equal('DENY', constants.translate(902));
    })
    it('UNKNOWN', function () {
        assert.equal('UNKNOWN', constants.translate(800));
    })
})

describe('connection', function () {
    it('has connection state CMD', function () {
        assert.equal(constants.connection.state.CMD, 1);
    })
    it('has connection state STATE_CMD', function () {
        assert.equal(constants.connection.state.STATE_CMD, 1);
    })
    it('has connection state DISCONNECTED', function () {
        assert.equal(constants.connection.state.DISCONNECTED, 100);
    })
    it('has connection state STATE_DISCONNECTED', function () {
        assert.equal(constants.connection.state.STATE_DISCONNECTED, 100);
    })
})