import utils from './utils';

class TaxBandCalculator {

    /**
     * Instantiate the Class
     *
     * @param  {Object}  options
     */
    constructor (options) {
        this.opts = options;
    }

    /**
     * Get the gross annual income
     *
     * @return  {Number}
     */
    get gross () {
        return this.opts.gross;
    }

    /**
     * Get the gross annual income
     *
     * @param  {Number}  amount
     */
    set gross (amount) {
        this.opts.gross = amount;
    }

    /**
     * Get the net annual income
     *
     * @return  {Number}
     */
    get net () {
        return this.gross - this.annual();
    }

    /**
     * Get the total taxable amount from the gross amount.
     * Defaults to the total gross amount.
     *
     * @return {Number}
     */
    getTotalTaxable () {
        return this.gross;
    }

    /**
     * Calculate how much tax is to be paid for a particular tax band
     *
     * @param  {Number}  amount
     * @param  {Object}  band
     *
     * @return {Number}
     */
    calculateTaxForBand (amount, band) {
        if (amount < band.min) return 0;

        // return the flat rate if one is set
        if (typeof band.flat !== 'undefined') return band.rate;

        return (amount - band.min) * band.rate;
    }

    /**
     * Calculate the amount of annual Tax given the gross income
     *
     * @return {Number}
     */
    annual () {
        let total = 0,
            taxable = this.getTotalTaxable();

        for (let i = this.opts.bands.length - 1; i >= 0; i--) {
            let band = this.opts.bands[i],
                amount = this.calculateTaxForBand(taxable, band);

            total += amount;

            if (amount > 0) taxable = band.min;
        }

        return utils.roundTo(total);
    }

    /**
     * Calculate the amount of monthly Tax given the gross income
     *
     * @return  {Number}
     */
    month () {
        return utils.roundTo(this.annual() / 12);
    }

    /**
     * Calculate the amount of weekly Tax given the gross income
     *
     * @return  {Number}
     */
    week () {
        return utils.roundTo(this.annual() / 52);
    }

    /**
     * Calculate the amount of daily Tax given the gross income
     *
     * @return  {Number}
     */
    day () {
        return utils.roundTo(this.week() / 7);
    }

}

export default TaxBandCalculator;
