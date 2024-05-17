import { keyframes } from 'styled-components'

const changeHeightAmountInvestmentWidth120 = keyframes`
  from {
    width: 120px;
    height: 0px;
  }
  to {
    width: 120px;
    height: 100px;
  }
`

const changeHeightAmountInvestmentWidth160 = keyframes`
  from {
    width: 160px;
    height: 0px;
  }
  to {
    width: 160px;
    height: 100px;
  }
`

const changeHeightWithProfitWidth120 = (props) => keyframes`
  from {
    width: 120px;
    height: 0px;
  }
  to {
    width: 120px;
    height: ${props.height}px;
  }
`

const changeHeightWithProfitWidth160 = (props) => keyframes`
  from {
    width: 160px;
    height: 0px;
  }
  to {
    width: 160px;
    height: ${props.height}px;
  }`

const toFullOpacity = keyframes`
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
`

const fromLeftToRight = keyframes`
  from {
    left: -5%;
  }
  to {
    left: calc(105% - 22px);
  }
`

const fromRightToLeft = keyframes`
  from {
    left: calc(105% - 22px);
  }
  to {
    left: -5%;
  }
`
export {
  changeHeightAmountInvestmentWidth120,
  changeHeightAmountInvestmentWidth160,
  changeHeightWithProfitWidth120,
  changeHeightWithProfitWidth160,
  toFullOpacity,
  fromLeftToRight,
  fromRightToLeft,
}
