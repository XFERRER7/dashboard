import styled from "styled-components"

export const Container = styled.div`
  grid-area: MH;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`   

export const Profile = styled.div`
  display: ;
`

export const UserName = styled.div`

`

export const ImgUser = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: red;
`