import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './pages/StartScreen';
import Game from "./pages/Game";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="game" element={<Game />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </UserContextProvider>
    </Router>
  )
}

export default App;
