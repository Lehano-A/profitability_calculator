import styled from 'styled-components'

const StyledInput = styled.input`
  border: ${(props) => props.theme.palette.input.border} ${(props) => props.theme.elements.input.border.width}px solid;
  border-radius: ${(props) => props.theme.elements.input.border.radius}px;
  padding: 0 0 0 17px;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  background-color: transparent;
  color: ${(props) => props.theme.palette.input.value};

  @media (min-width: 320px) {
    height: 48px;
  }

  @media (min-width: 640px) {
    height: 54px;
  }

  &:focus {
    border-color: ${(props) => props.theme.getParamsFocus('input')};
  }
`

export default StyledInput
