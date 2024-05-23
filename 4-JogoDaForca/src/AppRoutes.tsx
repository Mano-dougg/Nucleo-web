import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Jogo from './pages/Jogo';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jogo" element={<Jogo />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
