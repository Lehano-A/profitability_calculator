import styled from 'styled-components'
import StyledLabel from '../../../styled/StyledLabel'
import StyledOutput from '../../../styled/StyledOutput'
import '../../../../animations.css'
const Box = styled.div`
  display: flex;
  height: 100%;
`

const BoxMeterInvestment = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  &:first-child {
    margin-right: 40px;
  }
`

const MeterHidden = styled.meter`
  visibility: hidden;
  width: 0;
  height: 0;
`

const MeterInvestment = styled.div`
  background-color: #fff;
  box-shadow: 20px 10px 60px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
  animation: change-height-amount-investment 1s ease-in-out forwards;
`

const MeterInvestmentProfit = styled(MeterInvestment)`
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 52.16%, rgba(251, 237, 16, 1) 47.84%);
  animation: change-height-with-profit 1s ease-in-out forwards;
`

const ItemName = styled(StyledLabel)`
  font-size: 1.4rem;
  line-height: 1.31;
  animation: to-full-opacity 1s ease-in forwards;
`

const Output = styled(StyledOutput)`
  font-size: 1.6rem;
  margin-bottom: 20px;
  animation: to-full-opacity 1s ease-out;
`

function HistogramInvestment() {
  return (
    <Box>
      <BoxMeterInvestment>
        <ItemName as='span'>Инвестировали</ItemName>
        <Output>10,000 BTC</Output>
        <MeterHidden min='0' max='10000' value='10000' />
        <MeterInvestment />
      </BoxMeterInvestment>

      <BoxMeterInvestment>
        <ItemName as='span'>Получаете</ItemName>
        <Output>19,150 BTC</Output>
        <MeterHidden min='0' max='10000' value='19150' />
        <MeterInvestmentProfit />
      </BoxMeterInvestment>
    </Box>
  )
}

export default HistogramInvestment
