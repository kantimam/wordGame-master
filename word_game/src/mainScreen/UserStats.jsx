import React, {useState} from 'react'
import TopScore from './TopScore.jsx';
import StatsChart from './statsChartWrapper.jsx';

const UserStats = () => {
    const [selectedGame, setGame]=useState("word")

    return (
        <>
            <select onChange={(event)=>setGame(event.target.value)}>
                <option value="word">word memory</option>
                <option value="number">number memory</option>
                <option value="reaction">reaction time</option>
            </select>
            <TopScore gameName={selectedGame}/>
            <StatsChart gameName={selectedGame}/>
        </>
    )
}

export default UserStats
