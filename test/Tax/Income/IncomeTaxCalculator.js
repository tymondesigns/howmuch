import test from 'ava';
import IncomeTaxCalculator from '../../../src/Tax/Income/IncomeTaxCalculator';
import data from '../../../src/Tax/data/2015-16';

let calc = amount => new IncomeTaxCalculator(amount, data.incomeTaxData);

test('it should instantiate the class', t => {
    t.true(calc(2000) instanceof IncomeTaxCalculator);
});

test('it should calculate the total taxable amount', t => {
    t.is(9400, calc(20000).getTotalTaxable());
    t.is(24400, calc(35000).getTotalTaxable());
    t.is(160000, calc(160000).getTotalTaxable());
});

test('it should calculate annual/monthly income tax', t => {
    t.is(1880, calc(20000).annual());
    t.is(4880, calc(35000).annual());
    t.is(58142.8, calc(160000).annual());

    t.is(156.67, calc(20000).month());
});

test('it should calculate net after income tax', t => {
    t.is(18120, calc(20000).net());
    t.is(30120, calc(35000).net());
    t.is(101857.2, calc(160000).net());
});
