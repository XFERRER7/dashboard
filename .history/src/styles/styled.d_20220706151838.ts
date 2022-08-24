import 'styled-components'

declare module 'styled-components' { 
  export interface DefaultTheme {
    title: string'dark',
  
    colors: {
      primary: string'#1B1F38',
      secondary: string'#252A48',
      tertiary: string'##313862',
  
      white: string'#fff',
      black: string'#000',
      gray: string'#dfdfdf',
  
      sucess: string'#4E41F0',
      info: string'#F7931B',
      warnig: string'#E44C4E'
  
  
    }
  }
}