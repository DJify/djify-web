import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login';
import Account from './accountSetup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/account" component={Account} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
