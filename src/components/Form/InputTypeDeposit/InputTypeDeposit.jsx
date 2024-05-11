import styled from 'styled-components'
import BoxSectionForm from '../../common/Form/BoxSectionForm/BoxSectionForm'
import arrowSelect from '../../../images/icons/arrowSelect.svg'
import StyledInput from '../../styled/StyledInput'
import StyledLabel from '../../styled/StyledLabel'

const Label = styled(StyledLabel)``

const Select = styled(StyledInput)`
  background-position-x: calc(100% - 19px);
  -moz-appearance: none;
  width: 100%;

  @media (min-width: 320px) {
    font-size: 1.6rem;
    line-height: 1.31;
  }

  @media (min-width: 640px) {
    font-size: 1.8rem;
    line-height: 1.17;
  }
`

const BoxSelectAndIcon = styled.div`
  position: relative;
  align-self: start;
  width: 100%;

  @media (min-width: 320px) {
    max-width: 280px;
  }

  @media (min-width: 640px) {
    min-width: 260px;
  }
`

const IconInput = styled.img`
  position: absolute;
  top: 50%;
  right: 22px;
  transform: translateY(-50%);
  pointer-events: none;
  width: 12px;

  fill: red;
  color: red;
  filter: ${(props) => props.theme.palette.input.svg.filter};
`

function InputTypeDeposit() {
  return (
    <BoxSectionForm id='componentInputTypeDeposit'>
      <Label htmlFor='typeDeposit'>Тип депозита</Label>

      <BoxSelectAndIcon>
        <Select as='select' id='typeDeposit' required>
          <option>Standart</option>
        </Select>

        <IconInput src={arrowSelect} />
      </BoxSelectAndIcon>
    </BoxSectionForm>
  )
}

export default InputTypeDeposit
