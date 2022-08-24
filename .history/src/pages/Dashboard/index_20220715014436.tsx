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

  const optionYear = [
    {
      value: '2022',
      label: '2022'
    },
    {
      value: '2021',
      label: '2021'
    },
    {
      value: '2020',
      label: '2020'
    }
    
  ]

  return (
    <Container>
      <HeaderContent titulo={'Dashboard'} lineColor={'#fff'}>
        <Select option={options}/>
        <Select option={optionYear}/>
      </HeaderContent>
    </Container>
  )
}
