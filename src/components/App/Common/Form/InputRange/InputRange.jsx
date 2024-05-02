import styled from 'styled-components'
import StyledInputRange from '../../../../styled/StyledInputRange'
import { useState } from 'react'

const StyledBoxInputRange = styled.div`
  position: relative;
  z-index: 5;
  height: 38px;
`

const InputRangeElement = styled(StyledInputRange)`
  width: 100%;
  background: transparent;
  z-index: 1;

  @media (min-width: 480px) {
    min-width: 220px;
  }

  @media (min-width: 640px) {
    min-width: 320px;
  }
`

const PseudoTrack = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 10px;
  width: 100%;
  border-radius: 30px;
  background-image: ${(props) =>
    `linear-gradient(90deg, ${props.theme.palette.inputRange.gradient.start} ${props.$xCoord}%, ${props.theme.palette.inputRange.gradient.end} 0)`};
`

function InputRange({ settings }) {
  const { defaultValue = 50, min = 0, max = 100 } = settings || {}

  const [xCoord, setXCoord] = useState(((defaultValue - min) / (max - min)) * 100)

  function handleOnChange(e) {
    const { value } = e.target

    const x = ((value - min) / (max - min)) * 100
    setXCoord(x)
  }

  return (
    <StyledBoxInputRange>
      <InputRangeElement {...settings} onChange={handleOnChange} type='range' />
      <PseudoTrack $xCoord={xCoord} defaultValue={defaultValue} min={min} max={max} />
    </StyledBoxInputRange>
  )
}

export default InputRange
