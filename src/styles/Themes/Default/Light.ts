import { createTheme } from '@mui/material'
import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = createTheme({
  backgroundColor: '#f5f5f5',
  textColor: '#202020',
  textWhite: '#ffffff',
  colors: {
    primary: { main: '#0E2F73', hover: '#0E2F73' },
    secondary: { main: '#BF8F36', hover: '#BF8F36' },
    ternary: { main: '#f5f5f5', hover: '#f5f5f5' },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#0E2F73',
    },
    secondary: {
      main: '#BF8F36',
    },
    error: {
      light: '#ef5350',
      main: '#d32f2f',
      dark: '#c62828',
    },
    warning: {
      light: '#ff9800',
      main: '#ed6c02',
      dark: '#e65100',
    },
    info: {
      light: '#03a9f4',
      main: '#0288d1',
      dark: '#01579b',
    },
    success: {
      light: '#4caf50',
      main: '#2e7d32',
      dark: '#1b5e20',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.80)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    grey: {
      50: '#ffffff',
      200: 'rgba(255, 255, 255, 0.87)',
      900: 'rgba(255, 255, 255, 0.05)',
    },
    background: {
      default: '#F4F5F7',
      paper: '#ffffff',
    },
    common: {
      black: 'rgba(0, 0, 0, 0.56)',
      white: 'rgba(255, 255, 255, 0.87)',
    },
  },

  typography: {
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    allVariants: {
      fontSize: '1rem',
    },
    h3: {
      padding: '10px',
    },
    fontSize: 16,
  },

  components: {
    MuiLink: {
      defaultProps: {
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      },
    },
  },
})

export default theme
