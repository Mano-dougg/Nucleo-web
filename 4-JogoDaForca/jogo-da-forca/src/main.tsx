import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from './modules/routes/home/home'
import Playtime from './modules/routes/playtime/playtime';
import './reset.css'
import './index.css';
import './theme.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/play",
    element: <Playtime />
  },
  {
    path: "/score"
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
