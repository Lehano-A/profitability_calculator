import styled from 'styled-components'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import StyledInput from '../../styled/StyledInput'
import StyledInputRange from '../../styled/StyledInputRange'
import StyledLabel from '../../styled/StyledLabel'

const Label = styled(StyledLabel)`
  line-height: 1.31;
`

const BoxInputs = styled.div`
  display: flex;
  align-items: center;

  & > :first-child {
    margin-right: 40px;
  }
`

const BoxInputNumberAndUnit = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  @media (min-width: 480px) {
    max-width: 200px;
  }

  @media (min-width: 640px) {
    min-width: 220px;
    max-width: 350px;
  }
`

const InputRange = styled(StyledInputRange)`
  display: none;
  width: 100%;

  @media (min-width: 480px) {
    display: block;
    min-width: 220px;
  }

  @media (min-width: 640px) {
    min-width: 320px;
  }
`

const InputNumber = styled(StyledInput)`
  width: 100%;
  font-weight: 700;

  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    border: 2px solid black;
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    outline: none;
  }

  &:focus + span {
    border: 2px solid black;
    border-left: none;
  }

  @media (min-width: 320px) {
    font-size: 1.4rem;
    line-height: 1.31;
  }

  @media (min-width: 640px) {
    font-size: 1.8rem;
    line-height: 1.17;
  }

  @media (min-width: 960px) {
    min-width: 180px;
  }
`

const Unit = styled(StyledInput)`
  display: flex;
  align-items: center;
  line-height: 48px;

  color: ${(props) => props.theme.palette.secondary};

  font-weight: 500;
  padding: 23px 20px 21px 0;
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  @media (min-width: 320px) {
    font-size: 1.4rem;
    line-height: 1.31;
  }

  @media (min-width: 640px) {
    font-size: 1.8rem;
    line-height: 3;
  }
`

function InputAmountInvestment() {
  return (
    <BoxSectionForm id='componentInputAmountInvestment'>
      <Label htmlFor='inputRangeAmountInvestment'>Сумма инвестиций</Label>

      <BoxInputs>
        <InputRange type='range' id='inputRangeAmountInvestment' />

        <BoxInputNumberAndUnit id='boxInputNumberAndUnit'>
          <InputNumber id='amountInvestment' type='number' value='10.000' />
          <Unit as='span'>BTC</Unit>
        </BoxInputNumberAndUnit>
      </BoxInputs>
    </BoxSectionForm>
  )
}

export default InputAmountInvestment
