import { Paye } from './Paye'
import { nationalInsurance as nationalInsurance1516 } from './data/15-16'
import { incomeTax as incomeTax1516 } from './data/15-16'

const DATA: object[] = [
  {
    '15/16': [
      {
        opts: {
          gross: 20000,
          selfEmployed: false
        },
        totalTax: {
          annual: 3311,
          month: 275.92,
          week: 63.67,
          day: 12.73
        },
        netIncome: {
          annual: 16689,
          month: 1390.75,
          week: 320.94,
          day: 64.19
        }
      },
      {
        opts: {
          gross: 50000,
          selfEmployed: false
        },
        totalTax: {
          annual: 13670.6,
          month: 1139.22,
          week: 262.9,
          day: 52.58
        },
        netIncome: {
          annual: 36329.4,
          month: 3027.45,
          week: 698.64,
          day: 139.73
        }
      }
      // {
      //   opts: {
      //     gross: 150000,
      //     selfEmployed: false
      //   },
      //   totalTax: {
      //     annual: 59913.8,
      //     month: 4994.43,
      //     week: 1152.56,
      //     day: 230.51
      //   },
      //   netIncome: {
      //     annual: 90066.8,
      //     month: 7505.57,
      //     week: 1732.05,
      //     day: 346.41
      //   }
      // }
    ],
    '16/17': [
      {
        opts: {
          gross: 20000,
          selfEmployed: false
        },
        totalTax: {
          annual: 3231,
          month: 269.25,
          week: 62.13,
          day: 12.43
        },
        netIncome: {
          annual: 16769,
          month: 1397.42,
          week: 322.48,
          day: 64.5
        }
      },
      {
        opts: {
          gross: 50000,
          selfEmployed: false
        },
        totalTax: {
          annual: 13529.6,
          month: 1127.47,
          week: 260.18,
          day: 52.04
        },
        netIncome: {
          annual: 36470.4,
          month: 3039.2,
          week: 701.35,
          day: 140.27
        }
      },
      {
        opts: {
          gross: 150000,
          selfEmployed: false
        },
        totalTax: {
          annual: 59933.2,
          month: 4994.43,
          week: 1152.56,
          day: 230.51
        },
        netIncome: {
          annual: 90066.8,
          month: 7505.57,
          week: 1732.05,
          day: 346.41
        }
      }
    ],
    '17/18': [
      {
        opts: {
          gross: 20000,
          selfEmployed: false
        },
        totalTax: {
          annual: 3118.52,
          month: 259.88,
          week: 59.97,
          day: 11.99
        },
        netIncome: {
          annual: 16881.48,
          month: 1406.79,
          week: 324.64,
          day: 64.93
        }
      },
      {
        opts: {
          gross: 50000,
          selfEmployed: false
        },
        totalTax: {
          annual: 13219.92,
          month: 1101.66,
          week: 254.23,
          day: 50.85
        },
        netIncome: {
          annual: 36780.08,
          month: 3065.01,
          week: 707.31,
          day: 141.46
        }
      },
      {
        opts: {
          gross: 150000,
          selfEmployed: false
        },
        totalTax: {
          annual: 59823.52,
          month: 4985.29,
          week: 1150.45,
          day: 230.09
        },
        netIncome: {
          annual: 90176.48,
          month: 7514.71,
          week: 1734.16,
          day: 346.83
        }
      }
    ]
  }
]

DATA.forEach(item => {
  for (let year in item) {
    let yearTest = item[year]

    yearTest.forEach((t) => {
      describe(`Paye ${year}`, () => {
        let paye = new Paye({ ...t.opts, year })
        test(`it should calculate the total tax for ${t.opts.gross}`, () => {
          expect(paye.annual()).toEqual(t.totalTax.annual)
          expect(paye.month()).toEqual(t.totalTax.month)
          expect(paye.week()).toEqual(t.totalTax.week)
          expect(paye.day()).toEqual(t.totalTax.day)
        })
        test(`it should calculate the net income for ${t.opts.gross}`, () => {
          expect(paye.net().annual()).toEqual(t.netIncome.annual)
          expect(paye.net().month()).toEqual(t.netIncome.month)
          expect(paye.net().week()).toEqual(t.netIncome.week)
          expect(paye.net().day()).toEqual(t.netIncome.day)
        })
      })
    })
  }
})
