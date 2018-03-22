import { round, type } from 'chitu'
import { IncomeTaxCalculator } from './IncomeTaxCalculator'
import { NationalInsuranceCalculator } from './NationalInsuranceCalculator'
import data from './data'

export class Paye {
  private opts: any
  private getNet: boolean = false

  constructor(options) {
    this.opts = {
      daysPerWeek: 5,
      year: '17/18',
      ...options
    }
  }

  /**
   * Get the IncomeTaxCalculator.
   */
  incomeTax(): IncomeTaxCalculator {
    return new IncomeTaxCalculator(this.opts.gross, this.data('incomeTax'))
  }

  /**
   * Get the NationalInsuranceCalculator.
   */
  nationalInsurance(): NationalInsuranceCalculator {
    return new NationalInsuranceCalculator(
      this.opts.gross,
      this.opts.selfEmployed,
      this.data('nationalInsurance')
    )
  }

  for(year: string): Paye {
    this.opts.year = year

    return this
  }

  data(key) {
    return type.isString(key) ? data[this.opts.year][key] : key
  }

  /**
   * Setter to return net instead of tax.
   */
  net() {
    this.getNet = true

    return this
  }

  /**
   * Get the net amount after tax deductions.
   */
  private calcNet(): number {
    return this.opts.gross - this.totalTax()
  }

  /**
   * Get the totoal combined tax to be deducted.
   */
  totalTax(): number {
    return this.incomeTax().annual() + this.nationalInsurance().annual()
  }

  /**
   * Calculate the amount of tax to be deducted, or the net income after deductions.
   */
  calculate(): number {
    return this.getNet ? this.calcNet() : this.totalTax()
  }

  /**
   * Calculate the yearly tax/income.
   */
  annual(): number {
    return round(this.calculate())
  }

  /**
   * Calculate the monthly tax/income.
   */
  month(): number {
    return round(this.annual() / 12)
  }

  /**
   * Calculate the weekly tax/income.
   */
  week(): number {
    return round(this.annual() / 52)
  }

  /**
   * Calculate the daily tax/income.
   */
  day(): number {
    return round(this.week() / this.opts.daysPerWeek)
  }

  /**
   * Get the yield of the net income vs gross income.
   */
  percentage(): number {
    return round(this.calcNet() / this.opts.amount * 100)
  }
}
