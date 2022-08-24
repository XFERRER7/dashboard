import React, { FC } from 'react'
import { Container } from './styles'

interface IselectProps {
  option: {
    values: string | number;
    label: string | number;
  }[],
}

export const Select: FC<IselectProps> = ({option}) => {
  return (
    
    <Container>
      <select>
        {
          option.map(option => opttion)
        }
      </select>
    </Container>
  )
}
