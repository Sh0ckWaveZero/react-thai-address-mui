import { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'

function App() {

  return (
    <Container maxWidth='sm'>
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Material UI Vite.js example
        </Typography>
      </Box>
    </Container>
  )
}

export default App
