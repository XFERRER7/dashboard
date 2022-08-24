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
    font-size: 18px;
    font-weight: 500;
  }
  
  .tag-filter-courrent::after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 1px solid ${props => props.theme.colors.};
    background-color: ${props => props.theme.colors.info};
  }

  .tag-filter-eventual::after {
    content: '';

  }
`