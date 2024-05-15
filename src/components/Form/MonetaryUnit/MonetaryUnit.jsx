import { useContext } from 'react'
import styled from 'styled-components'
import { MonetaryUnitContext } from '../../../contexts/contexts'

const Fieldset = styled.fieldset`
  display: flex;
  min-height: 31px;
  padding: 0;
  margin: 0;
  border: none;
`

const Radio = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`

const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  padding: 0 3px 6px;
  letter-spacing: 0.06px;
  text-transform: uppercase;
  line-height: 1.17;
  cursor: pointer;
  color: ${(props) => props.theme.palette.label.radio};

  &:not(:last-child) {
    margin: 0 14px 0 0;
  }

  &:hover {
    color: ${(props) => props.theme.palette.label.hover};
  }

  &:active {
    color: ${(props) => props.theme.palette.label.active};
  }

  &:has(${Radio}:checked) {
    color: ${(props) => props.theme.palette.input.checked.radio};
    border-bottom: 4px solid ${(props) => props.theme.palette.input.border.label};
  }
`

function MonetaryUnit() {
  const namesUnits = ['BTC', 'UAH', 'RUB', 'EUR', 'USD']
  const { currentMonetaryUnit, setCurrentMonetaryUnit } = useContext(MonetaryUnitContext)

  function handleOnChangeMonetaryUnit(e) {
    setCurrentMonetaryUnit(e.target.id)
  }
  return (
    <Fieldset id='componentMonetaryUnit'>
      {namesUnits.map((name, id) => (
        <Label key={id} htmlFor={name}>
          <Radio
            defaultChecked={name === currentMonetaryUnit && true}
            type='radio'
            name='monetaryUnit'
            id={name}
            value={currentMonetaryUnit}
            required
            onChange={handleOnChangeMonetaryUnit}
          />
          {name}
        </Label>
      ))}
    </Fieldset>
  )
}

export default MonetaryUnit
