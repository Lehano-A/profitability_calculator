import styled, { useTheme } from 'styled-components'
import BoxSectionForm from '../../common/Form/BoxSectionForm/BoxSectionForm'
import StyledLabel from '../../styled/StyledLabel'
import StyledInputCalendar from '../../styled/StyledInputCalendar'
import { useContext, useEffect, useState } from 'react'
import { InputInvestmentPeriodContext } from '../../../contexts/contexts'
import useDate from '../../../hooks/useDate'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 320px) {
    max-width: 280px;
  }

  @media (min-width: 640px) {
    flex-direction: row;
    max-width: 100%;
  }

  & > :nth-child(n) {
    width: 100%;
  }

  & > :first-child {
    @media (min-width: 320px) {
      margin-bottom: 40px;
    }

    @media (min-width: 640px) {
      margin-right: 40px;
      margin-bottom: 0;
    }
  }
`
const Label = styled(StyledLabel)`
  display: flex;
  flex-direction: column;

  & > span {
    margin-bottom: 10px;
  }
`

const StartInvesting = styled(StyledInputCalendar)``
const EndInvesting = styled(StyledInputCalendar)``

function StartEndInvesting() {
  const theme = useTheme()

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState('')
  const { valueFromInputRangeInvestmentPeriod } = useContext(InputInvestmentPeriodContext)

  const { getCurrentYearMonthDay, getEndPeriod } = useDate()
  const currentDate = getCurrentYearMonthDay()

  useEffect(() => {
    changeEndPeriod()
  }, [startDate, valueFromInputRangeInvestmentPeriod]) // при изменении пользователем начальной даты или значения ползунка

  function changeEndPeriod() {
    if (valueFromInputRangeInvestmentPeriod === null) {
      // по дефолту
      setEndDate(getEndPeriod(startDate, theme.elements.inputRange.settings.defaultValue))
    } else {
      const endPeriod = getEndPeriod(startDate, valueFromInputRangeInvestmentPeriod)

      if (endPeriod.length === 10) {
        setEndDate(endPeriod)
      }
    }
  }

  function handleOnChangeStartEnvesting(e) {
    setStartDate(new Date(e.target.value))
  }

  return (
    <Box id='componentStartEndInvesting'>
      <BoxSectionForm>
        <Label htmlFor='inputDateStartInvesting' id='labelStartInvesting'>
          Старт инвестиции
        </Label>
        <StartInvesting
          onInput={handleOnChangeStartEnvesting}
          defaultValue={currentDate}
          min={currentDate}
          max='2050-01-01'
          id='inputDateStartInvesting'
          type='date'
          pattern='\d{2}-\d{2}-\d{4}'
          required
        />
      </BoxSectionForm>

      <BoxSectionForm>
        <Label htmlFor='inputDateEndInvesting' id='labelEndInvesting'>
          Завершение инвестиции
        </Label>
        <EndInvesting disabled readOnly value={endDate} max={endDate} id='inputDateEndInvesting' type='date' required />
      </BoxSectionForm>
    </Box>
  )
}

export default StartEndInvesting
