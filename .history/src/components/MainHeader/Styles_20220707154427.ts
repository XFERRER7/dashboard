import styled from "styled-components"

export const Container = styled.div`
  grid-area: MH;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  padding: 8px;
`   

export const Profile = styled.div`
  background-color: red;
`

export const UserName = styled.div`
  
`