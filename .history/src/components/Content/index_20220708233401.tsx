import { Container } from './Styles'


export const Content = ({ children }: AbortSignal) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
