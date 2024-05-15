// представление значений идёт в годовых процентах

const BTC = {
  3: 0.29,
  6: 0.33,
  9: 0.36,
  12: 0.38,
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

function fillInvestmentMonthesInterestRates() {
  Object.keys(interestRates).forEach((key) => {
    interestRates[key][1] = interestRates[key][3]
    interestRates[key][2] = interestRates[key][3]
    interestRates[key][4] = interestRates[key][6]
    interestRates[key][5] = interestRates[key][6]
    interestRates[key][7] = interestRates[key][9]
    interestRates[key][8] = interestRates[key][9]
    interestRates[key][10] = interestRates[key][12]
    interestRates[key][11] = interestRates[key][12]
  })
}

export { BTC, CNY, RUB, EUR, USD, interestRates, fillInvestmentMonthesInterestRates }
