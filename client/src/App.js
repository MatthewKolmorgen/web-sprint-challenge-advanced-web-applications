import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import Login from './components/Login';
import './styles.scss';

function App() {
  return (
    <Router>
      <div className='App'>
      <h1>Bubbles</h1>
         <Link to = '/login'> Login </Link>
         <Link to = '/bubbles'> See Bubbles </Link>
      <Switch>
      <Route exact path = '/login' component = {Login} />
      <PrivateRoute exact path = '/bubbles' component = {BubblePage} />
     </Switch>
      </div>
    </Router>
  );
}

export default App;