import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokemon from './Page/Pokemon.js';

export const App = () => {
  return(
  <div className='App'>
    <Router>
  <Switch>
    <Route exact path="/">
      <Pokemon/>
    </Route>
  </Switch>
  </Router>
  </div>
  );
};

export default App;
