import styled from 'styled-components'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import StyledInput from '../../styled/StyledInput'
import StyledLabel from '../../styled/StyledLabel'

import InputRange from '../../App/Common/Form/InputRange/InputRange'

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

  @media (min-width: 960px) {
    min-width: 100px;
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
  }
`

function InputAmountInvestment() {
  return (
    <BoxSectionForm id='componentInputAmountInvestment'>
      <Label htmlFor='inputRangeAmountInvestment'>Сумма инвестиций</Label>

      <BoxInputs>
        <InputRange
          settings={{
            defaultValue: 10000,
            min: 0,
            max: 50000,
            step: 100,
            type: 'range',
            id: 'inputRangeAmountInvestment',
          }}
        />
        <BoxInputNumberAndUnit id='boxInputNumberAndUnit'>
          <InputNumber id='amountInvestment' type='number' defaultValue='10000' max='100000' />
          <Unit as='span'>BTC</Unit>
        </BoxInputNumberAndUnit>
      </BoxInputs>
    </BoxSectionForm>
  )
}

export default InputAmountInvestment
