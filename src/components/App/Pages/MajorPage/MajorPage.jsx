import { useEffect, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import InputAmountInvestment from '../../../Form/InputAmountInvestment/InputAmountInvestment'
import Form from '../../../Form/Form/Form'
import MonetaryUnit from '../../../Form/MonetaryUnit/MonetaryUnit'
import InputTypeDeposit from '../../../Form/InputTypeDeposit/InputTypeDeposit'
import Header from '../../../Header/Header'
import InputInvestmentPeriod from '../../../Form/InputInvestmentPeriod/InputInvestmentPeriod'
import CalculationInterestRate from '../../../Form/CalculationInterestRate/CalculationInterestRate'
import StartEndInvesting from '../../../Form/StartEndInvesting/StartEndInvesting'
import ListGeneralСalculation from '../../../Form/ListGeneralСalculation/ListGeneralСalculation'
import ButtonChangeTheme from '../../../ButtonChangeTheme/ButtonChangeTheme'

const CommonBox = styled.div`
  position: relative;

  @media (min-width: 960px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
  }
`

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: center;
    padding-top: 160px;
  }
`

const BoxHeaderAndForm = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) {
    padding: 60px 20px 0;
  }

  @media (min-width: 960px) {
    padding: 0 20px 0 20px;
  }

  @media (min-width: 1200px) {
    padding: 0 50px 0 30px;
  }
`

const BoxTypeDepositAndMonetaryUnit = styled.div`
  @media (min-width: 640px) {
    display: flex;
    justify-content: start;
    align-items: last baseline;

    & > :first-child {
      margin-right: 40px;
    }
  }
`

const BoxInvestmentPeriodAndInterestRate = styled.div`
  @media (min-width: 640px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > :first-child {
      margin-right: 40px;
      min-width: 320px;
      width: 100%;
    }

    & > :last-child {
      max-width: 350px;
    }
  }

  @media (min-width: 1200px) {
    & > :last-child {
      max-width: 200px;
    }
  }
`

const BoxListGeneralCalculation = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) {
    width: 100%;
    background: ${(props) => props.theme.palette.bg.secondary};
    padding: 0 20px 74px;
  }

  @media (min-width: 480px) {
    padding: 0 20px 60px;
  }

  @media (min-width: 640px) {
    padding: 40px 20px 60px;
  }

  @media (min-width: 960px) {
    background: none;
    width: 320px;
    padding: 0 20px;
  }

  @media (min-width: 1200px) {
    width: 420px;
    padding: 0 30px;
  }
`

function MajorPage() {
  const refCommonBox = useRef(null)
  const refListGeneralСalculation = useRef(null)
  const theme = useTheme()

  const [geometryBoxListGeneralCalculation, setGeometryBoxListGeneralCalculation] = useState(null)

  useEffect(() => {
    window.addEventListener('resize', getGeometry)
    return () => {
      window.addEventListener('resize', getGeometry)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth >= 960 && refCommonBox.current !== null && geometryBoxListGeneralCalculation) {
      refCommonBox.current.style.background = theme.getParamsBackground(geometryBoxListGeneralCalculation.x)
    } else if (window.innerWidth < 960) {
      refCommonBox.current.style.background = theme.palette.bg.primary
    }
  }, [refCommonBox, geometryBoxListGeneralCalculation, theme])

  useEffect(() => {
    if (refListGeneralСalculation.current !== null) {
      setGeometryBoxListGeneralCalculation(refListGeneralСalculation.current?.getBoundingClientRect())
    }
  }, [refListGeneralСalculation])

  function getGeometry() {
    const geometry = refListGeneralСalculation.current?.getBoundingClientRect()
    setGeometryBoxListGeneralCalculation(geometry)
  }

  return (
    <CommonBox ref={refCommonBox}>
      <MainBox>
        <BoxHeaderAndForm>
          <ButtonChangeTheme />
          <Header />
          <Form>
            <BoxTypeDepositAndMonetaryUnit id='boxTypeDepositAndMonetaryUnit'>
              <InputTypeDeposit />
              <MonetaryUnit />
            </BoxTypeDepositAndMonetaryUnit>

            <InputAmountInvestment />

            <BoxInvestmentPeriodAndInterestRate id='boxInvestmentPeriodAndInterestRate'>
              <InputInvestmentPeriod />
              <CalculationInterestRate />
            </BoxInvestmentPeriodAndInterestRate>

            <StartEndInvesting />
          </Form>
        </BoxHeaderAndForm>

        <BoxListGeneralCalculation ref={refListGeneralСalculation}>
          <ListGeneralСalculation />
        </BoxListGeneralCalculation>
      </MainBox>
    </CommonBox>
  )
}

export default MajorPage
