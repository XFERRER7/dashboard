import { ReactNode } from 'react';
import { Container } from './Styles'

interface BaseLayoutProps {
  children?: ReactNode;
}

export const Content = ({ children }: BaseLayoutProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
