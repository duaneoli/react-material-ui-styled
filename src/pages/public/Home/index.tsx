import { Typography } from '@material-ui/core'
import { Box, Paper } from '@mui/material'
import { useUser } from 'contexts/User'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const { user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/validate')
    }
  }, [])

  return (
    <Box display='flex' alignItems='center' justifyContent='center' width='100%' height='100%'>
      <Paper>
        <Typography fontSize='1.5rem' mb='2rem'>
          Olá!
        </Typography>
      </Paper>
    </Box>
  )
}
