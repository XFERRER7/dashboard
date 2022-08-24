import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardFinance } from '../../components/CardFinance'
import { HeaderContent } from '../../MiniComponents/headerContent'
import { Select } from '../../MiniComponents/select'
import { Container, Filters } from './styles'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'

interface IData {
  description: string;
  amountFormatted: string;
  frequency: string;
  date: string;
  tagColorFormatted: string;
}

export const List = () => {

  const { type } = useParams();

  const [data, setData] = useState<IData[]>([]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses

  }, [type])

  useEffect(() => {
    const itemList = listData.map(item => {
      return {
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        date: item.date,
        tagColorFormatted: '#e44c4e'
      }
    })

    setData(itemList)

  }, [])




  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas'

  }, [type])

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#03BB85' : '#E44C4E'

  }, [type])




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
      <HeaderContent titulo={title} lineColor={lineColor}>
        <Select option={options} />
        <Select option={optionYear} />
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
