import { useMemo } from 'react'
import {
  Container,
  Profile,
  UserName,
  ImgUser
}
  from './Styles'


export const MainHeader = () => {

  var count

  const contador = useMemo(() => {

  }, [])

  return (
    <Container>
      <h1>Header</h1>

      <Profile>
        <ImgUser/>
        <UserName>Alexandre Talles</UserName>

      </Profile>
    </Container>
  )
}
