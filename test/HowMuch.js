import test from 'ava';
import HowMuch from '../src/HowMuch';
import Tax from '../src/Tax/Tax';

test('it should instantiate the class', t => {
    t.true(new HowMuch instanceof HowMuch);
});

test('it should get an instance of Tax', t => {
    t.true(HowMuch.tax({ amount: 20000, selfEmployed: false }) instanceof Tax);
});

test('it should get the income tax amount', t => {
    let tax = HowMuch.incomeTax({ amount: 20000, selfEmployed: false });

    t.is(1880, tax.annual());
    t.is(156.67, tax.month());
    t.is(36.15, tax.week());
    t.is(5.16, tax.day());
});

test('it should get the national insurance amount', t => {
    let ni = HowMuch.nationalInsurance({ amount: 20000, selfEmployed: false });

    t.is(1432.8, ni.annual());
    t.is(119.4, ni.month());
    t.is(27.55, ni.week());
    t.is(3.94, ni.day());
});

test('it should get the total tax amount', t => {
    let tax = HowMuch.tax({ amount: 20000, selfEmployed: false });

    t.is(3312.8, tax.annual());
    t.is(276.07, tax.month());
    t.is(63.71, tax.week());
    t.is(9.1, tax.day());
});

test('it should get the net income', t => {
    let income = HowMuch.income({ amount: 20000, selfEmployed: false });

    t.is(16687.2, income.annual());
    t.is(1390.6, income.month());
    t.is(320.91, income.week());
    t.is(45.84, income.day());

    t.is(83.44, income.percentage());
});
