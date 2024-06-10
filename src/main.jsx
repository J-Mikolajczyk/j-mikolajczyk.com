import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
)
