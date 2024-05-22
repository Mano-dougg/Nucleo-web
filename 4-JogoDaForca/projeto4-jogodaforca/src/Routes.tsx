import Texto from './texto';
import Forca from './forca';
import Home from './home';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/texto' element={<Texto/>}></Route>
                <Route path='/forca' element={<Forca/>}></Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes