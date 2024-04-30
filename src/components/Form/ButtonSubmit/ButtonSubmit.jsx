import styled from 'styled-components'

const Button = styled.button`
  border-radius: 0 90px;
  border: none;
  background-color: ${(props) => props.theme.palette.primary};
  text-transform: uppercase;
  cursor: pointer;
  line-height: 1.17;

  @media (min-width: 320px) {
    width: 100%;
    max-width: 280px;
    height: 56px;
    font-size: 1.4rem;
    font-weight: 900;
    letter-spacing: -1.66px;
  }

  @media (min-width: 480px) {
    max-width: 420px;
    height: 70px;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -0.67px;
  }

  @media (min-width: 640px) {
    max-width: 600px;
  }

  @media (min-width: 960px) {
    width: 100%;
    padding: 0;
    font-size: 16px;
    font-weight: 900;
    letter-spacing: -2px;
  }

  @media (min-width: 1200px) {
    color: ${(props) => props.theme.palette.primary};
    background-color: ${(props) => props.theme.palette.tertiary};
    letter-spacing: -0.75px;

    &:focus {
      outline: none;
      border: ${props => `2px solid ${props.theme.palette.primary}`};
    }
  }
`

function ButtonSubmit() {
  return (
    <Button type='submit' form='formCalculatingProfitability'>
      Инвестировать сейчас
    </Button>
  )
}

export default ButtonSubmit
