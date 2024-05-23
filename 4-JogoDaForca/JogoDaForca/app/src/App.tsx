// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import First from './First';
import Second from './Second';
import Third from './Third';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/segunda" element={<Second />} />
          <Route path="/terceira" element={<Third/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
