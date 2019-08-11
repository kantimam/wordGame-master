import React, {useState} from 'react';
import { useStateValue } from '../context/AppContextHook';
import {Link} from 'react-router-dom';
import axios from 'axios';
const BASEURL=process.env.REACT_APP_BE_URL;


const SaveScore=({gameName, gameScore, currentPath})=>{
    const [{user, loggedIn},dispatch]=useStateValue();
    const [sendState,setSendState]=useState(0);

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
    const sendScore=(event)=>{
        event.preventDefault();
        const formData=new FormData();
        formData.set('game',gameName)
        formData.set('score',gameScore)
        axios.post(`${BASEURL}/setscore`,formData ,{withCredentials: true} ).then(res=>{
          console.log(res.data)
            dispatch({
              type: 'setScore',
              target: gameName,
              payload: gameScore
            })
            setSendState(2);
        }).catch((error)=>{
          setSendState(1);
          console.log(error)
        })
        console.log(sendState)
      }
    
    if(loggedIn){
        if(!sendState){
            const stateGameScore=user.scores && user.scores[gameName]? user.scores[gameName] : 0;
            return(
                <div className={'saveScore'}>
                    <button className={'roundedButton hoverPush'}>
                        TRY AGAIN
                    </button>
                    <h1>{'new score: '+gameScore}</h1>
                    <h1>your current high score: {stateGameScore}</h1>
                    <button onClick={sendScore} className={'roundedButton hoverPush'}>
                        SEND
                    </button>
                </div>
            )
        }
        else{
            return(
                <div className={'saveScore'}>
                    <h1>{sendState>1?"SUCESFULLY SEND YOUR SCORE" : "SOMETHING WENT WRONG"}</h1>
                </div>
            )
        }

        
    }
    return(
        <div className={'saveScore'}>
            <Link to={getLink(currentPath)}>you are not logged in click to log in</Link>
        </div>
    )
}

export default SaveScore