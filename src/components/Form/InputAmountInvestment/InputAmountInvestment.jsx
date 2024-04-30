import styled from 'styled-components'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import StyledInput from '../../styled/StyledInput'
import StyledLabel from '../../styled/StyledLabel'
import InputRange from '../../App/Common/Form/InputRange/InputRange'
import { useState } from 'react'

const Label = styled(StyledLabel)`
  line-height: 1.31;
`

const BoxInputs = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 320px) {
    & > :first-child {
      display: none;
    }
  }

  @media (min-width: 480px) {
    & > :first-child {
      display: flex;
      margin-right: 40px;
    }
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

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
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
  pointer-events: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  line-height: 48px;
  font-weight: 500;
  padding-right: 20px;
  border: none;
  color: ${(props) => props.theme.palette.secondary};

  @media (min-width: 320px) {
    font-size: 1.4rem;
    line-height: 1.31;
  }

  @media (min-width: 640px) {
    font-size: 1.8rem;
  }
`

function InputAmountInvestment() {
  const [inputNumberValue, setInputNumberValue] = useState('10000')

  function handleOnChangeInputNumber(e) {
    if (e.target.value.length <= 5) {
      setInputNumberValue(e.target.value)
    }
  }

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
            id: 'inputRangeAmountInvestment',
          }}
        />

        <BoxInputNumberAndUnit id='boxInputNumberAndUnit'>
          <InputNumber
            value={inputNumberValue}
            onChange={handleOnChangeInputNumber}
            id='amountInvestment'
            type='number'
            max='100000'
          />

          <Unit as='span'>BTC</Unit>
        </BoxInputNumberAndUnit>
      </BoxInputs>
    </BoxSectionForm>
  )
}

export default InputAmountInvestment
