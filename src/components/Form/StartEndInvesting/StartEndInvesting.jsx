import styled from 'styled-components'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import StyledLabel from '../../styled/StyledLabel'
import StyledInputCalendar from '../../styled/StyledInputCalendar'

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
  return (
    <Box id='componentStartEndInvesting'>
      <BoxSectionForm>
        <Label htmlFor='inputDateStartInvesting' id='labelStartInvesting'>
          Старт инвестиции
        </Label>
        <StartInvesting id='inputDateStartInvesting' type='date' pattern='\d{2}-\d{2}-\d{4}' />
      </BoxSectionForm>

      <BoxSectionForm>
        <Label htmlFor='inputDateEndInvesting' id='labelEndInvesting'>
          Завершение инвестиции
        </Label>
        <EndInvesting id='inputDateEndInvesting' type='date' />
      </BoxSectionForm>
    </Box>
  )
}

export default StartEndInvesting
