import styled from 'styled-components'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import Label from '../../App/Common/Form/Label/Label'
import Input from '../../styled/Input'

const BoxInput = styled.div`
  display: flex;
  position: relative;
`

const InputNumber = styled(Input)`
  font-size: 14px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`

const Unit = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  color: ${(props) => props.theme.palette.secondary};
  font-size: 14px;
  font-weight: 500;
  margin: 0 20px 0 0;
`

function InputAmountInvestment() {
  return (
    <BoxSectionForm id='componentInputAmountInvestment'>
      <Label>Сумма инвестиций</Label>

      <BoxInput>
        <InputNumber id='amountInvestment' type='number' value='10.000' />
        <Unit>BTC</Unit>
      </BoxInput>
    </BoxSectionForm>
  )
}

export default InputAmountInvestment
