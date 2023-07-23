import AppBar from '../components/AppBar'
import { Icon } from '@iconify/react'
import Toolbar from '../components/Toolbar'
import { Typography } from '@mui/material'

function AppAppBar() {
  return (
    <AppBar position='static'>
      <Toolbar
        variant='dense'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant='h6' color='inherit' component='div'>
          React Thai Address + Material UI
        </Typography>

        <Icon
          icon='skill-icons:github-dark'
          style={{ 
            cursor: 'pointer',
            width: '2rem',
            height: '2rem',
           }}
          onClick={
            () => window.open('https://github.com/Sh0ckWaveZero/react-thai-address-mui/', '_blank')
          }
        />
      </Toolbar>
    </AppBar>
  )
}

export default AppAppBar
