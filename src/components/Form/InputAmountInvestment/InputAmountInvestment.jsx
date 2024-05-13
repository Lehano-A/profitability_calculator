import styled, { useTheme } from 'styled-components'
import BoxSectionForm from '../../common/Form/BoxSectionForm/BoxSectionForm'
import StyledInput from '../../styled/StyledInput'
import InputRange from '../../common/Form/InputRange/InputRange'
import { useState, useRef, useContext } from 'react'
import SpecialLabelInputRange from '../../common/Form/SpecialLabelInputRange/SpecialLabelInputRange'
import { CurrentSizeScreenContext } from '../../../contexts/contexts'

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
  color: ${(props) => props.theme.palette.input.span};

  @media (min-width: 320px) {
    font-size: 1.4rem;
    line-height: 1.31;
  }

  @media (min-width: 640px) {
    font-size: 1.8rem;
  }
`

function InputAmountInvestment() {
  const [inputNumberValue, setInputNumberValue] = useState(10000)
  const theme = useTheme()

  const currentSizeScreen = useContext(CurrentSizeScreenContext)

  const forwardRefInputRange = useRef(null)

  function handleOnChangeInputNumber(e) {
    if (e.target.value.length <= 5) {
      const currentValue = e.target.value

      if (currentValue.length === 2 && currentValue.startsWith(0)) {
        // если значение начинается с 0 и введён второй символ
        setInputNumberValue(currentValue.substring(1)) // присваиваем второй символ
        return
      }

      setInputNumberValue(currentValue === '' ? 0 : currentValue)
    }
  }

  return (
    <BoxSectionForm id='componentInputAmountInvestment'>
      <SpecialLabelInputRange
        refInputRange={forwardRefInputRange}
        idInputRange={
          currentSizeScreen.width >= theme.breakpoints.s ? 'inputRangeAmountInvestment' : 'inputNumberAmountInvestment'
        }
      >
        Сумма инвестиций
      </SpecialLabelInputRange>

      <BoxInputs>
        <InputRange
          setInputNumberValue={setInputNumberValue}
          ref={forwardRefInputRange}
          settings={{
            value: inputNumberValue,
            min: 0,
            max: 99999,
            id: 'inputRangeAmountInvestment',
          }}
        />

        <BoxInputNumberAndUnit id='boxInputNumberAndUnit'>
          <InputNumber
            value={inputNumberValue === 0 ? '' : inputNumberValue}
            onChange={handleOnChangeInputNumber}
            id='inputNumberAmountInvestment'
            type='number'
            required
          />

          <Unit as='span'>BTC</Unit>
        </BoxInputNumberAndUnit>
      </BoxInputs>
    </BoxSectionForm>
  )
}

export default InputAmountInvestment
