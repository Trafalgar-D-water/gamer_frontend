import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import theme from './style/Theme.jsx'
import { ThemeProvider } from '@mui/material/styles'
import {Provider} from 'react-redux'
import store from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
