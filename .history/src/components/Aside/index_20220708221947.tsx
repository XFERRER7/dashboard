import {
  Container,
  Header,
  Title,
  ImgLogo,
  Menu,
  ItemMenu
} from './Styles'
import logo from '../'

export const Aside = () => {
  return (
    <Container>
      <Header>
        <ImgLogo src="" alt="" />
        <Title>Dashboard</Title>
      </Header>
      <Menu>
        <ItemMenu>Dashboard</ItemMenu>
      </Menu>
    </Container>
  )
}
