import React from 'react'
import { Container, ToggleLabel, ToggleSelector } from './styles'


export const Toggle = () => {
  return (
    <Container>
      <ToggleLabel>
        Light
      </ToggleLabel>
      <Switch
        checked
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => console.log('ok')}
      />
      <ToggleLabel>
        Dark
      </ToggleLabel>
    </Container>
  )
}
