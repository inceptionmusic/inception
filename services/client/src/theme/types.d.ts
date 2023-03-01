export interface Shape {
  borderRadius: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
  margin: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    shape: Shape
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    shape?: Partial<Shape>
  }
}
