import { Close as IconClose } from '@material-ui/icons'
import { SnackbarKey, useSnackbar } from 'notistack'
import React from 'react'
import { Button } from './styles'

interface SnackbarCloseButtonProps {
  snackbarKey: SnackbarKey
}

export function SnackbarCloseButton({ snackbarKey }: SnackbarCloseButtonProps) {
  const { closeSnackbar } = useSnackbar()

  return (
    <Button type='button' onClick={() => closeSnackbar(snackbarKey)}>
      <IconClose sx={{ color: '#FFF' }} />
    </Button>
  )
}
