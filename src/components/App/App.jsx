import Header from '../Header/Header'
import styled from 'styled-components'

const CommonBox = styled.div`
  margin: 60px 20px 0;
`

function App() {
  return (
    <CommonBox>
      <Header />
    </CommonBox>
  )
}

export default App
