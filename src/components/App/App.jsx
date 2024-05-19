import MajorPage from '../pages/MajorPage/MajorPage'
import GlobalStyle from '../../globalStyles'
import { useContext, useEffect } from 'react'
import { CurrentSizeScreenContext, UserDeviceContext } from '../../contexts/contexts'

function App() {
  const { setCurrentSizeScreen } = useContext(CurrentSizeScreenContext)
  const { setUserDevice } = useContext(UserDeviceContext)

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
    <>
      <GlobalStyle />
      <MajorPage />
    </>
  )
}

export default App
