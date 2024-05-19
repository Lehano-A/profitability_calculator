import styled from 'styled-components'
import StyledSpan from '../../styled/StyledSpan'
import { interestRates, fillInvestmentMonthesInterestRates } from './interestRates'
import { useState, useEffect, useContext } from 'react'
import {
  CalculationInterestRateContext,
  InputInvestmentPeriodContext,
  MonetaryUnitContext,
} from '../../../contexts/contexts'
import ButtonChangeInterestRate from '../../ButtonChangeInterestRate/ButtonChangeInterestRate'

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 22px;
  min-height: 106px;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette.box};

  @media (min-width: 1200px) {
    max-width: 200px;
  }
`

const Span = styled(StyledSpan)`
  line-height: 1.31;
`

const BoxOutput = styled.div`
  display: flex;
  align-items: first baseline;
`

const Output = styled.output`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.17;

  color: ${(props) => props.theme.palette.output.value};

  &::after {
    content: '%';
    margin-right: 0.5rem; /* имитация пробела */
  }
`

const UnitMeasurement = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme.palette.output.value};
`

function CalculationInterestRate() {
  const { currentMonetaryUnit } = useContext(MonetaryUnitContext)
  const { valueFromInputRangeInvestmentPeriod } = useContext(InputInvestmentPeriodContext)
  const { multiplicationValue, setCurrentAnnualInterestRate } = useContext(CalculationInterestRateContext)
  const [сurrentInterestRatePerDay, setCurrentInterestRatePerDay] = useState('')

  useEffect(() => {
    fillInvestmentMonthesInterestRates()
  }, [])

  useEffect(() => {
    if (valueFromInputRangeInvestmentPeriod) {
      const currentInterestRate =
        interestRates[currentMonetaryUnit][valueFromInputRangeInvestmentPeriod] * multiplicationValue
      setCurrentAnnualInterestRate(currentInterestRate) // текущая годовая %-я ставка

      const currentInterestRatePerDay = calculateInterestRatePerDay(currentInterestRate) // текущая дневная %-я ставка
      setCurrentInterestRatePerDay(currentInterestRatePerDay)
    }
  }, [currentMonetaryUnit, valueFromInputRangeInvestmentPeriod, multiplicationValue])

  function calculateInterestRatePerDay(interestRate) {
    const calculatedInterestRatePerDay = interestRate / 365
    return calculatedInterestRatePerDay.toFixed(currentMonetaryUnit === 'BTC' ? 7 : 4)
  }

  return (
    <Box id='componentCalculationInterestRate'>
      <ButtonChangeInterestRate />

      <Span as='span'>Процентная ставка</Span>
      <BoxOutput>
        <Output id='interestRate' htmlFor='inputNumberAmountInvestment inputRangeInvestmentPeriod'>
          {сurrentInterestRatePerDay}
        </Output>
        <UnitMeasurement>в день</UnitMeasurement>
      </BoxOutput>
    </Box>
  )
}

export default CalculationInterestRate
