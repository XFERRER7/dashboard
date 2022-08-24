import Global from "./styles/Global"
import { Layout } from './components/Layout'
import { ThemeProvider } from 'styled-components'
import dark from './styles/Themes/dark'
import light from './styles/Themes/light'
import 

export const App = () => {
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
