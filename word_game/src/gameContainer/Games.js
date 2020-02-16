import React from 'react'
import {Switch, Route} from 'react-router-dom';
import './games.css'
/* import WordGame from '../components/WordGame.js'
import ReactionClick from '../clickFast/ReactionClick'
import NumGame from '../numberMem/NumGame.js' */

const WordGame=React.lazy(()=> import('../components/WordGame.js'));
const ReactionClick=React.lazy(()=> import('../clickFast/ReactionClick'));
const NumGame=React.lazy(()=> import('../numberMem/NumGame.js'));




const Games = () => {
    return (
        <div className={'gamesContainer'}>
            <main>
                <Switch>
                    <Route path='/games/wordgame' component={WordGame}/>
                    <Route path='/games/numbergame' component={NumGame}/>
                    <Route path='/games/reactiongame' component={ReactionClick}/>
                </Switch>
            </main>
        </div>
    )
}

export default Games

