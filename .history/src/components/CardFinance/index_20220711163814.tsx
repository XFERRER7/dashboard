
import { Toggle } from '../../MiniComponents/Toggle'
import {
  Container,
  
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
