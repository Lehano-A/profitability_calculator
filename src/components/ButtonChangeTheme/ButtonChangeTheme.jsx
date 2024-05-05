import { useContext, useState } from 'react'
import styled from 'styled-components'
import { CurrentThemeContext } from '../../Contexts/Contexts'

const Button = styled.button`
  position: absolute;
  top: 30px;
  display: flex;
  width: 45px;
  height: 20px;
  padding: 0;
  background-color: ${(props) =>
    props.$currentTheme === 'light'
      ? props.theme.palette.buttonChangeTheme.bg.lightTheme
      : props.theme.palette.buttonChangeTheme.bg.darkTheme};
  border: none;
  border-radius: 12px;
  cursor: pointer;

  @media (min-width: 320px) {
    align-self: end;
  }

  @media (min-width: 960px) {
    align-self: start;
  }

  &:focus {
    border-color: transparent;
    outline: ${(props) => props.theme.getParamsFocus('buttonChangeTheme')};
  }
`

const Thumb = styled.div((props) => {
  const displaySide = props.$currentTheme === 'light' ? 'left' : 'right'

  return {
    position: 'relative',
    top: '50%',
    [displaySide]: '-5%',
    transform: 'translateY(-50%)',
    'max-width': '25px',

    width: '22px',
    height: '22px',
    'border-radius': '50%',
    'background-color': props.theme.palette.buttonChangeTheme.thumb.primary,
    animation: `${props.$animationForChangeTheme ? props.$animationForChangeTheme : 'none'}`,
    'box-shadow': `0px 0px 10px 2px ${props.theme.palette.buttonChangeTheme.thumb.boxShadow}`,
  }
})

function ButtonChangeTheme() {
  const [animationForChangeTheme, setAnimationForChangeTheme] = useState('none')
  const ContextCurrentTheme = useContext(CurrentThemeContext)
  const { currentTheme, setCurrentTheme } = ContextCurrentTheme

  function handleOnClick() {
    if (currentTheme === 'light') {
      setCurrentTheme('dark')
      setAnimationForChangeTheme('from-left-to-right 0.5s ease-out forwards')
    } else {
      setCurrentTheme('light')
      setAnimationForChangeTheme('from-right-to-left 0.5s ease-out forwards')
    }
  }

  return (
    <Button $currentTheme={currentTheme} onClick={handleOnClick}>
      <Thumb $animationForChangeTheme={animationForChangeTheme} $currentTheme={currentTheme} />
    </Button>
  )
}

export default ButtonChangeTheme
