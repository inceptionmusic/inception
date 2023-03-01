import { createTheme } from '@mui/material'

import palette from './palette'
import typography from './typography'
import components from './components'

export default (mode: 'dark' | 'light' = 'dark') =>
  createTheme({
    palette: palette(mode),
    typography,
    components,
    shape: {
      borderRadius: {
        xs: 0,
        sm: 0.1,
        md: 0.25,
        lg: 0.4,
        xl: 0.5,
      },
      margin: {
        xs: 1,
        sm: 2,
        md: 4,
        lg: 6,
        xl: 8,
      },
    },
  })
