import styled from 'styled-components'
import Label from '../../App/Common/Form/Label/Label'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import StyledInputRange from '../../styled/StyledInputCalendar'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;

  @media (min-width: 320px) {
    max-width: 280px;
  }
`
const StartInvesting = styled(StyledInputRange)``
const EndInvesting = styled(StyledInputRange)`
  color: ${(props) => props.theme.palette.secondary};
`

function StartEndInvesting() {
  return (
    <Box id='componentStartEndInvesting'>
      <BoxSectionForm>
        <Label>Старт инвестиции</Label>
        <StartInvesting type='date' />
      </BoxSectionForm>

      <BoxSectionForm>
        <Label>Завершение инвестиции</Label>
        <EndInvesting type='date' />
      </BoxSectionForm>
    </Box>
  )
}

export default StartEndInvesting
