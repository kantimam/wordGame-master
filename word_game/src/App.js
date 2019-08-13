import React, { useEffect } from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
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
import { useStateValue } from './context/AppContextHook';




const App = () => {
  const [{user, loggedIn},dispatch]=useStateValue();
  let unloadListener;

  useEffect(()=>{
    // check if we have userdata in local storage if so recover state from it
    const storedUser=localStorage.getItem('monkeyGameSession');
    if(storedUser){
      dispatch({type: 'logIn', payload: JSON.parse(storedUser)})
    }
  },[])

  const stateLocalStore=(event)=>{
    event.preventDefault();
    if(loggedIn && user &&  user.email){
      console.log(user, loggedIn)
      localStorage.setItem('monkeyGameSession',JSON.stringify(user));
    }
  }

  useEffect(()=>{
    // update beforeunload event with new data from user state
    unloadListener=window.addEventListener('beforeunload',stateLocalStore);
    return()=>{
      window.removeEventListener('beforeunload',stateLocalStore)
    } 
  },[user])



  return (
    <div className="App" /* onClick={()=>console.log(user)} */>
      <Route component={Navigation}/>
        {false&&
          <ConfirmComp 
            message={"this.state.message"}
            close={"()=>this.setState({confirmOpen: false})"}
          />
        }
        <Route path='*/login' render={({history})=>
          <FloatingContainer close={history.goBack}>
            {console.log(history)}
            <LogSign history={history}/>
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
  )
}

export default App


