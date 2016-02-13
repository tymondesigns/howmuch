import IncomeTaxCalculator from './Income/IncomeTaxCalculator';
import NationalInsuranceCalculator from './Income/NationalInsuranceCalculator';
import utils from '../utils';
import data from './data/2015-16';

class Tax {

    constructor (options, net = false) {
        this.opts = options;
        this.getNet = net;
    }

    /**
     * Return the IncomeTaxCalculator.
     *
     * @return  {IncomeTaxCalculator}
     */
    incomeTax () {
        return new IncomeTaxCalculator(this.opts.amount, data.incomeTaxData);
    }

    /**
     * Return the NationalInsuranceCalculator.
     *
     * @return  {NationalInsuranceCalculator}
     */
    nationalInsurance () {
        return new NationalInsuranceCalculator(this.opts.amount, this.opts.selfEmployed, data.nationalInsuranceData);
    }

    /**
     * Get the totoal combined tax to be deducted.
     *
     * @return  {Number}
     */
    totalTax () {
        return this.incomeTax().annual() + this.nationalInsurance().annual();
    }

    /**
     * Get the net amount after tax deductions.
     *
     * @return  {Number}
     */
    net () {
        return this.opts.amount - this.totalTax();
    }

    /**
     * Calculate the amount of tax to be deducted, or the net income after deductions.
     *
     * @return  {Number}
     */
    calculate () {
        return utils.roundTo(this.getNet ? this.net() : this.totalTax());
    }

    /**
     * Calculate the annual tax/income.
     *
     * @return  {Number}
     */
    annual () {
        return utils.roundTo(this.calculate());
    }

    /**
     * Calculate the monthly tax/income.
     *
     * @return  {Number}
     */
    month () {
        return utils.roundTo(this.annual() / 12);
    }

    /**
     * Calculate the weekly tax/income.
     *
     * @return  {Number}
     */
    week () {
        return utils.roundTo(this.annual() / 52);
    }

    /**
     * Calculate the daily tax/income.
     *
     * @return  {Number}
     */
    day () {
        return utils.roundTo(this.week() / 7);
    }

    /**
     * Get the yield of the net income vs gross income.
     *
     * @return  {[type]}
     */
    percentage () {
        return utils.roundTo(this.net() / this.opts.amount);
    }

}

export default Tax;
