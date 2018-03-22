import { type, round } from 'chitu'
import { TaxBandOptions, BandInterface } from './Contracts'

export abstract class TaxBandCalculator {
  private opts: TaxBandOptions

  constructor(options: TaxBandOptions) {
    this.opts = options
  }

  /**
   * Get the total taxable amount from the gross amount.
   * Defaults to the total gross amount.
   */
  getTotalTaxable(): number {
    return this.opts.gross
  }

  /**
   * Calculate how much tax is to be paid for a particular tax band
   */
  calculateTaxForBand(amount: number, band: BandInterface): number {
    if (amount < band.min) return 0

    // return the flat rate if one is set
    if (!type.isUndefined(band.flat)) return band.rate

    return (amount - band.min) * band.rate
  }

  /**
   * Calculate the amount of annual Tax given the gross income
   */
  annual(): number {
    let total = 0,
      taxable = this.getTotalTaxable()

    for (let i = this.opts.bands.length - 1; i >= 0; i--) {
      let band = this.opts.bands[i],
        amount = this.calculateTaxForBand(taxable, band)

      total += amount

      if (amount > 0) taxable = band.min
    }

    return round(total)
  }

  /**
   * Calculate the amount of monthly Tax given the gross income
   */
  month(): number {
    return round(this.annual() / 12)
  }

  /**
   * Calculate the amount of weekly Tax given the gross income
   */
  week(): number {
    return round(this.annual() / 52)
  }

  /**
   * Calculate the amount of daily Tax given the gross income
   */
  day(): number {
    return round(this.week() / 7)
  }
}
