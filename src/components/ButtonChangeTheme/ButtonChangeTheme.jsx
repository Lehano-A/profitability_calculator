import { useContext, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { CurrentThemeContext } from '../../contexts/contexts'
import { fromLeftToRight, fromRightToLeft } from '../../animations'

const Button = styled.button`
  display: flex;
  width: 45px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  position: absolute;
  top: 30px;
  background-color: ${(props) =>
    props.$currentTheme === 'light'
      ? props.theme.palette.buttonChangeTheme.bg.lightTheme
      : props.theme.palette.buttonChangeTheme.bg.darkTheme};

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

const Thumb = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  max-width: 25px;
  width: 22px;
  height: 22px;
  border-radius: 50%;

  ${(props) => (props.$currentTheme === 'light' ? 'left' : 'right')}: -5%; /* left или right для position: absolute */
  background-color: ${(props) => props.theme.palette.buttonChangeTheme.thumb.primary};
  animation: ${(props) => (props.$animationForChangeTheme ? props.$animationForChangeTheme : 'none')};
  box-shadow: 0px 0px 10px 2px ${(props) => props.theme.palette.buttonChangeTheme.thumb.boxShadow};
`

function ButtonChangeTheme() {
  const [animationForChangeTheme, setAnimationForChangeTheme] = useState('none')
  const [timeoutClick, setTimeoutClick] = useState(null)
  const ContextCurrentTheme = useContext(CurrentThemeContext)
  const { currentTheme, setCurrentTheme } = ContextCurrentTheme

  useEffect(() => {
    if (timeoutClick) {
      setTimeout(() => {
        setTimeoutClick()
      }, 500)
    }
  }, [timeoutClick])

  function handleOnClick() {
    if (!timeoutClick) {
      setTimeoutClick(true)

      if (currentTheme === 'light') {
        const animationForDark = css`
          ${fromLeftToRight} 0.5s ease-out forwards
        `

        setCurrentTheme('dark')
        setAnimationForChangeTheme(animationForDark)
      } else {
        const animationForLight = css`
          ${fromRightToLeft} 0.5s ease-out forwards
        `

        setCurrentTheme('light')
        setAnimationForChangeTheme(animationForLight)
      }
    }
  }

  return (
    <Button $currentTheme={currentTheme} onClick={handleOnClick}>
      <Thumb $animationForChangeTheme={animationForChangeTheme} $currentTheme={currentTheme} />
    </Button>
  )
}

export default ButtonChangeTheme
