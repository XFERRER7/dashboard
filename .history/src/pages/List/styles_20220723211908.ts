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
    transition: all .3s;

    &:hover {
      opacity: .7;
    }
  }
  
  .tag-filter-courrent::after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 10px solid ${props => props.theme.colors.sucess};
    margin: auto;
  }

  .tag-filter-eventual::after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 10px solid ${props => props.theme.colors.warning};
    margin: auto;

  }

  .isActivate {
    
  }
`