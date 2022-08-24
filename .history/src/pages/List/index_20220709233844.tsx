import React from 'react'
import { Container } from './styles'

export const List = () => {
  return (
    <Container>
      <HeaderContent titulo={'Dashboard'} lineColor={'#fff'}>
        <Select option={options}/>
      </HeaderContent>
    </Container>
  )
}
