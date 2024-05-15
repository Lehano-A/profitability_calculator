import styled from 'styled-components'
import StyledSpan from '../../styled/StyledSpan'
import { interestRates, fillInvestmentMonthesInterestRates } from './interestRates'
import { useState, useEffect, useContext } from 'react'
import { InputInvestmentPeriodContext, MonetaryUnitContext } from '../../../contexts/contexts'

const Box = styled.div`
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

  const [interestRatePerDay, setInterestRatePerDay] = useState('')

  useEffect(() => {
    fillInvestmentMonthesInterestRates(currentMonetaryUnit)

    const currentInterestRatePerDay = calculateInterestRatePerDay(
      currentMonetaryUnit,
      valueFromInputRangeInvestmentPeriod,
    )

    setInterestRatePerDay(currentInterestRatePerDay)
  }, [currentMonetaryUnit, valueFromInputRangeInvestmentPeriod])

  function calculateInterestRatePerDay(currentMonetaryUnit, valueFromInputRangeInvestmentPeriod) {
    return Number(interestRates[currentMonetaryUnit][valueFromInputRangeInvestmentPeriod] / 365).toFixed(
      currentMonetaryUnit === 'BTC' ? 7 : 4,
    )
  }

  return (
    <Box id='componentCalculationInterestRate'>
      <Span as='span'>Процентная ставка</Span>

      <BoxOutput>
        <Output id='interestRate' htmlFor='inputNumberAmountInvestment inputRangeInvestmentPeriod'>
          {interestRatePerDay}
        </Output>
        <UnitMeasurement>в день</UnitMeasurement>
      </BoxOutput>
    </Box>
  )
}

export default CalculationInterestRate
