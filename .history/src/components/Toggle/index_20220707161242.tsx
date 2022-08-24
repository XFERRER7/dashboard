import React from 'react'
import { Container, ToggleLabel } from './styles'

export const Toggle = () => {
  return (
    <Container>
      <ToggleLabel>
        Light
      </ToggleLabel>
      
      <ToggleLabel>
        Dark
      </ToggleLabel>
    </Container>
  )
}