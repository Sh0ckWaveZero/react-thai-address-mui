import { CssBaseline, ThemeProvider } from '@mui/material'

import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from '../theme/index.tsx'
import MapData from './mapData.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      {/* <MapData /> */}
    </ThemeProvider>
  </React.StrictMode>
)
 