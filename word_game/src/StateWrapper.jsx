import React from 'react';
import { StateProvider } from './context/AppContextHook.js';
import App from './App.js';



const StateWrapper = () => {
  let beforeUnload;
  const initialState={
    loggedIn: false,
    user: {
      
    }
  }

  const refreshUnload=(data)=>{
    if(beforeUnload){
      window.removeEventListener(beforeUnload);
    }
    if(data){
      beforeUnload=window.addEventListener('beforeunload',function setLocalStorage(event){
        event.preventDefault();
        localStorage.setItem('monkeyGameSession',JSON.stringify(data));
      })
    }else{
      localStorage.removeItem('monkeyGameSession');
    }
  }

  
  const reducer=(state, action)=>{
    switch(action.type){
      case 'logIn':
        refreshUnload(action.payload);
        return {
          ...state,
          user: action.payload,
          loggedIn: true
        }
      case 'logOut':
        refreshUnload(false);
        return {
          ...state,
          user: {},
          loggedIn: false
        }
      case 'setScore':
        const newState={...state}
        newState.user.scores[action.target]=action.payload;
        return newState
      default: 
        return state;
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
    </StateProvider>
  )
}

export default StateWrapper


