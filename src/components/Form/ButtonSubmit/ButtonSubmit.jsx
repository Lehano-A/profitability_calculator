import styled from 'styled-components'

const Button = styled.button`
  border-radius: 0 90px;
  border: none;
  background-color: ${(props) => props.theme.palette.primary};
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -1.66px;
  cursor: pointer;

  @media (min-width: 320px) {
    width: 280px;
    height: 56px;
    font-size: 1.4rem;
  }

  @media (min-width: 480px) {
    width: 420px;
    height: 70px;
    font-size: 1.8rem;
  }
`

function ButtonSubmit() {
  return <Button type='submit'>Инвестировать сейчас</Button>
}

export default ButtonSubmit
