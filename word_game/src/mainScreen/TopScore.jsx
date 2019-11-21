import React from 'react'

const TopScore = ({gameName}) => {
    const gameNamesData={
        word: "Word Memory",
        number: "number memory",
        reaction: "Reaction Time"
    }
    return (
        <div className={"topScore textCenter card"}>
            <h3 className="statsHeader">{gameNamesData[gameName]}</h3>
            <div>
                <h1>34</h1>
                <p>words</p>
                <p>Top <strong>{}%</strong></p>  
            </div>
        </div>
    )
}

export default TopScore
