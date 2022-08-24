import styled from "styled-components"

export const Container = styled.div`
  
`   

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

export const UserName = styled.div`

`

export const ImgUser = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.gray};
`