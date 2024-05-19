import styled from 'styled-components'
import { useContext } from 'react'

import { CalculationInterestRateContext } from '../../contexts/contexts'

const Box = styled.div`
  position: absolute;
  top: -8px;
  display: none;
  justify-content: center;
  width: 116px;
  cursor: default;

  @media (min-width: 960px) {
    display: flex;
  }
`

const Fieldset = styled.fieldset`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 5px;
  border: none;
  margin: 0;
`

const BoxLabelAndRadio = styled.div`
  position: relative;
  min-width: 25px;
  width: 20px;
  height: 15px;
  border-radius: 50px;
  background: ${(props) => props.theme.palette.buttonChangeInterestRate.label.bg.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  ${'' /* transition: background 0.3s ease-in-out; */}
  &:has(input:checked) {
    background-color: ${(props) => props.theme.palette.buttonChangeInterestRate.label.bg.checked};
  }
`

const Label = styled.label`
  cursor: pointer;
  color: ${(props) => props.theme.palette.input.span};
  font-size: 1.1rem;

  &:has(input:checked) {
    color: ${(props) => props.theme.palette.input.value};
  }
`

const Radio = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  margin: 0;
  width: 0;
  height: 0;
`

function ButtonChangeInterestRate() {
  const { setMultiplicationValue } = useContext(CalculationInterestRateContext)

  function handleOnChangeRadio(e) {
    setMultiplicationValue(Number(e.target.value))
  }

  return (
    <Box as='div'>
      <Fieldset id='fieldsetChangeInterestRate' onChange={handleOnChangeRadio}>
        <BoxLabelAndRadio>
          <Label>
            x1
            <Radio id='x1' value='1' type='radio' name='fieldsetChangeInterestRate' />
          </Label>
        </BoxLabelAndRadio>
        <BoxLabelAndRadio>
          <Label>
            x10 <Radio defaultChecked id='x10' value='10' type='radio' name='fieldsetChangeInterestRate' />
          </Label>
        </BoxLabelAndRadio>
        <BoxLabelAndRadio>
          <Label>
            x25 <Radio id='x25' value='25' type='radio' name='fieldsetChangeInterestRate' />
          </Label>
        </BoxLabelAndRadio>
      </Fieldset>
    </Box>
  )
}

export default ButtonChangeInterestRate
