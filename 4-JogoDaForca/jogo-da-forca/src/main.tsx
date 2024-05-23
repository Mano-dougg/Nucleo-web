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
import PlaySettings from './modules/routes/play-settings/play-setting';
import App from './App';
import ScorePage from './modules/routes/score/score';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
          path: "play",
          element: <PlaySettings />
        },
        {
          path: "play-game",
          element: <Playtime />
        },
        {
          path: "score",
          element: <ScorePage />
        }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
