import { IncomeTaxCalculator } from './IncomeTaxCalculator'
import { incomeTax as incomeTax1516 } from './data/15-16'
import { incomeTax as incomeTax1617 } from './data/16-17'
import { incomeTax as incomeTax1718 } from './data/17-18'

describe('IncomeTaxCalculator 2015/2016', () => {
  test('it should calculate income tax for £20,000', () => {
    let calc = new IncomeTaxCalculator(20000, incomeTax1516)
    expect(calc.annual()).toEqual(1878.2)
    expect(calc.month()).toEqual(156.52)
    expect(calc.week()).toEqual(36.12)
    expect(calc.day()).toEqual(5.16)
  })

  test('it should get total taxable for £20,000', () => {
    let calc = new IncomeTaxCalculator(20000, incomeTax1516)
    expect(calc.getTotalTaxable()).toEqual(9391)
  })

  // test('it should calculate income tax for £150,000', () => {
  //   let calc = new IncomeTaxCalculator(150000, incomeTax1516)
  //   expect(calc.annual()).toEqual(53643)
  //   expect(calc.month()).toEqual(4470.25)
  //   expect(calc.week()).toEqual(1031.6)
  //   expect(calc.day()).toEqual(206.32)
  // })

  // test('it should get total taxable for £150,000', () => {
  //   let calc = new IncomeTaxCalculator(150000, incomeTax1516)
  //   expect(calc.getTotalTaxable()).toEqual(150000)
  // })
})

describe('IncomeTaxCalculator 2016/2017', () => {
  test('it should calculate income tax for £20,000', () => {
    let calc = new IncomeTaxCalculator(20000, incomeTax1617)
    expect(calc.annual()).toEqual(1798.2)
    expect(calc.month()).toEqual(149.85)
    expect(calc.week()).toEqual(34.58)
    expect(calc.day()).toEqual(4.94)
  })

  test('it should get total taxable for £20,000', () => {
    let calc = new IncomeTaxCalculator(20000, incomeTax1617)
    expect(calc.getTotalTaxable()).toEqual(8991)
  })
})

describe('IncomeTaxCalculator 2017/2018', () => {
  test('it should calculate income tax for £20,000', () => {
    let calc = new IncomeTaxCalculator(20000, incomeTax1718)
    expect(calc.annual()).toEqual(1698.2)
    expect(calc.month()).toEqual(141.52)
    expect(calc.week()).toEqual(32.66)
    expect(calc.day()).toEqual(4.67)
  })

  test('it should get total taxable for £20,000', () => {
    let calc = new IncomeTaxCalculator(20000, incomeTax1718)
    expect(calc.getTotalTaxable()).toEqual(8491)
  })
})
