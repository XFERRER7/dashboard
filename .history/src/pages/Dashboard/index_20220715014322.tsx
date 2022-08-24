import React from 'react'
import { Container } from './styles'
import { HeaderContent } from '../../MiniComponents/headerContent'
import { Select } from '../../MiniComponents/select'

export const Dashboard = () => {

  const options = [
    {
      value: 'Janeiro',
      label: 'Janeiro'
    },
    {
      value: 'Fevereiro',
      label: 'Fevereiro'
    },
    {
      value: 'Março',
      label: 'Março'
    }
    
  ]

  return (
    <Container>
      <HeaderContent titulo={'Dashboard'} lineColor={'#fff'}>
        <Select option={options}/>
        <Select option={options}/>
      </HeaderContent>
    </Container>
  )
}
