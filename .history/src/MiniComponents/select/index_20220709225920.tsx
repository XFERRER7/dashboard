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
        <option value={option}>Janeiro</option>
        <option value={option}>Fevereiro</option>
        <option value={option}>Março</option>
        <option value={option}>Abril</option>
        <option value={option}>Maio</option>
      </select>
    </Container>
  )
}
