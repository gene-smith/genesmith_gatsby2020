import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './contexts/ThemeContext'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename='/genesmith_gatsby2020'>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
