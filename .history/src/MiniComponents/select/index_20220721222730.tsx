import React, { FC } from 'react'
import { Container } from './styles'

interface IselectProps {
  option: {
    value: string | number;
    label: string | number;
  }[],
  defaultValue: string;
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
}

export const Select = ({option, onChange, defaultValue}: IselectProps) => {
  return (
    
    <Container>
      <select onChange={onChange}>
        {
          option.map(option => {
            if(defaultValue === option.value) {
              
            }
          } <option key={option.value} value={option.value}>{option.label}</option>)
        }
      </select>
    </Container>
  )
}
