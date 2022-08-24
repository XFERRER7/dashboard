import Global from "./styles/Global"
import { Layout } from './components/Layout'
import { ThemeProvider } from 'styled-components'
import dark from './styles/Themes/dark'
import light from './styles/Themes/light'
import { Dashboard } from "./pages/Dashboard"
import { List } from "./pages/List"

export const App = () => {
  return (
    <div>
      <ThemeProvider theme={light}>
        <Global />
        <Layout>
          <List/>
        </Layout>
      </ThemeProvider>
    </div>
  )
}
