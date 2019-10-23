import React from 'react'

const TopScore = ({gameName}) => {
    const gameNamesData={
        word: "word memory",
        number: "number memory",
        reaction: "reaction time"
    }
    return (
        <div className={"topScore"}>
            <h1 className="statsHeader">top {gameNamesData[gameName]} score</h1>
        </div>
    )
}

export default TopScore
