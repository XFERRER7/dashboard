import {
  Container,
  TitleContainer,
  Controller
} from './styles'

import {} from '../../'

export const HeaderContent = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Titulo</h1>
      </TitleContainer>
      <Controller>
        <button>Botão 1</button>
        <button>Botão 2</button>
      </Controller>
    </Container>
  )
}
