import styled from 'styled-components'

const Button = styled.button`
  border-radius: 0 90px;
  border: none;
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
    background-color: ${(props) => props.theme.palette.buttonSubmit.bg.primary};
    color: ${(props) => props.theme.palette.buttonSubmit.text.secondary};

    &:focus {
      border-color: transparent;
      outline: ${(props) => props.theme.getParamsFocus('buttonSubmit', 'primary')};
    }
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
    color: ${(props) => props.theme.palette.buttonSubmit.text.primary};
    background-color: ${(props) => props.theme.palette.buttonSubmit.bg.secondary};
    letter-spacing: -0.75px;

    &:focus {
      border-color: transparent;
      outline: ${(props) => props.theme.getParamsFocus('buttonSubmit', 'secondary')};
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
