import { createTheme } from '@mui/material'
import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = createTheme({
  backgroundColor: '#2c2c2c',
  textColor: '#ffffff',
  textWhite: '#ffffff',
  palette: {
    mode: 'dark',
  },
  colors: {
    primary: { main: '#3c3487', hover: '#3c3487' },
    secondary: { main: '#00b1ac', hover: '#00b1ac' },
    ternary: { main: '#f5f5f5', hover: '#f5f5f5' },
  },
  typography: {
    allVariants: {
      fontSize: '1rem',
    },
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
  },
})

export default theme
