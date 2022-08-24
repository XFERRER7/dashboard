import {
  Container,
  TitleContainer,
  Controller
} from './styles'

import { Select } from '../../MiniComponents/select'

interface IHeaderContentProps {
  titulo: string;
  lineColor: string;
  children: React.ReactNode;
}

export const HeaderContent = ({titulo, lineColor, children}: IHeaderContentProps) => {

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
        <h1>{titulo}</h1>
      </TitleContainer>
      <Controller>
        <Select option={options}/>
        <Select option={options}/>
      </Controller>
    </Container>
  )
}
