import IncomeTaxCalculator from './Income/IncomeTaxCalculator';
import NationalInsuranceCalculator from './Income/NationalInsuranceCalculator';
import utils from '../utils';
import data from './data/2015-16';

class Tax {

    constructor (options) {
        this.opts = options;
        this.getNet = false;
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
    calcNet () {
        return this.opts.amount - this.totalTax();
    }

    /**
     * Update to return net instead of tax
     *
     * @return  {Tax}
     */
    net (getNet = true) {
        this.getNet = getNet;

        return this;
    }

    /**
     * Calculate the amount of tax to be deducted, or the net income after deductions.
     *
     * @return  {Number}
     */
    calculate () {
        return utils.round(this.getNet ? this.calcNet() : this.totalTax());
    }

    /**
     * Calculate the annual tax/income.
     *
     * @return  {Number}
     */
    annual () {
        return utils.round(this.calculate());
    }

    /**
     * Calculate the monthly tax/income.
     *
     * @return  {Number}
     */
    month () {
        return utils.round(this.annual() / 12);
    }

    /**
     * Calculate the weekly tax/income.
     *
     * @return  {Number}
     */
    week () {
        return utils.round(this.annual() / 52);
    }

    /**
     * Calculate the daily tax/income.
     *
     * @return  {Number}
     */
    day () {
        return utils.round(this.week() / 7);
    }

    /**
     * Get the yield of the net income vs gross income.
     *
     * @return  {[type]}
     */
    percentage () {
        return utils.round((this.calcNet() / this.opts.amount) * 100);
    }

}

export default Tax;
