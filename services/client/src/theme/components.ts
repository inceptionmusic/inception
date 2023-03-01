import { Components, Theme } from '@mui/material/styles'

export const components: Components<Theme> = {
  // Stack
  MuiStack: {
    defaultProps: {
      alignItems: 'start',
      justifyContent: 'start',
      spacing: 2,
    },
  },
  // Card
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        overflow: 'hidden',
        boxShadow: theme.shadows[4],
        border: `1px solid ${theme.palette.divider}`,
        padding: 0,
      }),
    },
  },
}

export default components
