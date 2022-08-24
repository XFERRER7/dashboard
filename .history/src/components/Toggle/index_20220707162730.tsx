import React from 'react'
import { Container, ToggleLabel, ToggleSelector } from './styles'


export const Toggle = () => {

  const [on, setOn] = useS

  return (
    <Container>
      <ToggleLabel>
        Light
      </ToggleLabel>
      <ToggleSelector
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
