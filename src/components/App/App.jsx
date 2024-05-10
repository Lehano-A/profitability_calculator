import MajorPage from '../pages/MajorPage/MajorPage'
import GlobalStyle from '../../globalStyles'
import { ThemeProvider, useTheme } from 'styled-components'
import { darkTheme, lightTheme } from '../../theme/theme'
import { useEffect, useState } from 'react'
import { CurrentThemeContext, CurrentSizeScreenContext, UserDeviceContext } from '../../contexts/contexts'

function App() {
  const [currentTheme, setCurrentTheme] = useState('light')
  const [currentSizeScreen, setCurrentSizeScreen] = useState({ width: window.innerWidth })
  const [userDevice, setUserDevice] = useState(navigator.userAgent)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setCurrentSizeScreen({ width: window.innerWidth })
    })

    return () =>
      window.addEventListener('resize', () => {
        setCurrentSizeScreen({ width: window.innerWidth })
      })
  }, [])

  useEffect(() => {
    if (/iPhone|iPad/i.test(navigator.userAgent)) {
      setUserDevice('mobile')
    } else {
      setUserDevice('pc')
    }
  }, [])

  return (
    <CurrentThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <CurrentSizeScreenContext.Provider value={currentSizeScreen}>
        <UserDeviceContext.Provider value={userDevice}>
          <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <MajorPage />
          </ThemeProvider>
        </UserDeviceContext.Provider>
      </CurrentSizeScreenContext.Provider>
    </CurrentThemeContext.Provider>
  )
}

export default App
