import styled from 'styled-components'

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

function Form({ children }) {
  return <FormElement id='formCalculatingProfitability'>{children}</FormElement>
}

export default Form
