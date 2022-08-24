import React from 'react'
import { CardFinance } from '../../components/CardFinance'
import { HeaderContent } from '../../MiniComponents/headerContent'
import { Select } from '../../MiniComponents/select'
import { Container } from './styles'

export const List = () => {

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
      <HeaderContent titulo={'Saídas'} lineColor={'#E44C4E'}>
        <Select option={options}/>
      </HeaderContent>

      <CardFinance title={'Compras do m'} dateInfo={''} amount={0} colorHighLighter={''} colorContainer={''}/>
      
    </Container>
  )
}
