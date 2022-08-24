import { ReactNode } from 'react';
import { Container } from './Styles'

interface BaseLayoutProps {
  children?: ReactNode;
}

export const Content = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
