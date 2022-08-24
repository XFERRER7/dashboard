import styled from "styled-components"

interface IHighlighterProps {
  color: string;
}

export const Container = styled.li`
  list-style: none;
  margin-top: 20px;
  background-color: #313862;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: all .3s;

  &:hover {
    opacity: .7;
    transform: translateX(10px);
  }
`   

export const InfoCard = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`   

export const Highlighter = styled.div<IHighlighterProps>`
  position: absolute;
  left: 0;
  background-color: ${props => props.color};
  width: 10px;
  height: 60%;
`   

