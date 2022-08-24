import Global from "./styles/Global"
import { Layout } from './components/Layout'
import { ThemeProvider } from 'styled-components'
import dark from './styles/Themes/dark'
import light from './styles/Themes/'

export const App = () => {
  return (
    <div>
      <ThemeProvider theme={light}>
        <Global />
        <Layout />
      </ThemeProvider>
    </div>
  )
}
