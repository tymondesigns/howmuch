import test from 'ava';
import NationalInsuranceCalculator from '../../../src/Tax/Income/NationalInsuranceCalculator';
import data from '../../../src/Tax/data/2015-16';

let calc = (amount, selfEmployed = false) => new NationalInsuranceCalculator(amount, selfEmployed, data.nationalInsuranceData);

test('it should instantiate the class', t => {
    t.true(calc(2000) instanceof NationalInsuranceCalculator);
});

test('it should calculate annual/monthly national insurance for NON self-employed', t => {
    t.is(1432.8, calc(20000).annual());
    t.is(3232.8, calc(35000).annual());
    t.is(6471.4, calc(160000).annual());

    t.is(119.4, calc(20000).month());
});
