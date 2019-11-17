import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './login'
import Dashboard from './dashboard'
import Account from './accountSetup'
import AddRoom from './addRoom'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route exact path="/" component={Login} />
        <Route path="/account" component={Account} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/addRoom" component={AddRoom} />
      </main>
    </BrowserRouter>
  )
}

export default App
