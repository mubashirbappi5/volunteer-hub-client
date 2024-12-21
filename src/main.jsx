import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import Mainroutes from './routes/Mainroutes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Mainroutes} />
  </StrictMode>,
)
