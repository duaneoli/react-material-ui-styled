import { Theme } from '@mui/material/styles'
import 'styled-components'

declare module '@mui/material/styles' {
  export interface Theme extends CustomTheme {}

  interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

interface CustomTheme {
  backgroundColor: string
  textColor: string
  textWhite: string
  colors: {
    primary: {
      main: string
      hover: string
    }
    secondary: {
      main: string
      hover: string
    }
    ternary: {
      main: string
      hover: string
    }
  }
}
