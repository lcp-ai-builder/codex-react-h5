import React from 'react'
import ReactDOM from 'react-dom/client'
import { ColorModeScript } from '@chakra-ui/react'
import { App } from '@/App'
import { theme } from '@/theme'
import { setupRem } from '@/styles/rem'
import '@/styles/global.css'

setupRem()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>
)

