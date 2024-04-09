import Form from '../Form/Form/Form'
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
      </Form>
    </CommonBox>
  )
}

export default App
