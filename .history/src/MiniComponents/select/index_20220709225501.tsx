import React from 'react'
import { Container } from './styles'

interface IselectPro

export const Select = () => {
  return (
    
    <Container>
      <select>
        <option value="Janeiro">Janeiro</option>
        <option value="Fevereiro">Fevereiro</option>
        <option value="Março">Março</option>
        <option value="Abril">Abril</option>
        <option value="Maio">Maio</option>
      </select>
    </Container>
  )
}
