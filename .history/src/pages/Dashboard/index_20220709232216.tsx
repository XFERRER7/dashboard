import React from 'react'
import { Container } from './styles'
import { HeaderContent } from '../../MiniComponents/headerContent'
import { Select } from '../../MiniComponents/select'

export const Dashboard = () => {
  return (
    <Container>
      <HeaderContent titulo={''} lineColor={''} children={undefined}>
        <Select/>
      </HeaderContent>
    </Container>
  )
}
