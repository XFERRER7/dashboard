import React, { useState } from 'react'
import { Container, ToggleLabel, ToggleSelector } from './styles'


export const Toggle = () => {

  const [on, setOn] = useState(false);

  return (
    <Container>
      <ToggleLabel>
        Light
      </ToggleLabel>
      <ToggleSelector
        checked={on}
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
