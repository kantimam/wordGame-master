import React, { useEffect } from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import './App.css';
import WordGame from './components/WordGame.js'
import Games from './gameContainer/Games.js'
import Home from './startpage/Home.js'
import User from './loggedIn/User.js'
import Navigation from './startpage/Navigation.js'
import ConfirmComp from './components/ConfirmComp.js'
import FloatingContainer from './startpage/floatingContainer.jsx';
import LogSign from './logSignForm/LogSignForm';
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

  const closeLogIn=(history)=>{
    /* if path contains login or signup return the path without it */
    let removeLogIn=history.location.pathname.split("/").filter(item=>(item!=="login" && item!=="signup")).join("/");
    history.push(removeLogIn || "/")
  }

  return (
    <div className="App" /* onClick={()=>console.log(user)} */>
      <Route component={Navigation}/>
        {false&&
          <ConfirmComp 
            message={"this.state.message"}
            close={"()=>this.setState({confirmOpen: false})"}
          />
        }
        <Route path='*/(login|signup)/' render={({history})=>
          <FloatingContainer close={()=>closeLogIn(history)}>
            <LogSign 
              currentPath={history.location.pathname}
              close={()=>closeLogIn(history)}
            />
          </FloatingContainer>
        }/>

        <Switch>
          <Route path='/user:id' component={User}/>
          <Route path='/games' component={Games}/>
          <Route path='/' component={Home}/>
          <Route component={RouteUndef}/>
        </Switch>
    </div>
  )
}

export default App


