import IncomeTaxCalculator from './Tax/Income/IncomeTaxCalculator';
import NationalInsuranceCalculator from './Tax/Income/NationalInsuranceCalculator';
import data from './Tax/data/2015-16/index';

class Pay {

    static incomeTax (amount) {
        return new IncomeTaxCalculator(amount, data.incomeTaxData);
    }

    static nationalInsurance (amount, selfEmployed = false) {
        return new NationalInsuranceCalculator(amount, selfEmployed, data.nationalInsuranceData);
    }

}

export default Pay;
