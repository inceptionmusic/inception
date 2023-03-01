import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import createTheme from './theme'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container || document.body)

root.render(
  <Router>
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Router>
)
