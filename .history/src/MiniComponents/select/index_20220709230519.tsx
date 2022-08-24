import React, { FC } from 'react'
import { Container } from './styles'

interface IselectProps {
  option: {
    values: string | number;
    label: string | number;
  }[]
}

export const Select: FC<IselectProps> = ({option}) => {
  return (
    
    <Container>
      <select>
        <option value={option.vale}>{option.label}</option>
        <option value={option.value}>{option.label}</option>
        <option value={option.value}>{option.label}</option>
        <option value={option.value}>{option.label}</option>
        <option value={option.value}>{option.label}</option>
      </select>
    </Container>
  )
}
