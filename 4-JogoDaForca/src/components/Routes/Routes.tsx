import { Route, BrowserRouter } from 'react-router-dom';
import { Pag2 } from '../Pag2/Pag2';

export const Routes = () => {
    return(
        <BrowserRouter> 
            <Route Component={ Pag2 } path='/Pag1'/>
            <Route Component={ Pag3 } path='/Pag2'/>
            <Route Component={ Pag4 } path='/Pag3'/>
        </BrowserRouter>
    )
}