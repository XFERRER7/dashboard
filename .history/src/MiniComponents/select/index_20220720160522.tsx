import React, { FC } from 'react'
import { Container } from './styles'

interface IselectProps {
  option: {
    value: string | number;
    label: string | number;
  }[],
  defaultValue?: string | number;
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
}

export const Select = ({option, onChange, defaultValue}: IselectProps) => {
  return (
    
    <Container>
      <select onChange={onChange} defaultValue={defaultValue}>
        {
          option.map(option => <option key={option.value} value={option.value}>{option.label}</option>)
        }
      </select>
    </Container>
  )
}