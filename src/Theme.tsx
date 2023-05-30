import { ThemeProvider } from '@mui/material'
import { StyledEngineProvider } from '@mui/styled-engine-sc'
import React from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import GlobalStyle from 'styles/global'
import { useThemeStore } from './contexts/ThemeStore'
import Themes from './styles/Themes'

interface ITheme {
  children: React.ReactNode
}

function Theme({ children }: ITheme) {
  const { theme } = useThemeStore()

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Themes[theme.type][theme.mode]}>
        <ThemeProviderStyled theme={Themes[theme.type][theme.mode]}>
          <GlobalStyle />
          {children}{' '}
        </ThemeProviderStyled>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Theme
