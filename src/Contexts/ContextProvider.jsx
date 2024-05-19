import { useState } from 'react'
import {
  CurrentThemeContext,
  CurrentSizeScreenContext,
  UserDeviceContext,
  MonetaryUnitContext,
  CalculationInterestRateContext,
  InputAmountInvestmentContext,
  InputInvestmentPeriodContext,
  ListGeneralСalculationContext,
} from './contexts'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../theme/theme'

function ContextProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('light')
  const [currentSizeScreen, setCurrentSizeScreen] = useState({ width: window.innerWidth })
  const [userDevice, setUserDevice] = useState(navigator.userAgent)
  const [valueFromInputRangeInvestmentPeriod, setValueFromInputRangeInvestmentPeriod] = useState('')
  const [currentMonetaryUnit, setCurrentMonetaryUnit] = useState('BTC')
  const [currentAnnualInterestRate, setCurrentAnnualInterestRate] = useState('')
  const [amountInvestment, setAmountInvestment] = useState(10000)
  const [totalAmountWithProfit, setTotalAmountWithProfit] = useState('')
  const [investmentProfit, setInvestmentProfit] = useState('')
  const [multiplicationValue, setMultiplicationValue] = useState(3)

  return (
    <CurrentThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <CurrentSizeScreenContext.Provider value={{ currentSizeScreen, setCurrentSizeScreen }}>
        <UserDeviceContext.Provider value={{ userDevice, setUserDevice }}>
          <MonetaryUnitContext.Provider value={{ currentMonetaryUnit, setCurrentMonetaryUnit }}>
            <CalculationInterestRateContext.Provider
              value={{
                currentAnnualInterestRate,
                setCurrentAnnualInterestRate,
                multiplicationValue,
                setMultiplicationValue,
              }}
            >
              <InputAmountInvestmentContext.Provider value={{ amountInvestment, setAmountInvestment }}>
                <InputInvestmentPeriodContext.Provider
                  value={{ valueFromInputRangeInvestmentPeriod, setValueFromInputRangeInvestmentPeriod }}
                >
                  <ListGeneralСalculationContext.Provider
                    value={{ totalAmountWithProfit, setTotalAmountWithProfit, investmentProfit, setInvestmentProfit }}
                  >
                    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>{children}</ThemeProvider>
                  </ListGeneralСalculationContext.Provider>
                </InputInvestmentPeriodContext.Provider>
              </InputAmountInvestmentContext.Provider>
            </CalculationInterestRateContext.Provider>
          </MonetaryUnitContext.Provider>
        </UserDeviceContext.Provider>
      </CurrentSizeScreenContext.Provider>
    </CurrentThemeContext.Provider>
  )
}

export default ContextProvider
