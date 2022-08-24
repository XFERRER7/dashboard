import styled from "styled-components"

interface IContainerProps {
  color: string;
}

interface IHighlighterProps {
  color: string;
}

export const Container = styled.li<IContainerProps>`
  list-style: none;
  margin-top: 20px;
  background-color: ${props => props.theme.colors.secondary};
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

export const Highlighter = styled.div<IContainerProps>`
  position: absolute;
  left: 0;
  background-color: red;
  width: 10px;
  height: 60%;
`   

