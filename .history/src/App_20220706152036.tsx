import { Dashboard } from "./pages/Dashboard"
import Global from "./styles/Global"
import {Layout } from './components/Layout'
import { ThemeProvider } from 'styled-components'
import dark from './styles/Themes/dark'
export const App = () => {
  return (
    <div>
      <ThemeProvider theme={}>
      <Global/>
      <Layout/>
      </ThemeProvider>
    </div>
  )
}
