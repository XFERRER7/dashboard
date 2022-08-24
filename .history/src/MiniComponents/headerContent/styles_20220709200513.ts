import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TitleContainer = styled.div`


  > h1 {

    color: ${props => props.theme.colors.};
    &::after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 10px solid ${props => props.theme.colors.warning};
  }
  }
  
`
export const Controller = styled.div`

`