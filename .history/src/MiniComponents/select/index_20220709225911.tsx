import React, { FC } from 'react'
import { Container } from './styles'

interface IselectProps {
  option: {
    value: string | number;
    label: string | number;
  }
}

export const Select: FC<IselectProps> = ({option}) => {
  return (
    
    <Container>
      <select>
        <option value={}>Janeiro</option>
        <option value={}>Fevereiro</option>
        <option value={}>Março</option>
        <option value={}>Abril</option>
        <option value={}>Maio</option>
      </select>
    </Container>
  )
}
