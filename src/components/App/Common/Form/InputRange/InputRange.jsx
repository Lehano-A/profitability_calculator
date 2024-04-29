import styled, { useTheme } from 'styled-components'
import StyledInputRange from '../../../../styled/StyledInputRange'
import { useRef } from 'react'

const StyledBoxInputRange = styled.div`
  position: relative;
  z-index: 5;
`

const InputRangeElement = styled(StyledInputRange)`
  position: relative;
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
    `linear-gradient(90deg, ${props.theme.palette.primary} ${((props.defaultValue - props.min) / (props.max - props.min)) * 100}%, rgba(${props.theme.palette.rgb.shades.secondary[200]}, 1) 0)`};
`

function InputRange({ settings }) {
  const { defaultValue = 50, min = 0, max = 100 } = settings || {}

  const refPseudoTrack = useRef()
  const theme = useTheme()

  function handleOnChange(e) {
    const { value } = e.target
    const { rgb } = theme.palette

    const primary = rgb.primary
    const secondaryShade = rgb.shades.secondary[200]

    const x = ((value - min) / (max - min)) * 100

    refPseudoTrack.current.style.backgroundImage = `linear-gradient(90deg, rgba(${primary}, 1) ${x}%, rgba(${secondaryShade}, 1) 0)`
  }

  return (
    <StyledBoxInputRange>
      <InputRangeElement {...settings} onChange={handleOnChange} type='range' />
      <PseudoTrack defaultValue={defaultValue} min={min} max={max} ref={refPseudoTrack} />
    </StyledBoxInputRange>
  )
}

export default InputRange
