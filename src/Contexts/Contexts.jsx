import { createContext } from 'react'

const CurrentThemeContext = createContext()
const CurrentSizeScreenContext = createContext()
const UserDeviceContext = createContext()
const MonetaryUnitContext = createContext()
const CalculationInterestRateContext = createContext()
const InputAmountInvestmentContext = createContext()
const InputInvestmentPeriodContext = createContext()

export {
  CurrentThemeContext,
  CurrentSizeScreenContext,
  UserDeviceContext,
  MonetaryUnitContext,
  CalculationInterestRateContext,
  InputAmountInvestmentContext,
  InputInvestmentPeriodContext,
}
