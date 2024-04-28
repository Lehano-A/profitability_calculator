import styled from 'styled-components'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'
import HistogramInvestment from './Histogram/Histogram'
import StyledOutput from '../../styled/StyledOutput'

const BoxList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  line-height: 1.31;

  @media (min-width: 960px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
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
    border-bottom: 2px solid ${(props) => props.theme.palette.shades.secondary[200]};
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
  color: ${(props) => props.theme.palette.secondary};

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
  return (
    <BoxList>
      <ListHistograms>
        <Item>
          <HistogramInvestment type='amountInvestment' />
        </Item>

        <Item>
          <HistogramInvestment type='investmentWithProfit' />
        </Item>
      </ListHistograms>

      <ListInvestment>
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
      </ListInvestment>

      <ButtonSubmit />
    </BoxList>
  )
}

export default ListGeneralСalculation
