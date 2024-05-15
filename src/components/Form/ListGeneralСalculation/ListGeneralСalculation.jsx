import styled from 'styled-components'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'
import HistogramInvestment from './Histogram/Histogram'
import StyledOutput from '../../styled/StyledOutput'
import { useContext, useEffect, useState } from 'react'
import {
  CalculationInterestRateContext,
  InputAmountInvestmentContext,
  InputInvestmentPeriodContext,
  MonetaryUnitContext,
} from '../../../contexts/contexts'

const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  line-height: 1.31;

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 960px) {
    width: 100%;
    justify-content: end;
  }
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 40px 0 30px;
  padding: 0;

  @media (min-width: 640px) {
    margin: 0 0 30px 0;
  }
`

const ListHistograms = styled(StyledList)`
  display: none;

  @media (min-width: 960px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
  }
`

const ListInvestment = styled(StyledList)`
  & > span:last-child {
    white-space: nowrap;
  }

  & li:nth-child(1) {
    margin-bottom: 10px;
  }

  & li:nth-child(2) {
    padding-bottom: 18px;
    border-bottom: 2px solid ${(props) => props.theme.palette.input.border};
  }

  & li:last-child {
    display: flex;
    align-items: center;
    padding-top: 20px;
  }
`

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  color: ${(props) => props.theme.palette.list.key};

  @media (min-width: 960px) {
    font-size: 1.6rem;
    line-height: 1.31;
  }

  @media (min-width: 1200px) {
    font-size: 1.8rem;
    line-height: 1.17;
  }
`

/* 9,150 BTC */
const Output = styled(StyledOutput)`
  color: ${(props) => props.theme.palette.output.value};

  @media (min-width: 480px) {
    font-size: 2.4rem;
  }

  @media (min-width: 960px) {
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.4rem;
  }
`

function ListGeneralСalculation() {
  const { currentMonetaryUnit } = useContext(MonetaryUnitContext)
  const { amountInvestment } = useContext(InputAmountInvestmentContext)
  const { valueFromInputRangeInvestmentPeriod } = useContext(InputInvestmentPeriodContext)
  const { currentAnnualInterestRate } = useContext(CalculationInterestRateContext)

  const [totalProfit, setTotalProfit] = useState('')

  useEffect(() => {
    calculateTheTotalProfit()
  }, [currentAnnualInterestRate, currentMonetaryUnit, amountInvestment, valueFromInputRangeInvestmentPeriod])

  function calculateTheTotalProfit() {
    const totalProfit = (Number(currentAnnualInterestRate) / 100) * Number(amountInvestment) + Number(amountInvestment)

    setTotalProfit(totalProfit.toFixed(currentMonetaryUnit === 'BTC' ? 5 : 2)) // из-за локали может по-разному отображаться значение, неявно обрезая число дроби
  }

  return (
    <BoxList>
      <ListHistograms>
        <Item>
          <HistogramInvestment type='inputNumberAmountInvestment' />
        </Item>

        <Item>
          <HistogramInvestment type='investmentWithProfit' />
        </Item>
      </ListHistograms>

      <ListInvestment>
        <Item>
          <span>Инвестиция</span>
          <output htmlFor='inputNumberAmountInvestment'>
            {Number(amountInvestment).toLocaleString('en-US')} {currentMonetaryUnit}
          </output>
        </Item>

        <Item>
          <span>Процент прибыли</span>
          <output htmlFor='inputNumberAmountInvestment inputRangeInvestmentPeriod interestRate'>
            {currentAnnualInterestRate} %
          </output>
        </Item>

        <Item>
          <span>
            Прибыль с <br /> инвестиции
          </span>
          <Output htmlFor='inputRangeInvestmentPeriod interestRate'>
            {Number(totalProfit).toLocaleString('en-US')} {currentMonetaryUnit}
          </Output>
        </Item>
      </ListInvestment>

      <ButtonSubmit />
    </BoxList>
  )
}

export default ListGeneralСalculation
