import {
  Container,
  Header,
  Title,
  ImgLogo,
  Menu,
  ItemMenu
} from './Styles'
import logo from '../../assets/Logo.svg'

export const Aside = () => {
  return (
    <Container>
      <Header>
        <ImgLogo src={logo} alt="Logo dashboard" />
        <Title>Dashboard</Title>
      </Header>
      <Menu>
        <ItemMenu>Dashboard</ItemMenu>
        <ItemMenu>Entradas</ItemMenu>
        <ItemMenu>Saídas</ItemMenu>
        <ItemMenu>Sair</ItemMenu>
      </Menu>
    </Container>
  )
}
