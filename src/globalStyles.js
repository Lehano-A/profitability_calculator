import './fonts/fonts.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
   box-sizing: border-box;
  }

  :root {
   font-size: 62.5%;
  }

  body {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    margin: 0;
    background-color: ${(props) => props.theme.palette.mainBackground};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* не увеличиваем специфичность для #inputRangeAmountInvestment, поэтому :where */
  :where(input:not(#inputRangeInvestmentPeriod)):focus,
  select:focus,
  #boxInputRangeAndRulerValues:focus-within {
    border-radius: 9px;
    outline: ${(props) => props.theme.getParamsFocus()};
    outline-offset: -2px;
  }

  #inputRangeAmountInvestment:focus,
  #boxInputRangeAndRulerValues:focus-within {
    outline-offset: 6px;
  }
`

export default GlobalStyle
