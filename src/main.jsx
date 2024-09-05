import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import theme from './style/Theme.jsx'
import { ThemeProvider } from '@mui/material/styles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    
  </StrictMode>,
)
