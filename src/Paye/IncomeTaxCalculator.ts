import { TaxBandCalculator } from './TaxBandCalculator'
import { IncomeTaxDataInterface } from './Contracts'

export class IncomeTaxCalculator extends TaxBandCalculator {
  private gross: number
  private data: IncomeTaxDataInterface

  constructor(gross: number, data: IncomeTaxDataInterface) {
    super({ gross, bands: data.INCOME_TAX_BANDS })
    this.gross = gross
    this.data = data
  }

  /**
   * Set the total taxable amount for income tax.
   */
  getTotalTaxable(): number {
    if (this.gross < this.data.TAX_FREE_ALLOWANCE_LIMIT) {
      let taxable = this.gross - this.data.TAX_FREE_ALLOWANCE

      return taxable < 0 ? 0 : taxable
    } else if (this.gross < this.data.TAX_FREE_ALLOWANCE_UPPER_LIMIT) {
      let amountOver = this.gross - this.data.TAX_FREE_ALLOWANCE_LIMIT,
        adjustedTFA =
          this.data.TAX_FREE_ALLOWANCE - amountOver * this.data.TAX_FREE_ALLOWANCE_LIMIT_RATE

      return this.gross - adjustedTFA
    }

    return this.gross
  }
}
