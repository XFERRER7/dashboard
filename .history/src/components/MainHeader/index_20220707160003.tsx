import { useMemo } from 'react'
import {
  Container,
  Profile,
  UserName,
  ImgUser
}
  from './Styles'


export const MainHeader = () => {

  const contador = useMemo(() => {
    let count: number = 0;


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
