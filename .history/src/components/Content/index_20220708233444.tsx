import { Container } from './Styles'


export const Content = (props: any) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}
