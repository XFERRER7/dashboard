import {
  Container,
  Header,
  Title,
  ImgLogo,
  Menu,
  
} from './Styles'


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
