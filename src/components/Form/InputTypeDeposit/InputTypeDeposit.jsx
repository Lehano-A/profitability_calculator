import styled from 'styled-components'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import Label from '../../App/Common/Form/Label/Label'
import arrowSelect from '../../../images/icons/arrowSelect.svg'
import Input from '../../styled/Input'

const Select = styled(Input)`
  background: url(${arrowSelect}) no-repeat left 49%;
  background-position-x: calc(100% - 19px);
`

function InputTypeDeposit() {
  return (
    <BoxSectionForm>
      <Label htmlFor='typeDeposit'>Тип депозита</Label>

      <Select as='select' id='typeDeposit'>
        <option>Standart</option>
      </Select>
    </BoxSectionForm>
  )
}

export default InputTypeDeposit
