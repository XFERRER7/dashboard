
import { Toggle } from '../Toggle'
import {
  Container,
  Profile,
  UserName,
  ImgUser
}
  from './Styles'


export const MainHeader = () => {

  return (
    <Container>
      <Toggle/>

      <Profile>
        <ImgUser/>
        <UserName>Alexandre Talles</UserName>

      </Profile>
    </Container>
  )
}
