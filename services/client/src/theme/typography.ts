import { TypographyOptions } from '@mui/material/styles/createTypography'
import '@fontsource/source-sans-pro'
import '@fontsource/public-sans'

export const typography: TypographyOptions = {
  fontFamily: [
    'Source Sans Pro',
    'Public Sans',
    'Roboto',
    'Lato',
    'Segoe UI',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ].join(','),
  h1: {
    fontWeight: 300,
    fontSize: '4.25rem',
    lineHeight: 1.25,
    letterSpacing: '-0.008em',
  },
  h2: {
    fontWeight: 400,
    fontSize: '3rem',
    lineHeight: 1.167,
    letterSpacing: '0em',
  },
  h3: {
    fontWeight: 400,
    fontSize: '2.175rem',
    lineHeight: 1.235,
    letterSpacing: '0.007em',
  },
  h4: {
    fontWeight: 400,
    fontSize: '1.75rem',
    lineHeight: 1.235,
    letterSpacing: '0.007em',
  },
  h5: {
    fontWeight: 450,
    fontSize: '1.25rem',
    lineHeight: 1.25,
    letterSpacing: '0.0075em',
  },
  h6: {
    fontWeight: 450,
    fontSize: '1.075rem',
    lineHeight: 1.4,
    letterSpacing: '0.0075em',
  },
}

export default typography
