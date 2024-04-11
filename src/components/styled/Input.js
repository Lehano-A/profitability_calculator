import styled from 'styled-components'

const Input = styled.input`
  height: 48px;
  max-width: 280px;
  width: 100%;
  border: ${props => props.theme.palette.shades.secondary[200]} ${props => props.theme.elements.input.border.width}px solid;
  border-radius: ${props => props.theme.elements.input.border.radius}px;
  padding: 0 0 0 17px;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
`

export default Input
