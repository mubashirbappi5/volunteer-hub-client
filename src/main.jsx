import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import Mainroutes from './routes/Mainroutes'
import AuthProvider from './Context/AuthContext/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={Mainroutes} /></AuthProvider>
  </StrictMode>,
)
