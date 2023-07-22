import { Fragment } from 'react'
import { Box, Container, Typography } from '@mui/material'
import AppAppBar from './views/AppAppBar'

function App() {
  return (
    <Fragment>
      <AppAppBar />
      <Container maxWidth='sm'>
        <Box sx={{ my: 4 }}>
          <Typography variant='h4' component='h1' gutterBottom>
            Material UI Vite.js example
          </Typography>
        </Box>
      </Container>
    </Fragment>
  )
}

export default App
