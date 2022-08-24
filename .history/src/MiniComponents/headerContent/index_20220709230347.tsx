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
    },
    {
      value: 'Fevereiro',
      label: 'Fevereiro'
    },
    {
      value: 'Março',
      label: 'Março'
    }
    
  ]

  return (
    <Container>
      <TitleContainer>
        <h1>Titulo</h1>
      </TitleContainer>
      <Controller>
        <Select option={options}/>
        <Select />
      </Controller>
    </Container>
  )
}
