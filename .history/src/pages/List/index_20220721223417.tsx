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
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1))
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()))

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
    console.log("mês: ",monthSelected)
    console.log("ano: ",yearSelected)
  }, [])




  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas'

  }, [type])

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#03BB85' : '#E44C4E'

  }, [type])




  const options = [
    {
      value: '1',
      label: 'Janeiro'
    },
    {
      value: '2',
      label: 'Fevereiro'
    },
    {
      value: '3',
      label: 'Março'
    },
    {
      value: '4',
      label: 'Abril'
    },
    {
      value: '5',
      label: 'Maio'
    },
    {
      value: '6',
      label: 'Junho'
    },
    {
      value: '7',
      label: 'Julho'
    },
    {
      value: '8',
      label: 'Agosto'
    },
    {
      value: '9',
      label: 'Setembro'
    },
    {
      value: '10',
      label: 'Outubro'
    },
    {
      value: '11',
      label: 'Novembro'
    },
    {
      value: '12',
      label: 'Dezembro'
    }

  ]

  const optionYear = [
    {
      value: '2022',
      label: '2022'
    },
    {
      value: '2023',
      label: '2023'
    },
    {
      value: '2024',
      label: '2024'
    },
    {
      value: '2025',
      label: '2025'
    },
    {
      value: '2026',
      label: '2026'
    },
    {
      value: '2027',
      label: '2027'
    }

  ]


  return (
    <Container>
      <HeaderContent titulo={title} lineColor={lineColor}>
        <Select defaultValue={monthSelected} option={options} onChange={(e) => {setMonthSelected(e.target.value)}}/>
        <Select defaultValue={yearSelected} option={optionYear} onChange={(e) => {setYearSelected(e.target.value)}}/>
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
