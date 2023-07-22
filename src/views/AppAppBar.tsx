import AppBar from '../components/AppBar'
import Toolbar from '../components/Toolbar'
import { Typography } from '@mui/material'

function AppAppBar() {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <Typography variant='h6' color='inherit' component='div'>
          React Thai Address + Material UI
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppAppBar
