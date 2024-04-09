import styled from 'styled-components'

const LabelElement = styled.label`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: ${props => props.theme.palette.secondary};
`

function Label({ children, htmlFor }) {

  return (
    <LabelElement htmlFor={htmlFor}>
      {children}
    </LabelElement>
  )
}

export default Label
