import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Product from './pages/Productpage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Product/>
  </StrictMode>,
)
