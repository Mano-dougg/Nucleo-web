import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { HomeScreen } from "./components/screens/home"
 import { RegisterScreen } from "./components/screens/register"; 
 import { GameScreen } from "./components/screens/game";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeScreen/>
  },
  {
    path:"/Registro",
    element:<RegisterScreen />
  },
  {
    path:"/Game",
    element:<GameScreen />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
