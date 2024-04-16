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

function App() {
  return (
    <CommonBox>
      <Header />

      <Form>
        <InputTypeDeposit />
        <MonetaryUnit />
        <InputAmountInvestment />
        <InputInvestmentPeriod />
        <CalculationInterestRate />
        <StartEndInvesting />
        <ListGeneralСalculation />
      </Form>
    </CommonBox>
  )
}

export default App
