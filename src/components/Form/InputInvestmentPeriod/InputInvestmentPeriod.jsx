import styled, { useTheme } from 'styled-components'
import BoxSectionForm from '../../common/Form/BoxSectionForm/BoxSectionForm'
import InputRange from '../../common/Form/InputRange/InputRange'
import { forwardRef, useContext, useEffect, useRef, useState } from 'react'
import SpecialLabelInputRange from '../../common/Form/SpecialLabelInputRange/SpecialLabelInputRange'
import { InputInvestmentPeriodContext } from '../../../contexts/contexts'

const BoxInputRangeAndRulerValues = styled.div``

const RulerValues = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0 0;3
`

const Span = styled.span`
  width: ${(props) => props.theme.elements.inputRange.thumb.width}px;
  color: ${(props) =>
    props.$itCurrentRulerValue
      ? props.theme.palette.inputRange.option.currentValue
      : props.theme.palette.inputRange.option.otherValue};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.31;
  padding: 0;
  text-align: center;
`

const InputInvestmentPeriod = forwardRef(function InputInvestmentPeriod(props, ref) {
  const theme = useTheme()
  const forwardRefInputRange = useRef(null)
  const { setValueFromInputRangeInvestmentPeriod } = useContext(InputInvestmentPeriodContext)

  const [currentRulerValue, setCurrentRulerValue] = useState(theme.elements.inputRange.settings.defaultValue)

  useEffect(() => {
    setValueFromInputRangeInvestmentPeriod(Number(currentRulerValue))
  }, [currentRulerValue])

  function createValuesForRuler() {
    const min = theme.elements.inputRange.settings.min
    const max = theme.elements.inputRange.settings.max

    const box = []

    for (let i = min; i <= max; i++) {
      box.push(i)
    }

    return box
  }

  return (
    <BoxSectionForm id='componentInputInvestmentPeriod'>
      <SpecialLabelInputRange refInputRange={ref} idInputRange='inputRangeInvestmentPeriod'>
        Срок инвестиций ( Месяцев )
      </SpecialLabelInputRange>

      <BoxInputRangeAndRulerValues tabIndex='0' id='boxInputRangeAndRulerValues'>
        <InputRange
          setCurrentValueInputInvestmentPeriod={setCurrentRulerValue}
          ref={ref}
          settings={{
            value: currentRulerValue,
            min: theme.elements.inputRange.settings.min,
            max: theme.elements.inputRange.settings.max,
            id: 'inputRangeInvestmentPeriod',
          }}
          required
        />

        <RulerValues>
          {createValuesForRuler().map((item, id) => (
            <Span $itCurrentRulerValue={currentRulerValue.toString() === item.toString()} key={id}>
              {item}
            </Span>
          ))}
        </RulerValues>
      </BoxInputRangeAndRulerValues>
    </BoxSectionForm>
  )
})

export default InputInvestmentPeriod
