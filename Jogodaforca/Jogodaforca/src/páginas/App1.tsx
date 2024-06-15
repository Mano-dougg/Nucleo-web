import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pag1 from './Pag1';
import Pag2 from './pag2';
import Pag3 from './pag3';


function App(){
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Pag1 />} />
            <Route path='/pag2' element={<Pag2 />} />
            <Route path='/pag3' element={<Pag3 />} />
        </Routes>
      </BrowserRouter>
    );
  };

export default App;
