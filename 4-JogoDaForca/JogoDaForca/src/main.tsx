import React from 'react'
import ReactDOM from 'react-dom/client'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import { App2 } from './App2.tsx';
import { App3 } from './App3.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/App2",
    element: <App2 />
  },
  {
    path: "/App3",
    element: <App3 />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
