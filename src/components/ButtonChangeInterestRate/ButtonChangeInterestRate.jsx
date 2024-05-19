import styled from 'styled-components'
import { useContext } from 'react'
import { CalculationInterestRateContext } from '../../contexts/contexts'
import StyledRadio from '../styled/StyledRadio'

const Fieldset = styled.fieldset`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 116px;
  margin: 0;
  padding: 0 5px;
  border: none;

  @media (min-width: 320px) {
    width: 170px;
    top: -10px;
  }

  @media (min-width: 640px) {
    width: 150px;
  }

  @media (min-width: 960px) {
    width: 130px;
    top: -8px;
  }
`

const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.palette.buttonChangeInterestRate.label.bg.primary};
  color: ${(props) => props.theme.palette.input.span};
  font-size: 1.1rem;
  border-radius: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.buttonChangeInterestRate.label.bg.checked};
    color: ${(props) => props.theme.palette.input.value};
  }

  &:has(input:checked) {
    background-color: ${(props) => props.theme.palette.buttonChangeInterestRate.label.bg.checked};
    color: ${(props) => props.theme.palette.input.value};
  }

  @media (min-width: 320px) {
    width: 35px;
    height: 20px;
  }

  @media (min-width: 960px) {
    width: 30px;
    height: 15px;
  }
`

const Radio = styled(StyledRadio)`
  cursor: pointer;
`

function ButtonChangeInterestRate() {
  const { setMultiplicationValue } = useContext(CalculationInterestRateContext)

  function handleOnChangeRadio(e) {
    setMultiplicationValue(Number(e.target.value))
  }

  return (
    <Fieldset id='fieldsetChangeInterestRate' onChange={handleOnChangeRadio}>
      <Label>
        x1
        <Radio id='x1' value='1' type='radio' name='fieldsetChangeInterestRate' />
      </Label>
      <Label>
        x10 <Radio defaultChecked id='x10' value='10' type='radio' name='fieldsetChangeInterestRate' />
      </Label>
      <Label>
        x25 <Radio id='x25' value='25' type='radio' name='fieldsetChangeInterestRate' />
      </Label>
    </Fieldset>
  )
}

export default ButtonChangeInterestRate
