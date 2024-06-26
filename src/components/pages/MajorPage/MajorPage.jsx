import { useContext, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import Header from '../../Header/Header'
import ButtonChangeTheme from '../../ButtonChangeTheme/ButtonChangeTheme'
import Main from '../../Main/Main'
import { CurrentSizeScreenContext, CurrentThemeContext } from '../../../contexts/contexts'

const CommonBox = styled.div`
  background: ${(props) => props.$bg};

  @media (min-width: 640px) {
    height: 100%;
  }

  @media (min-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: start;
  }
`

const ContentBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  & #boxHeader,
  & #formCalculatingProfitability {
    @media (min-width: 320px) {
      padding: 0px 20px 0;
    }

    @media (min-width: 960px) {
      padding: 0 20px;
    }
  }
  & #boxHeader,
  & #formCalculatingProfitability {
    @media (min-width: 1200px) {
      padding: 0 50px 0 0px;
    }
  }

  @media (min-width: 320px) {
    padding-top: 60px;
  }

  @media (min-width: 960px) {
    padding: 90px 0 0;
  }

  @media (min-width: 1200px) {
    padding: 160px 0 0;
  }
`

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

function MajorPage() {
  const [bgCommonBox, setBgCommonBox] = useState()
  const [geometryBoxListGeneralCalculation, setGeometryBoxListGeneralCalculation] = useState(null)

  const theme = useTheme()
  const { currentTheme } = useContext(CurrentThemeContext)
  const currentSizeScreen = useContext(CurrentSizeScreenContext)

  useEffect(() => {
    if (geometryBoxListGeneralCalculation) {
      if (currentSizeScreen.width >= theme.breakpoints.l) {
        setBgCommonBox(theme.getParamsBackground(geometryBoxListGeneralCalculation.x))
      } else if (currentSizeScreen.width < theme.breakpoints.l) {
        setBgCommonBox(theme.palette.bg.primary)
      }
    }
  }, [currentSizeScreen.width, geometryBoxListGeneralCalculation, currentTheme])

  return (
    <CommonBox $bg={bgCommonBox}>
      <ContentBox>
        <HeaderBox id='boxHeader'>
          <ButtonChangeTheme />
          <Header />
        </HeaderBox>

        <Main setGeometryBoxListGeneralCalculation={setGeometryBoxListGeneralCalculation} />
      </ContentBox>
    </CommonBox>
  )
}

export default MajorPage
