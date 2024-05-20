import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AddWord from './pages/AddWord'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddWord />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
