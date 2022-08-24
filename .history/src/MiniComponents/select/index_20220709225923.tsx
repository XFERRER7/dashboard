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
        <option value={option.label}>Janeiro</option>
        <option value={option.label}>Fevereiro</option>
        <option value={option.label}>Março</option>
        <option value={option.label}>Abril</option>
        <option value={option.label}>Maio</option>
      </select>
    </Container>
  )
}
