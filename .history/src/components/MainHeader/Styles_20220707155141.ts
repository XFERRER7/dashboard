import styled from "styled-components"
import logo from '../../assets/Logo.svg'

export const Container = styled.div`
  grid-area: MH;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
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
  background-image: url(logo);
`