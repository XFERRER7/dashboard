import Global from "./styles/Global"
import { Layout } from './components/Layout'
import { ThemeProvider } from 'styled-components'
import dark from './styles/Themes/dark'
import light from './styles/Themes/light'

export const App = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={dark}>
        <Global />
        <Layout>

        </Layout>
      </ThemeProvider>
    </div>
  )
}
