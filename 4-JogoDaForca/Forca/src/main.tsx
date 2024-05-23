import './reset.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import InputPalavras from './InputPalavras.tsx'
import Inicio from './Inicio.tsx'
import Err404 from './Err404.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



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
    element: <App palavra='exemplo' />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={roteador} />
  </React.StrictMode>
)
