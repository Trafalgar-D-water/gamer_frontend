// src/styles/theme.js
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#5865F2', // Discord-like primary color
    },
    secondary: {
      main: '#00AFF4', // Discord-like secondary color
    },
    background: {
      default: '#36393F', // Discord-like background color
      paper: '#2F3136',   // Discord-like paper color
    },
    text: {
      primary: '#FFFFFF', // Discord-like text color
      secondary: '#B9BBBE',
    },
  },
  customSpacing: {
    pagePadding: 8*2, // 8px * 2 = 16px
  },
  typography: {
    fontFamily: 'Segoe UI, Roboto, sans-serif', // Discord-like font
  },
})

export default theme
