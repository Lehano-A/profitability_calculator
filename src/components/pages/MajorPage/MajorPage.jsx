import { useEffect, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import Header from '../../Header/Header'
import ButtonChangeTheme from '../../ButtonChangeTheme/ButtonChangeTheme'
import Main from '../../Main/Main'

const CommonBox = styled.div`
  position: relative;

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
  const refCommonBox = useRef(null)
  const theme = useTheme()

  const [geometryBoxListGeneralCalculation, setGeometryBoxListGeneralCalculation] = useState(null)

  useEffect(() => {
    if (window.innerWidth >= 960 && refCommonBox.current !== null && geometryBoxListGeneralCalculation) {
      refCommonBox.current.style.background = theme.getParamsBackground(geometryBoxListGeneralCalculation.x)
    } else if (window.innerWidth < 960) {
      refCommonBox.current.style.background = theme.palette.bg.primary
    }
  }, [refCommonBox, geometryBoxListGeneralCalculation, theme])

  return (
    <CommonBox ref={refCommonBox}>
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
