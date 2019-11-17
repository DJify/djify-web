import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './login'
import Dashboard from './dashboard'
import Account from './accountSetup'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/account" component={Account} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
