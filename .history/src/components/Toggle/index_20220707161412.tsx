import React from 'react'
import { Container, ToggleLabel } from './styles'
import Switch from 'react-switch'

export const Toggle = () => {
  return (
    <Container>
      <ToggleLabel>
        Light
      </ToggleLabel>
      <Switch
        checked
        onChange={()}
      />
      <ToggleLabel>
        Dark
      </ToggleLabel>
    </Container>
  )
}
