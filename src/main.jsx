import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NavbarScroll from './components/NavbarScroll'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarScroll />
    <App />

    
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
    <script
      src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
      crossorigin></script>
    <script
      src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossorigin></script>
    <script>var Alert = ReactBootstrap.Alert;</script>
    
  </React.StrictMode>

  
)
