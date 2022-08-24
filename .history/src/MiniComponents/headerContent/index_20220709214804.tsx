import {
  Container,
  TitleContainer,
  Controller
} from './styles'

import {Select} from '../../MiniComponents/select'

export const HeaderContent = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Titulo</h1>
      </TitleContainer>
      <Controller>
        <Select/>
        <button>Botão 2</button>
      </Controller>
    </Container>
  )
}
