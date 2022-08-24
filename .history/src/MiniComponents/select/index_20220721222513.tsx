import React, { FC } from 'react'
import { Container } from './styles'

interface IselectProps {
  option: {
    value: string | number;
    label: string | number;
  }[],
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
}

export const Select = ({option, onChange}: IselectProps) => {
  return (
    
    <Container>
      <select defaultChecked={} onChange={onChange}>
        {
          option.map(option => <option key={option.value} value={option.value}>{option.label}</option>)
        }
      </select>
    </Container>
  )
}
