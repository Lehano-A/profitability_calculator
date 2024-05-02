import iconLogo from '../../images/icons/logo.svg'
import styled from 'styled-components'

const HeaderElement = styled.header`
  display: flex;
  width: 100%;
  align-items: center;

  @media (min-width: 320px) {
    max-width: 270px;
  }

  @media (min-width: 480px) {
    max-width: 440px;
  }

  @media (min-width: 640px) {
    max-width: 520px;
  }
`

const Img = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 9px;
  background-color: ${(props) => props.theme.palette.logo.icon};
  padding: 9.75px 11.25px 9.75px 12px;

  @media (min-width: 320px) {
    margin-right: 12px;
  }

  @media (min-width: 480px) {
    margin-right: 20px;
  }
`

const Title = styled.h1`
  font-weight: 700;
  line-height: 1.17;
  word-break: break-word;
  margin: 0;
  color: ${(props) => props.theme.palette.logo.title};

  @media (min-width: 320px) {
    font-size: 2rem;
  }

  @media (min-width: 480px) {
    font-size: 2.8rem;
  }

  @media (min-width: 640px) {
    font-size: 3.6rem;
  }
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
