import React from 'react';
import { useStateValue } from '../context/AppContextHook';
import {Link} from 'react-router-dom';


const SaveScore=({gameName, gameScore, currentPath})=>{
    const [{user, loggedIn},dispatch]=useStateValue();

    const getLink=(currentPath)=>{
        if(currentPath!=='/'){
            if(currentPath.split('/').includes('login')){
                return currentPath;
            }else{
                return `${currentPath}/login`;
            }
        }else{
            return '/login';
        }
    }
    
    if(loggedIn){
        console.log(user)
        const stateGameScore=user.scores && user.scores[gameName]? user.scores[gameName] : 0;
        return(
            <div className={'saveScore'}>
                <button className={'roundedButton hoverPush'}>
                    TRY AGAIN
                </button>
                <h1>{'new score' +' : '+ stateGameScore}</h1>
                <h1>your current high score: {gameScore}</h1>
                <button className={'roundedButton hoverPush'}>
                    SEND
                </button>
            </div>
        )
    }
    return(
        <div className={'saveScore'}>
            <Link to={getLink(currentPath)}>you are not logged in click to log in</Link>
        </div>
    )
}

export default SaveScore