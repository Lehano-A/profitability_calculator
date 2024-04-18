import InputAmountInvestment from '../Form/InputAmountInvestment/InputAmountInvestment'
import Form from '../Form/Form/Form'
import MonetaryUnit from '../Form/MonetaryUnit/MonetaryUnit'
import InputTypeDeposit from '../Form/InputTypeDeposit/InputTypeDeposit'
import Header from '../Header/Header'
import styled from 'styled-components'
import InputInvestmentPeriod from '../Form/InputInvestmentPeriod/InputInvestmentPeriod'
import CalculationInterestRate from '../Form/CalculationInterestRate/CalculationInterestRate'
import StartEndInvesting from '../Form/StartEndInvesting/StartEndInvesting'
import ListGeneralСalculation from '../Form/ListGeneralСalculation/ListGeneralСalculation'

const CommonBox = styled.div`
  margin: 60px 20px 0;
`

const BoxTypeDepositAndMonetaryUnit = styled.div`
  @media (min-width: 640px) {
    display: flex;
    justify-content: start;
    align-items: last baseline;

    & > :first-child {
      margin-right: 40px;
    }
  }
`

const BoxInvestmentPeriodAndInterestRate = styled.div`
  @media (min-width: 640px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > :first-child {
      margin-right: 40px;
      min-width: 320px;
      width: 100%;
    }

    & > :last-child {
      max-width: 350px;
    }
  }
`

function App() {
  return (
    <CommonBox>
      <Header />

      <Form>
        <BoxTypeDepositAndMonetaryUnit id='boxTypeDepositAndMonetaryUnit'>
          <InputTypeDeposit />
          <MonetaryUnit />
        </BoxTypeDepositAndMonetaryUnit>

        <InputAmountInvestment />

        <BoxInvestmentPeriodAndInterestRate id='boxInvestmentPeriodAndInterestRate'>
          <InputInvestmentPeriod />
          <CalculationInterestRate />
        </BoxInvestmentPeriodAndInterestRate>

        <StartEndInvesting />
        <ListGeneralСalculation />
      </Form>
    </CommonBox>
  )
}

export default App
