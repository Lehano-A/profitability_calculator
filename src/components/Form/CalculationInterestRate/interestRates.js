// представление значений идёт в годовых процентах

const BTC = {
  3: 0.029,
  6: 0.033,
  9: 0.036,
  12: 0.038,
}

const CNY = {
  3: 4,
  6: 4.4,
  9: 4.5,
  12: 4.6,
}

const RUB = {
  3: 13.4,
  6: 14.15,
  9: 14.4,
  12: 15.91,
}

const EUR = {
  3: 3,
  6: 3.5,
  9: 3.6,
  12: 3.7,
}

const USD = {
  3: 3.1,
  6: 3.4,
  9: 3.6,
  12: 3.8,
}

const interestRates = { BTC, CNY, RUB, EUR, USD }

function fillInvestmentMonthesInterestRates(monetaryUnit) {
  interestRates[monetaryUnit][1] = interestRates[monetaryUnit][3]
  interestRates[monetaryUnit][2] = interestRates[monetaryUnit][3]
  interestRates[monetaryUnit][4] = interestRates[monetaryUnit][6]
  interestRates[monetaryUnit][5] = interestRates[monetaryUnit][6]
  interestRates[monetaryUnit][7] = interestRates[monetaryUnit][9]
  interestRates[monetaryUnit][8] = interestRates[monetaryUnit][9]
  interestRates[monetaryUnit][10] = interestRates[monetaryUnit][12]
  interestRates[monetaryUnit][11] = interestRates[monetaryUnit][12]
}

export { BTC, CNY, RUB, EUR, USD, interestRates, fillInvestmentMonthesInterestRates }
