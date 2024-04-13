import styled from 'styled-components'

const Button = styled.button`
  width: 280px;
  height: 56px;
  border-radius: 0 90px;
  border: none;
  background-color: ${(props) => props.theme.palette.primary};
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: -1.66px;
  cursor: pointer;
`

function ButtonSubmit() {
  return <Button type='submit'>Инвестировать сейчас</Button>
}

export default ButtonSubmit
