import React, { FC } from 'react'
import { Container } from './styles'

interface IselectProps {
  option: {
    value: string | number;
    label: string | number;
  }[],
}

export const Select = ({option}) => {
  return (
    
    <Container>
      <select>
        {
          option.map(option => <option value={option.value}>{option.label}</option>)
        }
      </select>
    </Container>
  )
}
