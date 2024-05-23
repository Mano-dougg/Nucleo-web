import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './pages/StartScreen';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        {/* <Route path="user" element={<User />} /> */}
        {/* <Route path="game" element={<Game />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default App
