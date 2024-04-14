import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: column;
`

function BoxSectionForm({ children, id = 'boxSectionForm' }) {
  return <Box id={id}>{children}</Box>
}

export default BoxSectionForm
