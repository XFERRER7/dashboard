import styled from "styled-components"

export const Container = styled.div`
  grid-area: AS;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  border-right: 1px solid ${props => props.theme.colors.gray};
`

export const Header = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const Title = styled.h3`

`
export const ImgLogo = styled.img`  
  height: 40px;
  width: 40px;
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  just
  margin-top: 20px;
`
export const ItemMenu = styled.a`
  color: ${props => props.theme.colors.info};
`