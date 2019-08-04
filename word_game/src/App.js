import React, { Component } from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import { StateProvider } from './context/AppContextHook.js';
import './App.css';
import WordGame from './components/WordGame.js'
import Games from './gameContainer/Games.js'
import Home from './startpage/Home.js'
import Stats from './loggedIn/Stats.js'
import User from './loggedIn/User.js'
import Navigation from './startpage/Navigation.js'
import ConfirmComp from './components/ConfirmComp.js'
/* import ReactionGame from './reactionGame/ReactionGame.js' */
/* import NumGame from './numberMem/NumGame.js' */
import FloatingContainer from './startpage/floatingContainer.jsx';
import LogSign from './mainScreen/LogSignForm.js';
import RouteUndef from './components/RouteUndef.js'




const App = () => {
  const initialState={
    loggedIn: false,
    user: {
      name: "schwartza",
      score: {
        word: 12,
        number: 17,
        reaction: 19 
      }
    },
    score: {}
  }
  const reducer=(state, action)=>{
    switch(action.type){
      case 'logIn':
        return {
          ...state,
          user: action.payload,
          loggedIn: true
        }
      case 'logOut':
        return {
          ...state,
          loggedIn: false
        }
      default: 
        return state;
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
      <Navigation></Navigation>
        {false&&
          <ConfirmComp 
            message={"this.state.message"}
            close={"()=>this.setState({confirmOpen: false})"}
          />
        }
        <Route path='/login' render={()=>
          <FloatingContainer>
            <LogSign/>
          </FloatingContainer>
        }/>

        <Switch>
          {/* <Route exact path='/' component={Home}/> */}
          <Route path='/stats' component={Stats}/>
          <Route path='/user:id' component={User}/>
          <Route path='/games' component={Games}/>
          <Route path='/' component={Home}/>
          {/* <Route path='/reactiongame' component={ReactionGame}/>
          <Route path='/numGame' component={NumGame}/> */}
          <Route component={RouteUndef}/>
        </Switch>
      </div>
    </StateProvider>
  )
}

export default App


