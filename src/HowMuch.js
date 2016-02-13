import Tax from './Tax/Tax';
import InterestCalculator from './Interest/InterestCalculator';

class HowMuch {

    /**
     * Get an instance of the IncomeTaxCalculator.
     *
     * @param   {Object}  options
     *
     * @return  {IncomeTaxCalculator}
     */
    static incomeTax (options) {
        return new Tax(options).incomeTax();
    }

    /**
     * Get an instance of the NationalInsuranceCalculator.
     *
     * @param   {Object}  options
     *
     * @return  {NationalInsuranceCalculator}
     */
    static nationalInsurance (options) {
        return new Tax(options).nationalInsurance();
    }

    /**
     * Get an instance of the Tax class to calculate tax alone.
     *
     * @param   {Object}  options
     *
     * @return  {Tax}
     */
    static tax (options) {
        return new Tax(options, false);
    }

    /**
     * Get an instance of the Tax class to calculate net
     * amount after tax deductions.
     *
     * @param   {Object}  options
     *
     * @return  {Tax}
     */
    static income (options) {
        return new Tax(options, true);
    }

    /**
     * Get an instance of the InterestCalculator
     *
     * @param   {Object}  options
     *
     * @return  {InterestCalculator}
     */
    static interest (options) {
        return new InterestCalculator(options);
    }

}

export default HowMuch;
