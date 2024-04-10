import InputAmountInvestment from '../Form/Form/InputAmountInvestment/InputAmountInvestment'
import Form from '../Form/Form/Form'
import MonetaryUnit from '../Form/MonetaryUnit/MonetaryUnit'
import InputTypeDeposit from '../Form/InputTypeDeposit/InputTypeDeposit'
import Header from '../Header/Header'
import styled from 'styled-components'

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
      </Form>
    </CommonBox>
  )
}

export default App
