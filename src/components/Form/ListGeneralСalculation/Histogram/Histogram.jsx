import styled from 'styled-components'
import StyledOutput from '../../../styled/StyledOutput'
import StyledSpan from '../../../styled/StyledSpan'
import '../../../../animations.css'

const BoxMeterInvestment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

const MeterHidden = styled.meter`
  visibility: hidden;
  width: 0;
  height: 0;
`

const StyledDivAsMeter = styled.div`
  max-height: 400px;
  background-color: #fff;
  box-shadow: 20px 10px 60px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
  background: ${(props) => props.theme.palette.histogram.bg.primary};
`

const HistogramInvestment = styled(StyledDivAsMeter)`
  @media (min-width: 960px) {
    animation: change-height-amount-investment-120-width 1s ease-in-out forwards;
  }

  @media (min-width: 1200px) {
    animation: change-height-amount-investment-160-width 1s ease-in-out forwards;
  }
`

const HistogramInvestmentProfit = styled(StyledDivAsMeter)`
  background: ${(props) => props.theme.getParamsHistogramBackground()};

  @media (min-width: 960px) {
    animation: change-height-with-profit-120-width 1s ease-in-out forwards;
  }

  @media (min-width: 1200px) {
    animation: change-height-with-profit-160-width 1s ease-in-out forwards;
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
  return (
    <>
      {type === 'amountInvestment' && (
        <BoxMeterInvestment>
          <ItemName>Инвестировали</ItemName>
          <Output>10,000 BTC</Output>
          <MeterHidden min='0' max='10000' value='10000' />
          <HistogramInvestment />
        </BoxMeterInvestment>
      )}

      {type === 'investmentWithProfit' && (
        <BoxMeterInvestment>
          <ItemName>Получаете</ItemName>
          <Output>19,150 BTC</Output>
          <MeterHidden min='0' max='10000' value='19150' />
          <HistogramInvestmentProfit />
        </BoxMeterInvestment>
      )}
    </>
  )
}

export default Histogram
