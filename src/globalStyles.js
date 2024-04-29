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
   font-family: 'Roboto', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  }

  input:focus,
  select:focus,
  button:focus
  {
    outline: none;
    border: ${props => `2px solid ${props.theme.palette.tertiary}`};
  }
`

export default GlobalStyle
