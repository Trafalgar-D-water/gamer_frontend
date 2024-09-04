import React, { createContext, useState, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../styles/theme'

export const ThemeContext = createContext()

const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light')

  const themeConfig = useMemo(() => ({
    ...theme,
    palette: {
      ...theme.palette,
      mode,
    },
  }), [mode])

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomThemeProvider
