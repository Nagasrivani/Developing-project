import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './stores/context/CarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
    
  </React.StrictMode>,
</BrowserRouter>

)
