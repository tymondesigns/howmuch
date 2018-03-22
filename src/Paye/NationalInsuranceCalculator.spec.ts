import { NationalInsuranceCalculator } from './NationalInsuranceCalculator'
import { nationalInsurance as nationalInsurance1516 } from './data/15-16'

describe('NationalInsuranceCalculator 2015/2016', () => {
  test('it should calculate national insurance', () => {
    let calc = new NationalInsuranceCalculator(20000, false, nationalInsurance1516)
    expect(calc.annual()).toEqual(1432.8)
    expect(calc.month()).toEqual(119.4)
    expect(calc.week()).toEqual(27.55)
    expect(calc.day()).toEqual(3.94)
  })

  test('it should calculate national insurance for self employed', () => {
    let calc = new NationalInsuranceCalculator(20000, true, nationalInsurance1516)
    expect(calc.annual()).toEqual(1220.2)
    expect(calc.month()).toEqual(101.68)
    expect(calc.week()).toEqual(23.47)
    expect(calc.day()).toEqual(3.35)
  })
})
