import styled from 'styled-components'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'
import HistogramInvestment from './HistogramInvestment/HistogramInvestment'
import StyledOutput from '../../styled/StyledOutput'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 348px;
  background-color: ${(props) => props.theme.palette.shades.secondary[100]};
  line-height: 1.31;
  padding: 0 20px;

  @media (min-width: 960px) {
    min-height: 525px;
    min-width: 280px;
    max-width: 450px;
    width: 100%;
    padding-bottom: 90px;
    justify-content: flex-end;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px 0 30px;
  padding: 0;
`

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  color: ${(props) => props.theme.palette.secondary};

  @media (min-width: 960px) {
    font-size: 1.6rem;
    line-height: 1.31;
  }

  & > span:last-child {
    white-space: nowrap;
  }

  &:first-child {
    display: none;
    justify-content: center;
    margin-bottom: 30px;

    @media (min-width: 960px) {
      display: flex;
    }
  }

  &:nth-child(2) {
    margin-bottom: 10px;
  }

  &:nth-child(3) {
    padding-bottom: 18px;
    border-bottom: 2px solid ${(props) => props.theme.palette.shades.secondary[200]};
  }

  &:last-child {
    display: flex;
    align-items: center;
    padding-top: 20px;
  }
`

/* 9,150 BTC */
const Output = styled(StyledOutput)`
  @media (min-width: 480px) {
    font-size: 2.4rem;
  }

  @media (min-width: 960px) {
    font-size: 2rem;
  }
`

function ListGeneralСalculation() {
  return (
    <Box id='componentListGeneralСalculation' form='formCalculatingProfitability'>
      <List>
        <Item>
          <HistogramInvestment />
        </Item>

        <Item>
          <span>Инвестиция</span>
          <output htmlFor='amountInvestment'>10,000 BTC</output>
        </Item>
        <Item>
          <span>Процент прибыли</span>
          <output htmlFor='amountInvestment inputRangeInvestmentPeriod interestRate'>91.5 %</output>
        </Item>
        <Item>
          <span>
            Прибыль с <br /> инвестиции
          </span>
          <Output htmlFor='inputRangeInvestmentPeriod interestRate'>9,150 BTC</Output>
        </Item>
      </List>

      <ButtonSubmit />
    </Box>
  )
}

export default ListGeneralСalculation
