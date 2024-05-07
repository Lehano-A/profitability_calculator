import styled, { useTheme } from 'styled-components'
import BoxSectionForm from '../../common/Form/BoxSectionForm/BoxSectionForm'
import StyledLabel from '../../styled/StyledLabel'

import InputRange from '../../common/Form/InputRange/InputRange'

const Label = styled(StyledLabel)`
  line-height: 1.31;
  margin-bottom: 15px;
`
const BoxInputRangeAndDatalist = styled.div`
  & #inputRangeInvestmentPeriod:focus {
    outline: none;
  }
`

const RulerValues = styled.div`
   display: flex;
  width: 100%;

  justify-content: space-between;
  margin: 10px 0 0;3
`

const Span = styled.span`
  width: ${(props) => props.theme.elements.inputRange.thumb.width}px;
  color: ${(props) => props.theme.palette.inputRange.option};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.31;
  padding: 0;
  text-align: center;
`

function InputInvestmentPeriod() {
  const theme = useTheme()

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
      <Label htmlFor='inputRangeInvestmentPeriod'>Срок инвестиций ( Месяцев )</Label>

      <BoxInputRangeAndDatalist id='boxInputRangeAndDatalist'>
        <InputRange
          settings={{
            defaultValue: theme.elements.inputRange.settings.defaultValue,
            min: theme.elements.inputRange.settings.min,
            max: theme.elements.inputRange.settings.max,
            id: 'inputRangeInvestmentPeriod',
          }}
        />

        <RulerValues>
          {createValuesForRuler().map((item, id) => (
            <Span key={id}>{item}</Span>
          ))}
        </RulerValues>
      </BoxInputRangeAndDatalist>
    </BoxSectionForm>
  )
}

export default InputInvestmentPeriod
