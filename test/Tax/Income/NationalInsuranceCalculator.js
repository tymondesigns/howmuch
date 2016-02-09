import test from 'ava';
import NationalInsuranceCalculator from '../../../src/Tax/Income/NationalInsuranceCalculator';

let calc = (amount, selfEmployed = false) => new NationalInsuranceCalculator(amount, selfEmployed);

test('it should instantiate the class', t => {
    t.true(calc(2000) instanceof NationalInsuranceCalculator);
});

test('it should calculate annual/monthly national insurance for NON self-employed', t => {
    t.is(1432.8, calc(20000).calculateAnnual());
    t.is(3232.7999999999997, calc(35000).calculateAnnual());
    t.is(6471.4, calc(160000).calculateAnnual());

    t.is(119.39999999999999, calc(20000).calculateMonthly());
});
