import IncomeTaxCalculator from './Income/IncomeTaxCalculator';
import NationalInsuranceCalculator from './Income/NationalInsuranceCalculator';
import data from './data/2015-16';

class Tax {

    constructor (amount) {
        this.amount = amount;
    }

    incomeTax () {
        return new IncomeTaxCalculator(this.amount, data.incomeTaxData);
    }

    nationalInsurance (selfEmployed = false) {
        return new NationalInsuranceCalculator(this.amount, selfEmployed, data.nationalInsuranceData);
    }

}

export default Tax;
