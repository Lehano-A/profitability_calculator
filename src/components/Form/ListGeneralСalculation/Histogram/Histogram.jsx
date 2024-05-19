import styled, { css } from 'styled-components'
import StyledOutput from '../../../styled/StyledOutput'
import StyledSpan from '../../../styled/StyledSpan'
import { useContext, useEffect, useState } from 'react'
import {
  InputAmountInvestmentContext,
  ListGeneralСalculationContext,
  MonetaryUnitContext,
} from '../../../../contexts/contexts'
import {
  changeHeightAmountInvestmentWidth120,
  changeHeightAmountInvestmentWidth160,
  changeHeightWithProfitWidth120,
  changeHeightWithProfitWidth160,
} from '../../../../animations.js'
import addLocale from '../../../../utils/addLocale.js'

const BoxMeterInvestment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 960px) {
    min-width: 135px;
  }

  @media (min-width: 1200px) {
    min-width: 170px;
  }
`

const MeterHidden = styled.meter`
  visibility: hidden;
  width: 0;
  height: 0;
`

const StyledDivAsMeter = styled.div`
  max-height: 400px;
  box-shadow: 20px 10px 60px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
  background: ${(props) => props.theme.palette.histogram.bg.primary};
`

const HistogramInvestment = styled(StyledDivAsMeter)`
  @media (min-width: 960px) {
    animation: ${changeHeightAmountInvestmentWidth120} 1s ease-in-out forwards;
  }

  @media (min-width: 1200px) {
    animation: ${changeHeightAmountInvestmentWidth160} 1s ease-in-out forwards;
  }
`

const HistogramInvestmentProfit = styled(StyledDivAsMeter)`
  background: ${(props) => props.theme.getParamsHistogramBackground(props.$paramsElement.endGradient)};

  @media (min-width: 960px) {
    animation: ${(props) => {
      return css`
        ${changeHeightWithProfitWidth120({ height: props.$paramsElement.height })} 1s ease-in-out forwards
      `
    }};
  }

  @media (min-width: 1200px) {
    animation: ${(props) => {
      return css`
        ${changeHeightWithProfitWidth160({ height: props.$paramsElement.height })} 1s ease-in-out forwards
      `
    }};
  }
`

const ItemName = styled(StyledSpan)`
  font-size: 1.4rem;
  line-height: 1.31;
  animation: to-full-opacity 1s ease-in-out;

  @media (min-width: 1200px) {
    font-size: 1.8rem;
    line-height: 1.17;
  }
`

const Output = styled(StyledOutput)`
  font-size: 1.6rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.palette.output.value};
  animation: to-full-opacity 1s ease-in-out;

  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`

function Histogram({ type }) {
  const { amountInvestment } = useContext(InputAmountInvestmentContext)
  const { totalAmountWithProfit, investmentProfit } = useContext(ListGeneralСalculationContext)
  const { currentMonetaryUnit } = useContext(MonetaryUnitContext)

  const [paramsElementInvestmentProfit, setParamsElementInvestmentProfit] = useState({
    endGradient: 0,
    height: 0,
  })

  useEffect(() => {
    const percentageProfitFromTotal = (Number(investmentProfit) / Number(totalAmountWithProfit)) * 100

    setParamsElementInvestmentProfit({
      endGradient: Number(percentageProfitFromTotal.toFixed(2)),
      height: 100 + Number(percentageProfitFromTotal.toFixed(2)),
    })
  }, [totalAmountWithProfit])

  return (
    <>
      {type === 'inputNumberAmountInvestment' && (
        <BoxMeterInvestment>
          <ItemName>Инвестировали</ItemName>
          <Output>
            {addLocale(amountInvestment)} {currentMonetaryUnit}
          </Output>
          <MeterHidden min='0' max={amountInvestment} value={amountInvestment} />
          <HistogramInvestment />
        </BoxMeterInvestment>
      )}

      {type === 'investmentWithProfit' && (
        <BoxMeterInvestment>
          <ItemName>Получаете</ItemName>
          <Output>
            {addLocale(totalAmountWithProfit)} {currentMonetaryUnit}
          </Output>
          <MeterHidden min='0' max={totalAmountWithProfit} value={totalAmountWithProfit} />
          <HistogramInvestmentProfit $paramsElement={paramsElementInvestmentProfit} />
        </BoxMeterInvestment>
      )}
    </>
  )
}

export default Histogram
