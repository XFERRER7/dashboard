import React from 'react'
import { HeaderContent } from '../../MiniComponents/headerContent'
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
