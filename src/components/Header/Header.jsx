import iconLogo from '../../images/icons/logo.svg'
import styled from 'styled-components'

const HeaderElement = styled.header`
  display: flex;
  max-width: 270px;
  width: 100%;
  align-items: center;
`

const Img = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 9px;
  background-color: ${(props) => props.theme.palette.primary};
  padding: 9.75px 11.25px 9.75px 12px;
  margin: 0 12px 0 0;
`

const Title = styled.h1`
  display: inline;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  word-break: break-word;
  margin: 0;
`

function Header() {
  return (
    <HeaderElement>
      <Img src={iconLogo} alt='Логотип сайта' />
      <Title>Калькулятор доходности</Title>
    </HeaderElement>
  )
}

export default Header
