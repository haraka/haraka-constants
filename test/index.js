
const node_const   = require('constants');

const constants      = require('../index');
const write_excl_val = node_const.O_CREAT | node_const.O_TRUNC | node_const.O_WRONLY | node_const.O_EXCL;

exports.constants = {
    'cont' (test) {
        test.expect(1);
        test.equal(constants.cont, 900);
        test.done();
    },
    'CONT' (test) {
        test.expect(1);
        test.equal(constants.CONT, 900);
        test.done();
    },
    'stop' (test) {
        test.expect(1);
        test.equal(constants.stop, 901);
        test.done();
    },
    'deny' (test) {
        test.expect(1);
        test.equal(constants.deny, 902);
        test.done();
    },
    'DENY' (test) {
        test.expect(1);
        test.equal(constants.DENY, 902);
        test.done();
    },
    'WRITE_EXCL' (test) {
        test.expect(1);
        test.equal(constants.WRITE_EXCL, write_excl_val);
        test.done();
    }
}

exports.import = {
    'exists as function' (test) {
        test.expect(1);
        test.equal(typeof constants.import, 'function');
        test.done();
    },
    'populates an object' (test) {
        test.expect(1);
        const newObj = {};
        constants.import(newObj);
        delete newObj.connection;
        test.deepEqual(newObj,
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
        test.done();
    }
};

exports.translate = {
    'converts num to str' (test) {
        test.expect(2);
        test.equal('CONT', constants.translate(900));
        test.equal('DENY', constants.translate(902));
        test.done();
    },
    'UNKNOWN' (test) {
        test.expect(1);
        test.equal('UNKNOWN', constants.translate(800));
        test.done();
    },
};

exports.connection = {
    'has connection state CMD' (test) {
        test.expect(1);
        test.equal(constants.connection.state.CMD, 1);
        test.done();
    },
    'has connection state STATE_CMD' (test) {
        test.expect(1);
        test.equal(constants.connection.state.STATE_CMD, 1);
        test.done();
    },
    'has connection state DISCONNECTED' (test) {
        test.expect(1);
        test.equal(constants.connection.state.DISCONNECTED, 100);
        test.done();
    },
    'has connection state STATE_DISCONNECTED' (test) {
        test.expect(1);
        test.equal(constants.connection.state.STATE_DISCONNECTED, 100);
        test.done();
    },
}