import React, { useMemo } from 'react'
import { CardFinance } from '../../components/CardFinance'
import { HeaderContent } from '../../MiniComponents/headerContent'
import { Select } from '../../MiniComponents/select'
import { Container, Filters } from './styles'

interface 

export const List = ({ match }) => {

  const title = useMemo(() => {

  }, [])


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
      <HeaderContent titulo={'Saídas'} lineColor={'#E44C4E'}>
        <Select option={options}/>
        <Select option={optionYear}/>
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
