import React from 'react'

const TopScore = ({ gameName, score, percent }) => {
    const gamesData = {
        word: { name: "Word Memory", unit: "words" },
        number: { name: "number memory", unit: "digits" },
        reaction: { name: "Reaction Time", unit: "ms" }
    }
    return (
        <div className={"topScore textCenter card"}>
            <h3 className="statsHeader">{gamesData[gameName].name}</h3>
            <div>
                <h1>{score || "NO SCORE"}</h1>
                <p>{gamesData[gameName].unit}</p>
                <p>Top <strong>{percent || "? "}%</strong></p>
            </div>
        </div>
    )
}

export default TopScore
