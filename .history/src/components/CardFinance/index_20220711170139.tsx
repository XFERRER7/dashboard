
import { Toggle } from '../../MiniComponents/Toggle'
import {
  Container,
  InfoCard,
  Highlighter
}
  from './Styles'


interface ICardFinanceProps {
  title: string;
  dateInfo: string;
  amount: number;
  colorHighLighter: string;
  colorContainer: string;
}


export const CardFinance = ({title,dateInfo, amount,colorHighLighter,colorContainer}: ICardFinanceProps) => {

  return (
    <Container>
      <Highlighter/>
      <InfoCard>
        <span>{title}</span>
        <small>{dateInfo}</small>
      </InfoCard>
      <h3>{amount}</h3>
    </Container>
  )
}
