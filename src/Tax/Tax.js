import IncomeTaxCalculator from './Income/IncomeTaxCalculator';
import NationalInsuranceCalculator from './Income/NationalInsuranceCalculator';
import utils from './Utils/utils';
import data from './data/2015-16';

class Tax {

    constructor (options) {
        this.opts = options;
    }

    incomeTax () {
        return new IncomeTaxCalculator(this.opts.amount, data.incomeTaxData);
    }

    nationalInsurance () {
        return new NationalInsuranceCalculator(this.opts.amount, this.opts.selfEmployed, data.nationalInsuranceData);
    }

    annual () {
        return utils.roundTo(this.incomeTax().annual() + this.nationalInsurance().annual());
    }

    month () {
        return utils.roundTo(this.annual() / 12);
    }

    week () {
        return utils.roundTo(this.annual() / 52);
    }

    day () {
        return utils.roundTo(this.week() / 7);
    }

}

export default Tax;
