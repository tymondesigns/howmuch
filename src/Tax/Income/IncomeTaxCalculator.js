import TaxBandCalculator from '../Utils/TaxBandCalculator';
import data from '../data/2015-16/income';

class IncomeTaxCalculator extends TaxBandCalculator {

    constructor (gross) {
        super({ gross, bands: data.INCOME_TAX_BANDS });
        this.gross = gross;
    }

    /**
     * Override the total taxable amount for income tax specifically
     *
     * @return {Number}
     */
    getTotalTaxable () {
        if (this.gross < data.TAX_FREE_ALLOWANCE_LIMIT) {
            let taxable = this.gross - data.TAX_FREE_ALLOWANCE;

            return taxable < 0 ? 0 : taxable;
        } else if (this.gross < data.TAX_FREE_ALLOWANCE_UPPER_LIMIT) {
            let amountOver = this.gross - data.TAX_FREE_ALLOWANCE_LIMIT,
                adjustedTFA = data.TAX_FREE_ALLOWANCE - (amountOver * data.TAX_FREE_ALLOWANCE_LIMIT_RATE);

            return this.gross - adjustedTFA;
        }

        return this.gross;
    }

}

export default IncomeTaxCalculator;
