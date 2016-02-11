import test from 'ava';
import Pay from '../src/pay';
import Tax from '../src/Tax';


test('it should instantiate the class', t => {
    t.true(new Pay instanceof Pay);
});

test('it should get an instance of Tax', t => {
    t.true(Pay.tax({ amount: 20000, selfEmployed: false }) instanceof Tax);
});
