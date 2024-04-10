import styled from 'styled-components'

const Input = styled.input`
  height: 48px;
  max-width: 280px;
  width: 100%;
  border: ${(props) => props.theme.common.form.border.color} 2px solid;
  border-radius: ${(props) => props.theme.common.form.border.radius};
  padding: 0 0 0 17px;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
`

export default Input
