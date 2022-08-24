import { Container } from './Styles'
import { MainHeader } from '../MainHeader'
import { Content } from '../Content'
import { Aside } from '../Aside'

interface BaseLayoutProps {
  children?: ReactNode;
}


export const Layout = ({ children }) => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content>
        {children}
      </Content>
    </Container>
  )
}
