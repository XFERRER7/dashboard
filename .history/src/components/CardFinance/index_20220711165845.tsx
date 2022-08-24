
import { Toggle } from '../../MiniComponents/Toggle'
import {
  Container,
  InfoCard,
  Highlighter
}
  from './Styles'


interface CardFinanceProps {
  title: string;
  dateInfo: string;
  amount: number;
  color
}


export const CardFinance = () => {

  return (
    <Container>
      <Highlighter/>
      <InfoCard>
        <span>Compras do mês</span>
        <small>18/04/2024</small>
      </InfoCard>
      <h3>R$ 130,00</h3>
    </Container>
  )
}
