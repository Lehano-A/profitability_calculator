import styled from 'styled-components'
import InputTypeDeposit from '../InputTypeDeposit/InputTypeDeposit'
import MonetaryUnit from '../MonetaryUnit/MonetaryUnit'
import InputAmountInvestment from '../InputAmountInvestment/InputAmountInvestment'
import InputInvestmentPeriod from '../InputInvestmentPeriod/InputInvestmentPeriod'
import CalculationInterestRate from '../CalculationInterestRate/CalculationInterestRate'
import StartEndInvesting from '../StartEndInvesting/StartEndInvesting'
import { useEffect, useRef } from 'react'

const FormElement = styled.form`
  @media (min-width: 320px) {
    & #componentInputTypeDeposit {
      margin-bottom: 36px;
    }

    & #boxTypeDepositAndMonetaryUnit {
      margin-top: 40px;
      margin-bottom: 50px;
    }

    & #componentInputAmountInvestment,
    & #componentInputInvestmentPeriod,
    & #boxInvestmentPeriodAndInterestRate,
    & #componentStartEndInvesting {
      margin-bottom: 40px;
    }
  }

  @media (min-width: 640px) {
    & #boxTypeDepositAndMonetaryUnit {
      margin-top: 60px;
    }

    & #boxTypeDepositAndMonetaryUnit,
    & #boxInvestmentPeriodAndInterestRate {
      margin-bottom: 40px;
    }

    & #componentInputTypeDeposit,
    & #componentInputInvestmentPeriod {
      margin-bottom: 0;
    }

    & #componentInputTypeDeposit {
      margin-top: 0;
    }
  }

  @media (min-width: 960px) {
    & #componentStartEndInvesting {
      margin-bottom: 0px;
    }
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

function Form() {
  const forwardRefInputNumberAmountInvestment = useRef(null)
  const forwardRefInputRangeInvetmentPeriod = useRef(null)

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp)

    return () => document.addEventListener('keyup', handleKeyUp)
  }, [])

  function handleKeyUp(e) {
    if (e.code === 'Tab') {
      if (e.shiftKey && e.target.id === 'boxInputRangeAndRulerValues') {
        // если переходим с помощью Tab + Shift обратно
        forwardRefInputNumberAmountInvestment.current.focus()
        return
      }

      if (e.target.id === 'boxInputRangeAndRulerValues' && forwardRefInputRangeInvetmentPeriod.current !== null) {
        forwardRefInputRangeInvetmentPeriod.current.focus() // если с помощью Tab попадаем на родителя-обёртку InputRange, то переводим фокус на inputRange (для iOS)
      }
    }
  }

  return (
    <FormElement id='formCalculatingProfitability'>
      <BoxTypeDepositAndMonetaryUnit id='boxTypeDepositAndMonetaryUnit'>
        <InputTypeDeposit />
        <MonetaryUnit />
      </BoxTypeDepositAndMonetaryUnit>

      <InputAmountInvestment ref={forwardRefInputNumberAmountInvestment} />

      <BoxInvestmentPeriodAndInterestRate id='boxInvestmentPeriodAndInterestRate'>
        <InputInvestmentPeriod ref={forwardRefInputRangeInvetmentPeriod} />
        <CalculationInterestRate />
      </BoxInvestmentPeriodAndInterestRate>

      <StartEndInvesting />
    </FormElement>
  )
}

export default Form
