import styled from 'styled-components'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import Label from '../../App/Common/Form/Label/Label'
import Input from '../../styled/Input'

const BoxInput = styled.div`
  display: flex;
`

const BoxUnit = styled(Input)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  width: 50px;
  padding: 0;
`

const InputNumber = styled(Input)`
  font-size: 14px;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`

const Unit = styled.span`
  color: ${(props) => props.theme.palette.secondary};
  font-size: 14px;
  font-weight: 500;
  margin: 0 20px 0 0;
`

function InputAmountInvestment() {
  return (
    <BoxSectionForm>
      <Label>Сумма инвестиций</Label>

      <BoxInput>
        <InputNumber id='amountInvestment' type='number' value='10.000' />

        <BoxUnit as='div'>
          <Unit>BTC</Unit>
        </BoxUnit>
      </BoxInput>
    </BoxSectionForm>
  )
}

export default InputAmountInvestment
