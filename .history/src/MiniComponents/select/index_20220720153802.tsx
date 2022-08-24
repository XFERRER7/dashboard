import React, { FC } from 'react'
import { Container } from './styles'

interface IselectProps {
  option: {
    value: string | number;
    label: string | number;
    onChange(event: )
  }[],
}

export const Select = ({option}: IselectProps) => {
  return (
    
    <Container>
      <select>
        {
          option.map(option => <option key={option.value} value={option.value}>{option.label}</option>)
        }
      </select>
    </Container>
  )
}
