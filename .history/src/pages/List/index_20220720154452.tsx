import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardFinance } from '../../components/CardFinance'
import { HeaderContent } from '../../MiniComponents/headerContent'
import { Select } from '../../MiniComponents/select'
import { Container, Filters } from './styles'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import { FormatCourrency } from '../../utils/FormatCourrency'
import { FormatDate } from '../../utils/FormatDate'

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  date: string;
  tagColorFormatted: string;
}

export const List = () => {

  const { type } = useParams();

  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>('')
  const [yearSelected, setYearSelected] = useState<string>('')

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses

  }, [type])

  useEffect(() => {
    const itemList = listData.map(item => {
      return {
        id: String(Math.random() * listData.length),
        description: item.description,
        amountFormatted: FormatCourrency(Number(item.amount)),
        frequency: item.frequency,
        date: FormatDate(item.date),
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
        <Select option={options} onChange()/>
        <Select option={optionYear} />
      </HeaderContent>

      <Filters>
        <button className="tag-filter tag-filter-courrent">Recorrentes</button>
        <button className="tag-filter tag-filter-eventual">Eventuais</button>
      </Filters>


      {
        data.map(item => (
          <CardFinance
            key={item.id}
            title={item.description}
            dateInfo={item.date}
            amount={item.amountFormatted}
            colorHighLighter={item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'}
          />
        ))
      }


    </Container>
  )
}
