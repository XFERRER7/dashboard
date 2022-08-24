import React, { FC } from 'react'
import { Container } from './styles'

interface IselectProps {
  option: {
    value: string | number;
    label: string | number;
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  }[],
}

export const Select = (props: IselectProps) => {
  return (
    
    <Container>
      <select>
        {
          option.map(props. => <option key={option.value} value={option.value}>{option.label}</option>)
        }
      </select>
    </Container>
  )
}
