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
        return(
            <div className={'centerAll'}>
                <p>{gameName +' : '+ user.score? user.score[gameName] : 0}</p>
                <p>current Score: {gameScore}</p>
            </div>
        )
    }
    return(
        <div className={'centerAll'}>
            <Link to={getLink(currentPath)}>you are not logged in click to log in</Link>
        </div>
    )
}

export default SaveScore