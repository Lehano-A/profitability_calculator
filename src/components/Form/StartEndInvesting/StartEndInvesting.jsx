import styled from 'styled-components'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import StyledInputRange from '../../styled/StyledInputCalendar'
import StyledLabel from '../../styled/StyledLabel'

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
const Label = styled(StyledLabel)``

const StartInvesting = styled(StyledInputRange)`
  height: 54px;
`
const EndInvesting = styled(StyledInputRange)`
  height: 54px;
  color: ${(props) => props.theme.palette.secondary};
`

function StartEndInvesting() {
  return (
    <Box id='componentStartEndInvesting'>
      <BoxSectionForm>
        <Label id='labelStartInvesting'>Старт инвестиции</Label>
        <StartInvesting type='date' />
      </BoxSectionForm>

      <BoxSectionForm>
        <Label id='labelEndInvesting'>Завершение инвестиции</Label>
        <EndInvesting type='date' />
      </BoxSectionForm>
    </Box>
  )
}

export default StartEndInvesting
