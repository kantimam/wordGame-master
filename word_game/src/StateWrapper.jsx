import React from 'react';
import { StateProvider } from './context/AppContextHook.js';
import App from './App.js';



const StateWrapper = () => {
  const initialState = {
    loggedIn: false,
    guestUser: false,
    user: {

    }
  }



  const reducer = (state, action) => {
    switch (action.type) {
      case 'logIn':
        return {
          ...state,
          user: action.payload,
          loggedIn: true,
          guestUser: false
        }
      case 'logOut':
        localStorage.removeItem('monkeyGameSession');
        return {
          ...state,
          user: {},
          loggedIn: false
        }
      case 'createGuest':
        return {
          ...state,
          user: action.payload,
          loggedIn: false,
          guestUser: true
        }
      case 'setScore':
        const newState = { ...state }
        newState.user.scores[action.target] = action.payload;
        return newState
      default:
        return state;
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  )
}

export default StateWrapper


