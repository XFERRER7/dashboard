import styled from "styled-components";

interface ItitleContainerProps {
  lineColor: string;
}


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TitleContainer = styled.div<ItitleContainerProps>`


  > h1 {

    color: ${props => props.theme.colors.white};
    &::after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 10px solid ${props => props.};
  }
  }
  
`
export const Controller = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`