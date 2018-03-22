import { Paye } from './Paye'
import { InterestCalculator } from './Interest'

const paye = opts => new Paye(opts)
const interest = opts => new InterestCalculator(opts)

export {
  paye,
  interest
}
