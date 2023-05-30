import { SnackbarCloseButton } from 'components/Button/SnackbarCloseButton'
import { SnackbarProvider as Snackbar, SnackbarKey } from 'notistack'
import React from 'react'

interface SnackbarProviderProps {
  children: React.ReactNode
}

function SnackbarAction(snackbarKey: SnackbarKey) {
  return <SnackbarCloseButton snackbarKey={snackbarKey} />
}

export function SnackbarProvider({ children }: SnackbarProviderProps) {
  return (
    <Snackbar
      action={SnackbarAction}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={5000}
      maxSnack={4}
    >
      {children}
    </Snackbar>
  )
}
