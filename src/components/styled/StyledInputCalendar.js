import styled from 'styled-components'
import StyledInput from './StyledInput'

const StyledInputCalendar = styled(StyledInput)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.palette.tertiary};
  appearance: none;
  padding: 0 20px;
`

export default StyledInputCalendar
