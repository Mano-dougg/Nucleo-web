import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'

import Adicao from './pages/Adicao/Adicao.tsx';
import Jogo from './pages/Jogo/Jogo.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Adicao",
    element: <Adicao />
  },
  {  path: "/Jogo",
    element: <Jogo />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
