import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Jogo from './pages/Jogo';
import MultiPlayer from './pages/MultiPlayer';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SinglePlayer" element={<Jogo />} />
                <Route path="/MultiPlayer" element={<MultiPlayer />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
