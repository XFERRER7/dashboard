import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TitleContainer = styled.div`


  h1 {
    
  }
  &::before {
    content: '';
    width: 30px;
    height: 10px;
    border-bottom: 10px solid ${props => props.theme.colors.warning};
  }
`
export const Controller = styled.div`

`