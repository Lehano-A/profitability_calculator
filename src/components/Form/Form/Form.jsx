import styled from 'styled-components'

const FormElement = styled.form`
  @media (min-width: 320px) {
    & > #componentInputTypeDeposit /* 1 */ {
      margin: 40px 0 36px;
    }

    & > #componentMonetaryUnit /* 2 */ {
      margin-bottom: 50px;
    }

    & > #componentInputAmountInvestment, /* 3 */
    & > #componentCalculationInterestRate, /* 5 */
    & > #componentStartEndInvesting, /* 6 */ {
      margin-bottom: 40px;
    }

    & > #componentInputInvestmentPeriod /* 4 */ {
      margin-bottom: 43px;
    }
  }
`

function Form({ children }) {
  return <FormElement>{children}</FormElement>
}

export default Form
