import styled from 'styled-components'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import Label from '../../App/Common/Form/Label/Label'
import arrowSelect from '../../../images/icons/arrowSelect.svg'

const Select = styled.select`
  height: 48px;
  max-width: 280px;
  background: url(${arrowSelect}) no-repeat left 49%;
  background-position-x: calc(100% - 19px);
  border: ${props => props.theme.common.form.border.color} 2px solid;
  border-radius: ${props => props.theme.common.form.border.radius};
  padding: 0 0 0 17px;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  appearance: none;
  -webkit-appearance: none;
`

function InputTypeDeposit() {
  return (
    <BoxSectionForm>
      <Label htmlFor='typeDeposit'>Тип депозита</Label>

      <Select id='typeDeposit'>
        <option>Standart</option>
      </Select>
    </BoxSectionForm>
  )
}

export default InputTypeDeposit
