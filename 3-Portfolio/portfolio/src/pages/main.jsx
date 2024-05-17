import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu'
import Section1 from './Section1'
import '../assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <Section1 />
  </React.StrictMode>,
)
