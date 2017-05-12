import assert from 'assert';
import { test, testSuite, setup, teardown } from './describe';

const obj = {};

testSuite('True Or False? ', () => {
    testSuite('setup', () => {
        test('should setup num', (cb) => {
            if (cb && typeof(cb) === 'function')
                cb(assert.equal(obj.num, 2));
            else
                assert.equal(obj.num, 2);
        });
        setup(() => {
            obj.num = 2;
        });
        teardown(() => {
            obj.num = null;
        });
    });

    testSuite('teardown', () => {
        test('should teardown num', (cb) => {
            if (cb && typeof(cb) === 'function')
                cb(assert.equal(obj.num, null));
            else
                assert.equal(obj.num, null);
        });
    });

    testSuite('truthy => ', () => {
        test('empty array', (cb) => {
            if (cb && typeof(cb) === 'function')
                cb(assert.equal(!![0], true));
            else
                assert.equal(!![0], true);
        });

        test('empty object', (cb) => {
            if (cb && typeof(cb) === 'function')
                cb(assert.equal(!!{}, true));
            else
                assert.equal(!!{}, true);
        });
    });

    testSuite('falsy => ', () => {
        testSuite('undefined & nil', () => {
            test('undefined', (cb) => {
                if (cb && typeof(cb) === 'function')
                    cb(assert.equal(!(void 0), true));
                else
                    assert.equal(!(void 0), true);
            });
            test('null', (cb) => {
                if (cb && typeof(cb) === 'function')
                    cb(assert.equal(!null, true));
                else
                    assert.equal(!null, true);
            });
        });

        test('should test ![] === true ', (cb) => {
            if (cb && typeof(cb) === 'function')
                cb(assert.equal(![], true));
            else
                assert.equal(![], true);
        });

        test('!NaN === true', (cb) => {
            if (cb && typeof(cb) === 'function')
                cb(assert.equal(!NaN, true));
            else
                assert.equal(!NaN, true);
        });
        test('!(empty string) === true', (cb) => {
            if (cb && typeof(cb) === 'function')
                cb(assert.equal(!'', true));
            else
                assert.equal(!'', true);
        });
    });
});
