import styled from 'styled-components'
import StyledInput from './StyledInput'

const StyledInputCalendar = styled(StyledInput)`
  font-size: 1.8rem;
  font-weight: 700;
  appearance: none;
  padding: 0 20px;
  position: relative;

  &::-webkit-calendar-picker-indicator {
    filter: ${(props) => props.theme.palette.inputDate.iconCalendar};
  }
`

export default StyledInputCalendar
