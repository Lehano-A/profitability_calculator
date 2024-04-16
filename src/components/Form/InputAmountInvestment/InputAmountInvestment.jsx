import styled from 'styled-components'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import Label from '../../App/Common/Form/Label/Label'
import StyledInput from '../../styled/StyledInput'
import StyledInputRange from '../../styled/StyledInputRange'

const BoxInput = styled.div`
  display: flex;
  position: relative;
`

const BoxInputNumberAndUnit = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 480px) {
    min-width: 160px;
    max-width: 200px;
  }
`

const InputRange = styled(StyledInputRange)`
  display: none;
  margin-right: 40px;

  @media (min-width: 480px) {
    display: flex;
    min-width: 220px;
    max-width: 360px;
  }
`

const InputNumber = styled(StyledInput)`
  display: flex;
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
        <InputRange type='range' />
        <BoxInputNumberAndUnit>
          <InputNumber id='amountInvestment' type='number' value='10.000' />
          <Unit>BTC</Unit>
        </BoxInputNumberAndUnit>
      </BoxInput>
    </BoxSectionForm>
  )
}

export default InputAmountInvestment
