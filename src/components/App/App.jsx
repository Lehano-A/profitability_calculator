import MajorPage from '../pages/MajorPage/MajorPage'
import GlobalStyle from '../../globalStyles'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../../theme/theme'
import { useEffect, useState } from 'react'
import {
  CurrentThemeContext,
  CurrentSizeScreenContext,
  UserDeviceContext,
  MonetaryUnitContext,
  CalculationInterestRateContext,
  InputAmountInvestmentContext,
  InputInvestmentPeriodContext,
  ListGeneralСalculationContext,
} from '../../contexts/contexts'

function App() {
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

  useEffect(() => {
    window.addEventListener('resize', () => {
      setCurrentSizeScreen({ width: window.innerWidth })
    })

    return () =>
      window.addEventListener('resize', () => {
        setCurrentSizeScreen({ width: window.innerWidth })
      })
  }, [])

  useEffect(() => {
    if (/iPhone|iPad/i.test(navigator.userAgent)) {
      setUserDevice('mobile')
    } else {
      setUserDevice('pc')
    }
  }, [])

  return (
    <CurrentThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <CurrentSizeScreenContext.Provider value={currentSizeScreen}>
        <UserDeviceContext.Provider value={userDevice}>
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
                    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
                      <GlobalStyle />
                      <MajorPage />
                    </ThemeProvider>
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

export default App
