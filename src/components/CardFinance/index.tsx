import {
  Container,
  InfoCard,
  Highlighter
}
  from './Styles'


interface ICardFinanceProps {
  title: string;
  dateInfo: string;
  amount: string;
  colorHighLighter: string;
}


export const CardFinance = ({title,dateInfo, amount,colorHighLighter}: ICardFinanceProps) => {

  return (
    <Container>
      <Highlighter color={colorHighLighter}/>
      <InfoCard>
        <span>{title}</span>
        <small>{dateInfo}</small>
      </InfoCard>
      <h3>{amount}</h3>
    </Container>
  )
}
