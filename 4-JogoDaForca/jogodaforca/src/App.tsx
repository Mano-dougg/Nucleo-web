import "./App.css";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import GamePage from "./pages/GamePage"; // Ensure the path is correct
import Home from "./pages/Home";

function App() {
  const AppRoutes = () => {
    const routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "game", element: <GamePage /> },
    ]);
    return routes;
  };
  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
