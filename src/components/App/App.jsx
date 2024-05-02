import MajorPage from './Pages/MajorPage/MajorPage'
import GlobalStyle from '../../globalStyles'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../../theme/theme'
import { useState } from 'react'
import { CurrentThemeContext } from '../../Contexts/Contexts'

function App() {
  const [currentTheme, setCurrentTheme] = useState('light')

  return (
    <CurrentThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <MajorPage />
      </ThemeProvider>
    </CurrentThemeContext.Provider>
  )
}

export default App
