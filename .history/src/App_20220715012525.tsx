import Global from "./styles/Global"
import { ThemeProvider } from 'styled-components'
import dark from './styles/Themes/dark'
import light from './styles/Themes/light'

export const App = () => {
  return (
    <div>
      <ThemeProvider theme={dark}>
        <Global />
        <App
      </ThemeProvider>
    </div>
  )
}
