// Import modules
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import components
import Header from './components/Header'
import Footer from './components/Footer'
import Display from './components/Display'

// Create root element
const root = ReactDOM.createRoot(document.getElementById('root'))

// Render components
root.render(
  <React.StrictMode>

  <Header/>
  <Display/>
  <Footer/>

  </React.StrictMode>
)
