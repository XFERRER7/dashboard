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
import listOfMonths from '../../utils/Months'


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
  const [frequencySelected, setFrequecySelected] = useState<string[]>(['recorrente', 'eventual'])

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses

  }, [type])


  const handleFrequecy = (frequecy: string) => {

    const alreadySelected = frequencySelected.findIndex(item => item === frequecy)

    if(alreadySelected <= 0) {

      const filtered = frequencySelected.filter(item => item !== frequecy)
      setFrequecySelected(filtered)

    }
    else {
      setFrequecySelected((prev) => [...prev, frequecy])
    }


  }

  useEffect(() => {
    const itemList = listData
      .filter(item => {

        const date = new Date(item.date);
        const month = String(date.getMonth() + 1); 
        const year = String(date.getFullYear()); 

        return month === monthSelected && year === yearSelected && frequencySelected.includes(item.frequency);
      })
      .map(item => {
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
  }, [monthSelected, yearSelected, frequencySelected])




  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas'

  }, [type])

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#03BB85' : '#E44C4E'

  }, [type])

  
  const years = useMemo(() => {

    let uniqueYears:number[] = []

    listData.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if(!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map(item => {
      return {
        value: item,
        label: item
      }
    })


  }, [listData])


  const months = useMemo(() => {

    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
     
  }, [])


  return (
    <Container>
      <HeaderContent titulo={title} lineColor={lineColor}>
        <Select defaultValue={monthSelected} option={months} onChange={(e) => { setMonthSelected(e.target.value) }} />
        <Select defaultValue={yearSelected} option={years} onChange={(e) => { setYearSelected(e.target.value) }} />
      </HeaderContent>

      <Filters>
        <button 
        className={`tag-filter tag-filter-courrent ${isAc}`}
        onClick={() => {handleFrequecy('recorrente')}}
        >Recorrentes</button>
        <button 
        className={`tag-filter tag-filter-eventual`}
        onClick={() => {handleFrequecy('eventual')}}
        >Eventuais</button>
      </Filters>


      {
        data.map((item,index) => (
          <CardFinance
            key={index}
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
