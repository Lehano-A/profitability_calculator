import styled from 'styled-components'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 348px;
  background-color: ${(props) => props.theme.palette.shades.secondary[100]};
  margin: 0 -20px;
  line-height: 1.31;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  margin: 40px 0 30px;
  padding: 0;
`

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  color: ${(props) => props.theme.palette.secondary};

  & > span:last-child {
    white-space: nowrap;
  }

  &:first-child {
    margin-bottom: 10px;
  }

  &:nth-child(2) {
    padding-bottom: 18px;
    border-bottom: 2px solid ${(props) => props.theme.palette.shades.secondary[200]};
  }

  &:last-child {
    display: flex;
    align-items: center;
    padding-top: 20px;
  }

  /* 9,150 BTC */
  &:last-child > output:last-child {
    font-weight: 900;
    line-height: 1.17;
    color: ${(props) => props.theme.palette.tertiary};

    @media (min-width: 480px) {
      font-size: 2.4rem;
    }
  }
`

function ListGeneralСalculation() {
  return (
    <Box id='componentListGeneralСalculation'>
      <List>
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
          <output htmlFor='inputRangeInvestmentPeriod interestRate'>9,150 BTC</output>
        </Item>
      </List>

      <ButtonSubmit />
    </Box>
  )
}

export default ListGeneralСalculation
