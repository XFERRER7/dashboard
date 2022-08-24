import styled from "styled-components"

export const Container = styled.li`
  list-style: none;
  margin-top: 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
`   

export const InfoCard = styled.div`
  
`   

export const Highlighter = styled.div`
  position: absolute;
  left: 0;
  background-color: red;
  width: 15px;
  height: 60%;
`   

