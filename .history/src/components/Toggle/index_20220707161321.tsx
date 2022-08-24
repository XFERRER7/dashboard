import React from 'react'
import { Container, ToggleLabel } from './styles'
import {} from 'react-switch'

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
