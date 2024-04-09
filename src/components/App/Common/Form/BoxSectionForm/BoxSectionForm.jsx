import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: column;
`

function BoxSectionForm({ children }) {

  return (
    <Box>
      {children}
    </Box>
  )
}

export default BoxSectionForm
