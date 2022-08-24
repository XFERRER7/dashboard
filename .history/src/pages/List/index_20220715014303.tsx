import React from 'react'
import { CardFinance } from '../../components/CardFinance'
import { HeaderContent } from '../../MiniComponents/headerContent'
import { Select } from '../../MiniComponents/select'
import { Container, Filters } from './styles'

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
        <Select option={options}/>
      </HeaderContent>

      <Filters>
        <button className="tag-filter tag-filter-courrent">Recorrentes</button>
        <button className="tag-filter tag-filter-eventual">Eventuais</button>
      </Filters>

      <CardFinance title={'Compras do mês'} dateInfo={'18/04/2023'} 
      amount={'R$ 130,00'} colorHighLighter={'#e44c4e'}
      />
      <CardFinance title={'Compras do mês'} dateInfo={'18/04/2023'} 
      amount={'R$ 130,00'} colorHighLighter={'#e44c4e'}
      />
      <CardFinance title={'Compras do mês'} dateInfo={'18/04/2023'} 
      amount={'R$ 130,00'} colorHighLighter={'#e44c4e'}
      />
      <CardFinance title={'Compras do mês'} dateInfo={'18/04/2023'} 
      amount={'R$ 130,00'} colorHighLighter={'#e44c4e'}
      />
      <CardFinance title={'Compras do mês'} dateInfo={'18/04/2023'} 
      amount={'R$ 130,00'} colorHighLighter={'#e44c4e'}
      />
      <CardFinance title={'Compras do mês'} dateInfo={'18/04/2023'} 
      amount={'R$ 130,00'} colorHighLighter={'#e44c4e'}
      />
      <CardFinance title={'Compras do mês'} dateInfo={'18/04/2023'} 
      amount={'R$ 130,00'} colorHighLighter={'#e44c4e'}
      />
      <CardFinance title={'Compras do mês'} dateInfo={'18/04/2023'} 
      amount={'R$ 130,00'} colorHighLighter={'#e44c4e'}
      />
      
    </Container>
  )
}
