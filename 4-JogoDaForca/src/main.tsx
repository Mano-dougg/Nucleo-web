import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Pag1 } from './components/Pag1/Pag1.tsx'
import { Pag2 } from './components/Pag2/Pag2.tsx'
import { Pag3 } from './components/Pag3/Pag3.tsx'

export const Routes = createBrowserRouter ([
  {
      path: '/',
      element: <App/>,
      children: [
        {
        path: '/pag1',
        element: <Pag1/>,
        },
        {
          path: '/pag2',
          element: <Pag2/>,
        },
        {
          path: '/pag3',
          element: <Pag3/>
        }
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>,
)
