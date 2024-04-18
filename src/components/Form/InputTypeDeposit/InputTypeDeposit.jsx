import styled from 'styled-components'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import arrowSelect from '../../../images/icons/arrowSelect.svg'
import StyledInput from '../../styled/StyledInput'
import StyledLabel from '../../styled/StyledLabel'

const Label = styled(StyledLabel)``

const Select = styled(StyledInput)`
  background: url(${arrowSelect}) no-repeat left 49%;
  background-position-x: calc(100% - 19px);

  @media (min-width: 320px) {
    max-width: 280px;
    font-size: 1.6rem;
    line-height: 1.31;
  }

  @media (min-width: 640px) {
    min-width: 260px;
    font-size: 1.8rem;
    line-height: 1.17;
  }
`

function InputTypeDeposit() {
  return (
    <BoxSectionForm id='componentInputTypeDeposit'>
      <Label htmlFor='typeDeposit'>Тип депозита</Label>

      <Select as='select' id='typeDeposit'>
        <option>Standart</option>
      </Select>
    </BoxSectionForm>
  )
}

export default InputTypeDeposit
