import React, { useState } from 'react';
import { useStateValue } from '../context/AppContextHook';
import axios from 'axios';
import LogInLink from './LogInLink';
import './saveScore.css';
const BASEURL = process.env.REACT_APP_BE_URL;


const SaveScore = ({ gameName, gameScore, unit, currentPath, restart }) => {
    const [{ user, loggedIn }, dispatch] = useStateValue();
    const [sendState, setSendState] = useState(0);


    const sendScore = (event) => {
        event.preventDefault();
        if (scoreImproved()) {
            const formData = new FormData();
            formData.set('game', gameName)
            formData.set('score', gameScore)
            axios.post(`${BASEURL}/setscore`, formData, { withCredentials: true }).then(res => {
                dispatch({
                    type: 'setScore',
                    target: gameName,
                    payload: gameScore
                })
                setSendState(2);
            }).catch((error) => {
                setSendState(1);
            })
            console.log(sendState)
        } else console.log("your current score is higher")

    }

    const setGuestScore = (event) => {
        event.preventDefault();
        dispatch({
            type: 'setScore',
            target: gameName,
            payload: gameScore
        })
        setSendState(2);
    }

    const scoreImproved = () => {
        if(user){
            if (user.scores[gameName]) {
                if (gameName === "reaction") return (user.scores[gameName] > gameScore)
                return (user.scores[gameName] < gameScore)
            }return true;
        }return false;   
    }

    const stateGameScore = user.scores && user.scores[gameName] ? user.scores[gameName] : 0;
    return (
        <div className={'saveScore'}>
            {!sendState ?
                <>
                    <h1 className={'fadeIn saveScoreAnim1'}>{'score: ' + gameScore}{unit}</h1>
                    <h1 style={{ marginBottom: "1.4rem" }} className={'fadeIn saveScoreAnim2'}>your current high score: {stateGameScore}{unit}</h1>
                    {scoreImproved() &&
                        <button className={'fadeIn saveScoreAnim3 roundedButton hoverPush'} onClick={loggedIn ? sendScore : setGuestScore}>
                            SEND
                        </button>}
                </> :

                <h1 className={'fadeIn saveScoreAnim3'}>
                    {sendState > 1 ? "SUCESFULLY SEND YOUR SCORE" : "SOMETHING WENT WRONG"}
                </h1>


            }
            <button onClick={restart} style={{ marginTop: '2rem' }} className={'roundedButton hoverPush fadeIn saveScoreAnim4'}>
                TRY AGAIN
            </button>
            {!loggedIn && <LogInLink currentPath={currentPath} />}
        </div>
    )



}

export default SaveScore