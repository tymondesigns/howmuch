import { TaxBandCalculator } from './TaxBandCalculator'
import { NationalInsuranceDataInterface } from './Contracts'

export class NationalInsuranceCalculator extends TaxBandCalculator {
  private gross: number
  private data: NationalInsuranceDataInterface

  constructor(gross: number, selfEmployed: boolean = false, data: NationalInsuranceDataInterface) {
    super({ gross, bands: selfEmployed ? data.NI_BANDS_SE : data.NI_BANDS })
  }
}
