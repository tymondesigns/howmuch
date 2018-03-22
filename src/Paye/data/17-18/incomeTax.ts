import { BandInterface } from '../../Contracts'

/**
 * The value that can be earned before paying any tax
 */
const TAX_FREE_ALLOWANCE: number = 11509

/**
 * The amount at which the tax free allowance is reduced
 */
const TAX_FREE_ALLOWANCE_LIMIT: number = 100000

/**
 * The amount at which the tax free allowance is removed
 */
const TAX_FREE_ALLOWANCE_UPPER_LIMIT: number = TAX_FREE_ALLOWANCE_LIMIT + TAX_FREE_ALLOWANCE * 2

/**
 * The rate to apply to the tax free allowance when it reaches the threshold
 */
const TAX_FREE_ALLOWANCE_LIMIT_RATE: number = 0.5

/**
 * The various tax bands
 */
const INCOME_TAX_BANDS: BandInterface[] = [
  { min: 0, rate: 0.2 }, // Basic rate
  { min: 33501, rate: 0.4 }, // Higher Rate
  { min: 150001, rate: 0.45 } // Additional Rate
]

export default {
  TAX_FREE_ALLOWANCE,
  TAX_FREE_ALLOWANCE_LIMIT,
  TAX_FREE_ALLOWANCE_UPPER_LIMIT,
  TAX_FREE_ALLOWANCE_LIMIT_RATE,
  INCOME_TAX_BANDS
}
