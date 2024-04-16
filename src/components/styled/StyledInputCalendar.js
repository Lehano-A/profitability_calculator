import styled from 'styled-components'
import StyledInput from './StyledInput'
import iconCalendar from '../../images/icons/calendar.svg'

const StyledInputRange = styled(StyledInput)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.palette.tertiary};

  &::-webkit-calendar-picker-indicator {
    width: 16px;
    height: 16px;
    padding-right: 20px;
    background-image: url(${iconCalendar});
  }
`

export default StyledInputRange
