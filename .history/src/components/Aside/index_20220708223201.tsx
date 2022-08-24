import {
  Container,
  Header,
  Title,
  ImgLogo,
  Menu,
  ItemMenu
} from './Styles'
import logo from '../../assets/Logo.svg'
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  
} from 'react-icons/md'

export const Aside = () => {
  return (
    <Container>
      <Header>
        <ImgLogo src={logo} alt="Logo dashboard" />
        <Title>Dashboard</Title>
      </Header>
      <Menu>
        <ItemMenu href="#">Dashboard</ItemMenu>
        <ItemMenu href="#">Entradas</ItemMenu>
        <ItemMenu href="#">Saídas</ItemMenu>
        <ItemMenu href="#">Sair</ItemMenu>
      </Menu>
    </Container>
  )
}
