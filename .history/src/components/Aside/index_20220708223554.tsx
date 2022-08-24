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
  MdExitToApp
} from 'react-icons/md'

export const Aside = () => {
  return (
    <Container>
      <Header>
        <ImgLogo src={logo} alt="Logo dashboard" />
        <Title>Dashboard</Title>
      </Header>
      <Menu>
        <ItemMenu href="#">
          <MdDashboard/>
          Dashboard
        </ItemMenu>
        <ItemMenu href="#">
        <MdArrowUpward/>
          Entradas
        </ItemMenu>
        <ItemMenu href="#">
        <MdArrowDownward/>
          
          Saídas
        </ItemMenu>
        <ItemMenu href="#">
          <MdExitToApp/>
          Sair
        </ItemMenu>
      </Menu>
    </Container>
  )
}
