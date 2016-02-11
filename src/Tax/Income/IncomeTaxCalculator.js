import TaxBandCalculator from '../Utils/TaxBandCalculator';

class IncomeTaxCalculator extends TaxBandCalculator {

    constructor (gross, data) {
        super({ gross, bands: data.INCOME_TAX_BANDS });
        this.gross = gross;
        this.data = data;
    }

    /**
     * Override the total taxable amount for income tax specifically
     *
     * @return {Number}
     */
    getTotalTaxable () {
        if (this.gross < this.data.TAX_FREE_ALLOWANCE_LIMIT) {
            let taxable = this.gross - this.data.TAX_FREE_ALLOWANCE;

            return taxable < 0 ? 0 : taxable;
        } else if (this.gross < this.data.TAX_FREE_ALLOWANCE_UPPER_LIMIT) {
            let amountOver = this.gross - this.data.TAX_FREE_ALLOWANCE_LIMIT,
                adjustedTFA = this.data.TAX_FREE_ALLOWANCE - (amountOver * this.data.TAX_FREE_ALLOWANCE_LIMIT_RATE);

            return this.gross - adjustedTFA;
        }

        return this.gross;
    }

}

export default IncomeTaxCalculator;
