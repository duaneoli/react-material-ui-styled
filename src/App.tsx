import { SnackbarProvider } from 'contexts/Snackbar'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeStore } from './contexts/ThemeStore'
import Routers from './pages'
import Theme from './Theme'

function App() {
  return (
    <ThemeStore>
      <Theme>
        <SnackbarProvider>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
        </SnackbarProvider>
      </Theme>
    </ThemeStore>
  )
}

export default App
