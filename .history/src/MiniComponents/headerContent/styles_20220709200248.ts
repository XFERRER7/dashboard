import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TitleContainer = styled.div`

  &::before {
    content: '';
    width: 30px;
    border-bottom: 10px solid ${props => props.theme.colors.};
  }
`
export const Controller = styled.div`

`