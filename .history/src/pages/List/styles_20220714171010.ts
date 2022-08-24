import styled from "styled-components";

export const Container = styled.div`
  
`

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  .tag-filter {
    background-color: transparent;
    color: ${props => props.theme.colors.white};
    font-size: 20px;
  }
`