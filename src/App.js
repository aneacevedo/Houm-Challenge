import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokemon from './Page/Pokemon.js';
import Header from './Components/Header/Header';


export const App = () => {
  return(
  <div className='App'>
    <Router>
  <Switch>
    <Route exact path="/">
      <Header/>
      <Pokemon/>
    </Route>
  </Switch>
  </Router>
  </div>
  );
};

export default App;
