import test from 'ava';
import utils from '../src/utils';

test('it should round a number to specified decimal places', t => {
    t.is(utils.round(12345.6789, 2), 12345.68);
    t.is(utils.round(321.6245624, 4), 321.6246);
    t.is(utils.round(542.244549), 542.24);
});
