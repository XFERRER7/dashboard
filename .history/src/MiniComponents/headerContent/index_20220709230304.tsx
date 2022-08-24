import {
  Container,
  TitleContainer,
  Controller
} from './styles'

import { Select } from '../../MiniComponents/select'

export const HeaderContent = () => {

  const options = [

    {
      value: 'Janeiro',
      label: 'Janeiro'
    }
    
  }

  return (
    <Container>
      <TitleContainer>
        <h1>Titulo</h1>
      </TitleContainer>
      <Controller>
        <Select />
        <Select />
      </Controller>
    </Container>
  )
}
