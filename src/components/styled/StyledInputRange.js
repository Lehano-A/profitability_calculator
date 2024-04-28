import styled from 'styled-components'
import StyledInput from './StyledInput'

const StyledInputRange = styled(StyledInput)`
  position: relative;
  height: 38px;
  padding: 0;
  border: none;
  margin: ${(props) => (props.$margin ? props.$margin : 0)};
  appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: ${(props) => props.theme.elements.inputRange.thumb.width}px;
    height: ${(props) => props.theme.elements.inputRange.thumb.height}px;
    padding: 19px 7.5px;
    border-radius: 3px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    background-color: #fff;

    margin-top: -${(props) => props.theme.elements.inputRange.thumb.height / 2 - props.theme.elements.inputRange.track.height / 2}px;
    position: relative;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    width: ${(props) => props.theme.elements.inputRange.thumb.width}px;
    height: ${(props) => props.theme.elements.inputRange.thumb.height}px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    margin-top: -${(props) => props.theme.elements.inputRange.thumb.height / 2 - props.theme.elements.inputRange.track.height / 2}px;
    position: relative;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    height: ${(props) => props.theme.elements.inputRange.track.height}px;
  }

  &::-moz-slider-runnable-track {
    height: ${(props) => props.theme.elements.inputRange.track.height}px;
  }
`

export default StyledInputRange
