import React, {useState} from 'react';
import { useStateValue } from '../context/AppContextHook';
import {Link} from 'react-router-dom';
import axios from 'axios';
import LogInLink from './LogInLink';
const BASEURL=process.env.REACT_APP_BE_URL;


const SaveScore=({gameName, gameScore, currentPath, restart})=>{
    const [{user, loggedIn},dispatch]=useStateValue();
    const [sendState,setSendState]=useState(0);


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
    
    const stateGameScore=user.scores && user.scores[gameName]? user.scores[gameName] : 0;
    return(
        <div className={'saveScore'}>
            {
                loggedIn?
                    !sendState?
                    <>
                        <h1>{'score: '+gameScore}</h1>
                        <h1>your current high score: {stateGameScore}</h1>
                        <button onClick={sendScore} className={'roundedButton hoverPush'}>
                            SEND
                        </button>
                    </>:
                    <h1>{sendState>1?"SUCESFULLY SEND YOUR SCORE" : "SOMETHING WENT WRONG"}</h1>:
                <>                    
                    <LogInLink currentPath={currentPath}/>
                    <h1>{'score: '+gameScore}</h1>
                </>

            }
            <button onClick={restart} style={{marginTop: '2rem'}} className={'roundedButton hoverPush'}>
                TRY AGAIN
            </button>
        </div>
    )
    
    

}

export default SaveScore