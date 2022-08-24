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


  return (
    <Container>
      <TitleContainer >
        <h1>{titulo}</h1>
      </TitleContainer>
      <Controller>
        {children}
      </Controller>
    </Container>
  )
}
