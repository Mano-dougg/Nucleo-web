import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Acesso from './pagina_login/login';
import Home from './page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pagina_login/login" component={Acesso} />
        <Route path="/page" component={Home} />
        <Redirect exact from="/page" to="/pagina_login/login" />
      </Switch>
    </Router>
  );
}

export default App;
