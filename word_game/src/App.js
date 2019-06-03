import React, { Component } from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import './App.css';
import WordGame from './components/WordGame.js'
import Games from './gameContainer/Games.js'
import Home from './startpage/Home.js'
import Stats from './loggedIn/Stats.js'
import User from './loggedIn/User.js'
import Navigation from './startpage/Navigation.js'
/* import ReactionGame from './reactionGame/ReactionGame.js' */
/* import NumGame from './numberMem/NumGame.js' */
import RouteUndef from './components/RouteUndef.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/main' component={Home}/>
            <Route path='/stats' component={Stats}/>
            <Route path='/user:id' component={User}/>
            <Route path='/games' component={Games}/>
            {/* <Route path='/reactiongame' component={ReactionGame}/>
            <Route path='/numGame' component={NumGame}/> */}
            <Route component={RouteUndef}/>
          </Switch>
      </div>
    );
  }
}

export default App;
