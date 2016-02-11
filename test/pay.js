import test from 'ava';
import Pay from '../src/pay';
import IncomeTaxCalculator from '../src/Tax/Income/IncomeTaxCalculator';
import NationalInsuranceCalculator from '../src/Tax/Income/NationalInsuranceCalculator';

test('it should instantiate the class', t => {
    t.true(new Pay instanceof Pay);
});

test('it should get an instance of the IncomeTaxCalculator', t => {
    t.true(Pay.incomeTax(25000) instanceof IncomeTaxCalculator);
});

test('it should get an instance of the NationalInsuranceCalculator', t => {
    t.true(Pay.nationalInsurance(25000) instanceof NationalInsuranceCalculator);
});
