import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Form from '../Form/Form/Form'
import ListGeneralСalculation from '../Form/ListGeneralСalculation/ListGeneralСalculation'

const MainBox = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 960px) {
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
`

const BoxListGeneralCalculation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

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

function Main({ setGeometryBoxListGeneralCalculation }) {
  const refListGeneralСalculation = useRef(null)

  useEffect(() => {
    window.addEventListener('resize', getGeometry)
    return () => {
      window.addEventListener('resize', getGeometry)
    }
  }, [])

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
    <MainBox>
      <Form />

      <BoxListGeneralCalculation ref={refListGeneralСalculation}>
        <ListGeneralСalculation />
      </BoxListGeneralCalculation>
    </MainBox>
  )
}

export default Main
