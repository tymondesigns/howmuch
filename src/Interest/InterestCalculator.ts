import { round } from 'chitu'

export class InterestCalculator {
  private opts

  constructor(options) {
    this.opts = options
  }

  /**
   * Get the monthly interest rate
   */
  getMonthlyInterestRate(): number {
    return this.opts.rate / 1200
  }

  /**
   * Calculate the monthly repayment amount
   */
  monthlyRepayment(): number {
    let rate = this.getMonthlyInterestRate()

    return round(this.opts.amount * rate / (1 - Math.pow(1 / (1 + rate), this.opts.term)))
  }

  /**
   * Calculate the total amount payable including interest
   */
  totalRepayment(): number {
    return round(this.monthlyRepayment() * this.opts.term)
  }

  /**
   * Calculate the total amount of interest payable
   */
  totalInterest(): number {
    return round(this.totalRepayment() - this.opts.amount)
  }
}
