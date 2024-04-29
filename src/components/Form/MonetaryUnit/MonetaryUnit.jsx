import styled from 'styled-components'

const Fieldset = styled.fieldset`
  display: flex;
  border: none;
  padding: 0;
  margin: 0;
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

  &:not(:last-child) {
    margin: 0 14px 0 0;
  }

  &:hover {
    color: ${(props) => props.theme.palette.primary};
  }

  &:active {
    color: ${(props) => props.theme.palette.primary};
  }

  &:focus {
    color: ${(props) => props.theme.palette.primary};
  }

  &:has(${Radio}:checked) {
    color: ${(props) => props.theme.palette.primary};
    border-bottom: 3px solid ${(props) => props.theme.palette.primary};
  }
`

function MonetaryUnit() {
  const namesUnits = ['BTC', 'UAH', 'RUB', 'EUR', 'USD']

  return (
    <Fieldset id='componentMonetaryUnit'>
      {namesUnits.map((name, id) => (
        <Label key={id} htmlFor={name}>
          <Radio defaultChecked={name === 'BTC' && true} type='radio' name='monetaryUnit' id={name} value={name} />
          {name}
        </Label>
      ))}
    </Fieldset>
  )
}

export default MonetaryUnit
