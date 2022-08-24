import styled from "styled-components"

export const Container = styled.li`
  list-style: none;
  margin-top: 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 5px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`   

export const InfoCard = styled.div`
  padding-left: 10px;
  
`   

export const Highlighter = styled.div`
  position: absolute;
  left: 0;
  background-color: red;
  width: 10px;
  height: 60%;
`   

