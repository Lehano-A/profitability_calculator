import styled from 'styled-components'
import Label from '../../App/Common/Form/Label/Label'
import BoxSectionForm from '../../App/Common/Form/BoxSectionForm/BoxSectionForm'
import InputCalendar from '../../styled/InputCalendar'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;

  @media (min-width: 320px) {
    max-width: 280px;
  }
`
const StartInvesting = styled(InputCalendar)``
const EndInvesting = styled(InputCalendar)`
  color: ${(props) => props.theme.palette.secondary};
`

function StartEndInvesting() {
  return (
    <Box>
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
