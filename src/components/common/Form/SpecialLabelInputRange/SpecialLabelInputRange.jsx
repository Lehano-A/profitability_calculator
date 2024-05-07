import styled from 'styled-components'
import StyledLabel from '../../../styled/StyledLabel'
import { UserDeviceContext } from '../../../../contexts/contexts'
import { useContext } from 'react'

const Label = styled(StyledLabel)`
  line-height: 1.31;
  margin-bottom: 15px;
`

function SpecialLabelInputRange({ children, refInputRange, idInputRange }) {
  const userDevice = useContext(UserDeviceContext)

  function handleOnClickLabel() {
    if (refInputRange.current !== null) {
      refInputRange.current.focus() // нажатие на лэйбл, переводит фокус на InputRange (для iOS)
    }
  }
  return (
    <Label onClick={userDevice === 'mobile' ? handleOnClickLabel : null} htmlFor={idInputRange}>
      {children}
    </Label>
  )
}

export default SpecialLabelInputRange
