import { BandInterface } from './BandInterface'

export interface IncomeTaxDataInterface {
  TAX_FREE_ALLOWANCE: number
  TAX_FREE_ALLOWANCE_LIMIT: number
  TAX_FREE_ALLOWANCE_UPPER_LIMIT: number
  TAX_FREE_ALLOWANCE_LIMIT_RATE: number
  INCOME_TAX_BANDS: BandInterface[]
}
