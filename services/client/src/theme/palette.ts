import { PaletteOptions } from '@mui/material/styles'

export const commonPalette: PaletteOptions = {
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    light: '#ffd725',
    main: '#ffc72d',
    dark: '#e0af00',
    contrastText: '#24262d',
  },
  secondary: {
    light: '#ffffff',
    main: '#f5fbff',
    dark: '#dfe5ec',
    contrastText: '#24262d',
  },
  error: {
    light: '#fb525a',
    main: '#ff313b',
    dark: '#af2530',
    contrastText: '#fff',
  },
}

export const darkPalette: PaletteOptions = {
  ...commonPalette,
  mode: 'dark',
  background: {
    paper: '#1a1c24',
    default: '#0e1014',
  },
}

export const lightPalette: PaletteOptions = {
  ...commonPalette,
  mode: 'light',
}

export default (mode: 'dark' | 'light'): PaletteOptions => {
  return mode === 'dark' ? darkPalette : lightPalette
}
