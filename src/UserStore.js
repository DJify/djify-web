import React, { createContext, useContext, useReducer } from 'react'

const initialState = {
  id: '',
  token: '',
  username: '',
  wantsToDj: false,
  chosenAvatarId: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateUser':
      return {
        ...state,
        ...action,
      }

    case 'logIn':
      return {
        ...state,
        id: action.userId,
        token: action.token,
      }

    default:
      return state
  }
}

export const StateContext = createContext()

export const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      <LocalStorageUpdater>{children}</LocalStorageUpdater>
    </StateContext.Provider>
  )
}

const LocalStorageUpdater = ({ children }) => {
  const [user, dispatch] = useUserState()

  React.useEffect(() => {
    if (user === initialState) {
      dispatch({
        type: 'updateUser',
        ...JSON.parse(localStorage.getItem('user')),
      })
    } else {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user, dispatch])

  return <>{children}</>
}

export const useUserState = () => useContext(StateContext)
