import { incomeTax as incomeTax1516, nationalInsurance as nationalInsurance1516 } from './15-16'
import { incomeTax as incomeTax1617, nationalInsurance as nationalInsurance1617 } from './16-17'
import { incomeTax as incomeTax1718, nationalInsurance as nationalInsurance1718 } from './17-18'
import { BandInterface } from '../Contracts'

export default {
  '15/16': {
    incomeTax: incomeTax1516,
    nationalInsurance: nationalInsurance1516
  },
  '16/17': {
    incomeTax: incomeTax1617,
    nationalInsurance: nationalInsurance1617
  },
  '17/18': {
    incomeTax: incomeTax1718,
    nationalInsurance: nationalInsurance1718
  }
}
