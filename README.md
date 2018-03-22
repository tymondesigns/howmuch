# 💰 HowMuch
Some useful financial calculators

[![Travis](https://img.shields.io/travis/tymondesigns/howmuch.svg?style=flat-square)](https://travis-ci.org/tymondesigns/howmuch)

```
import { paye, interest } from 'howmuch'

paye({ gross: 20000 }).for('17/18').net().annual()

interest({ amount: 5000, rate: 0.12, term: 24 }).monthlyRepayment()
```
