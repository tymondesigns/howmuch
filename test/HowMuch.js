import test from 'ava';
import HowMuch from '../src/HowMuch';
import Tax from '../src/Tax/Tax';


test('it should instantiate the class', t => {
    t.true(new HowMuch instanceof HowMuch);
});

test('it should get an instance of Tax', t => {
    t.true(HowMuch.tax({ amount: 20000, selfEmployed: false }) instanceof Tax);
});
