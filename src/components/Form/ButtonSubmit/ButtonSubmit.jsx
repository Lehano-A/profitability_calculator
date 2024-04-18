import styled from 'styled-components'

const Button = styled.button`
  border-radius: 0 90px;
  border: none;
  background-color: ${(props) => props.theme.palette.primary};
  text-transform: uppercase;
  cursor: pointer;
  line-height: 1.17;

  @media (min-width: 320px) {
    width: 280px;
    height: 56px;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: -0.55px;
  }

  @media (min-width: 480px) {
    width: 420px;
    height: 70px;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -0.67px;
  }
`

function ButtonSubmit() {
  return <Button type='submit'>Инвестировать сейчас</Button>
}

export default ButtonSubmit
