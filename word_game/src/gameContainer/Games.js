import React from 'react'
import WordGame from '../components/WordGame.js'
import ReactionGame from '../reactionGame/ReactionGame.js'
import ReactionClick from '../clickFast/ReactionClick'
import NumGame from '../numberMem/NumGame.js'
import {Switch, Route} from 'react-router-dom';
import './games.css'


const Games = () => {
    return (
        <div className={'gamesContainer'}>
                <main>
                <Switch>
                    <Route path='/games/wordgame' component={WordGame}/>
                    <Route path='/games/numgame' component={NumGame}/>
                    <Route path='/games/reactiongame' component={ReactionGame}/>
                    <Route path='/games/reactionclick' component={ReactionClick}/>
                </Switch>
                </main>
                <div id={'desc'} className={'inner'}>
                    <h1>HEY</h1>
                    <p>ABOUT THE GAME</p>
                </div>
            </div>
    )
}

export default Games

