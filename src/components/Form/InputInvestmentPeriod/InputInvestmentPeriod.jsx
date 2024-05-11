import styled, { useTheme } from 'styled-components'
import BoxSectionForm from '../../common/Form/BoxSectionForm/BoxSectionForm'
import InputRange from '../../common/Form/InputRange/InputRange'
import { useEffect, useRef, useState } from 'react'
import SpecialLabelInputRange from '../../common/Form/SpecialLabelInputRange/SpecialLabelInputRange'

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

function InputInvestmentPeriod() {
  const theme = useTheme()
  const forwardRefInputRange = useRef(null)

  const [currentRulerValue, setCurrentRulerValue] = useState(theme.elements.inputRange.settings.defaultValue)

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp)

    return () => document.addEventListener('keyup', handleKeyUp)
  }, [])

  function createValuesForRuler() {
    const min = theme.elements.inputRange.settings.min
    const max = theme.elements.inputRange.settings.max

    const box = []

    for (let i = min; i <= max; i++) {
      box.push(i)
    }

    return box
  }

  function handleKeyUp(e) {
    if (e.code === 'Tab' && e.target.id === 'boxInputRangeAndRulerValues' && forwardRefInputRange.current !== null) {
      forwardRefInputRange.current.focus() // если с помощью Tab попадаем на родителя-обёртку InputRange, то переводим фокус на inputRange (для iOS)
    }
  }

  return (
    <BoxSectionForm id='componentInputInvestmentPeriod'>
      <SpecialLabelInputRange refInputRange={forwardRefInputRange} idInputRange='inputRangeInvestmentPeriod'>
        Срок инвестиций ( Месяцев )
      </SpecialLabelInputRange>

      <BoxInputRangeAndRulerValues tabIndex='0' id='boxInputRangeAndRulerValues'>
        <InputRange
          setCurrentValue={setCurrentRulerValue}
          ref={forwardRefInputRange}
          settings={{
            defaultValue: theme.elements.inputRange.settings.defaultValue,
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
}

export default InputInvestmentPeriod
