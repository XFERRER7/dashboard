import {Container} from './Styles'
import { MainHeader} from '../MainHeader'
import { Content} from '../Content'
import { Aside} from '../Aside'

export const Layout = ({children}) => {
  return (
    <Container>
      <MainHeader/>
      <Aside/>
      <Content/>  
    </Container>
  )
}
