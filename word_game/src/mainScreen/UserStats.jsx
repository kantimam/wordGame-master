import React, {useState, useEffect} from 'react'
import TopScore from './TopScore.jsx';
import StatsChart from '../components/statsChartWrapper.jsx';
import axios from 'axios'
const BASEURL = process.env.REACT_APP_BE_URL;


const UserStats = ({loggedIn}) => {
    const [selectedGame, setGame]=useState("word")
    const [scores, setScores]=useState([])
    const [currentScore, setCurrent]=useState({score: 0, percent: 0})
    useEffect(() => {
        axios.get(`${BASEURL}/getstats/${selectedGame}`).then(res => {
            let scoreArr = []
            const score=16;
            const scorePercent=score? res.data[score] : null; 
            setCurrent({score: score, percent:  scorePercent})
            for (let key in res.data) {
                scoreArr.push({
                    score: key,
                    percent: res.data[key]
                })
            }
            setScores(scoreArr)
        })
    }, [selectedGame])


    return (
        
        <div className="userStatsWrapper">
            <select onChange={(event)=>setGame(event.target.value)}>
                <option value="word">word memory</option>
                <option value="number">number memory</option>
                <option value="reaction">reaction time</option>
            </select>
            <TopScore score={currentScore.score} percent={currentScore.percent} gameName={selectedGame}/>
            <StatsChart scores={scores}/>
        </div>
    )
}

export default UserStats
