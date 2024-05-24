import './reset.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import InputPalavras from './InputPalavras.tsx'
import Inicio from './Inicio.tsx'
import Err404 from './Err404.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provedor } from './components/context.tsx'



const roteador = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
    errorElement: <Err404 />
  },
  {
    path: '/adicionar-palavras',
    element: <InputPalavras />
  },
  {
    path: '/jogo',
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provedor>
      <RouterProvider router={roteador} />
    </Provedor>
  </React.StrictMode>
)
