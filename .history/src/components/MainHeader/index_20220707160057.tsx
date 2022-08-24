import { useMemo, useState } from 'react'
import {
  Container,
  Profile,
  UserName,
  ImgUser
}
  from './Styles'


export const MainHeader = () => {

  const [conut, setCount] = useState(0);

  const contador = useMemo(() => {

    setCount(count + 1)
    console.log()

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
