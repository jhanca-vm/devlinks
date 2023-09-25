import '@fontsource-variable/instrument-sans'
import './style.css'
import 'virtual:uno.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
