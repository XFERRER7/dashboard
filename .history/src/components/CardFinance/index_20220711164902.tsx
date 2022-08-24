
import { Toggle } from '../../MiniComponents/Toggle'
import {
  Container,
  Card,
  Highlighter
}
  from './Styles'


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