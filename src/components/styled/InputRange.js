import styled from 'styled-components'
import Input from './Input'

const InputRange = styled(Input)`
  border: none;
  padding: 0;
  margin: 0 0 4px 0;

  &::-webkit-slider-thumb {
    width: ${(props) => props.theme.elements.inputRange.thumb.width}px;
    height: ${(props) => props.theme.elements.inputRange.thumb.height}px;
    padding: 19px 7.5px;
    border-radius: 3px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    appearance: none;
    margin-top: -${(props) => props.theme.elements.inputRange.thumb.height / 2 - props.theme.elements.inputRange.track.height / 2}px;
  }

  &::-webkit-slider-runnable-track {
    background-color: ${(props) => props.theme.palette.primary};
    border-radius: 30px;
    height: ${(props) => props.theme.elements.inputRange.track.height}px;
    appearance: none;
    width: 100%;
  }
`

export default InputRange
