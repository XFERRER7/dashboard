import { Dashboard } from "./pages/Dashboard"
import Global from "./styles/Global"
import {Layout } from './components/Layout'
import { theme } from 'styled-components'

export const App = () => {
  return (
    <div>
      <>
      <Global/>
      <Layout/>
      </>
    </div>
  )
}
