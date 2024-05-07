import { useContext, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import Header from '../../Header/Header'
import ButtonChangeTheme from '../../ButtonChangeTheme/ButtonChangeTheme'
import Main from '../../Main/Main'
import { CurrentSizeScreenContext } from '../../../contexts/contexts'

const CommonBox = styled.div`
  position: relative;
  background: ${(props) => props.$bg};

  @media (min-width: 960px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  & #boxHeader,
  & #formCalculatingProfitability {
    @media (min-width: 320px) {
      padding: 0px 20px 0;
    }

    @media (min-width: 960px) {
      padding: 0 20px 0 0;
    }
  }

  & #formCalculatingProfitability {
    @media (min-width: 1200px) {
      padding: 0 50px 0 0px;
    }
  }

  @media (min-width: 960px) {
    flex-direction: row;

    justify-content: center;
  }
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 320px) {
    padding-top: 60px;
  }

  @media (min-width: 960px) {
    padding: 160px 0 0 20px;
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
  const currentSizeScreen = useContext(CurrentSizeScreenContext)

  useEffect(() => {
    if (currentSizeScreen.width >= theme.breakpoints.l && geometryBoxListGeneralCalculation) {
      setBgCommonBox(theme.getParamsBackground(geometryBoxListGeneralCalculation.x))
    } else if (currentSizeScreen.width < theme.breakpoints.l) {
      setBgCommonBox(theme.palette.bg.primary)
    }
  }, [currentSizeScreen.width, geometryBoxListGeneralCalculation, theme])

  return (
    <CommonBox $bg={bgCommonBox}>
      <Box>
        <ContentBox>
          <HeaderBox id='boxHeader'>
            <ButtonChangeTheme />
            <Header />
          </HeaderBox>

          <Main setGeometryBoxListGeneralCalculation={setGeometryBoxListGeneralCalculation} />
        </ContentBox>
      </Box>
    </CommonBox>
  )
}

export default MajorPage
