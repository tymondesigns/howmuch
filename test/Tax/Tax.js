import test from 'ava';
import Tax from '../../src/Tax/Tax';
import IncomeTaxCalculator from '../../src/Tax/Income/IncomeTaxCalculator';
import NationalInsuranceCalculator from '../../src/Tax/Income/NationalInsuranceCalculator';

let calc = amount => new Tax(amount);

test('it should instantiate the class', t => {
    t.true(new Tax instanceof Tax);
});

test('it should get an instance of the IncomeTaxCalculator', t => {
    t.true(calc(25000).incomeTax() instanceof IncomeTaxCalculator);
});

test('it should get an instance of the NationalInsuranceCalculator', t => {
    t.true(calc(25000).nationalInsurance() instanceof NationalInsuranceCalculator);
});
