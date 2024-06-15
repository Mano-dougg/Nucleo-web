import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/outra-pagina">
          <Pag1 />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;