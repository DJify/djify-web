import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './login'
import Dashboard from './dashboard'
import Account from './accountSetup'
import AddRoom from './addRoom'
import Genre from './genre'
import Room from './room'
import { StateProvider } from './UserStore'

function App() {
  const [moreGenreListings, setMoreGenreListings] = React.useState({
    genre: '',
    backingImgURL: '',
    rooms: [],
  });

  const onShowMoreListings = listings => {
    setMoreGenreListings(listings)
  };

  const initialUserState = {
    id: '',
    username: '',
    wantsToDj: false,
    chosenAvatarId: '',
  }

  const reducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
      case 'updateUser':
        return {
          ...state,
          wantsToDj: action.wantsToDj,
          username: action.username,
          chosenAvatarId: action.chosenAvatarId,
        }

      case 'logIn':
        return {
          ...state,
          id: action.userId,
        }

      default:
        return state
    }
  }

  return (
    <BrowserRouter>
      <StateProvider initialState={initialUserState} reducer={reducer}>
        <main>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/account" component={Account} />
            <Route path="/room" component={Room} />
            <Route exact path="/dashboard/addRoom">
              <Dashboard />
              <AddRoom />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard onShowMoreListings={onShowMoreListings} />
            </Route>
            <Route path="/dashboard/:genre">
              <Genre {...moreGenreListings} />
            </Route>
          </Switch>
        </main>
      </StateProvider>
    </BrowserRouter>
  )
}

export default App
