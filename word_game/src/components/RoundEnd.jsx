import React from 'react'
import './saveScore.css'

const AfterGame = ({number, numberEntered, lifes, nextRound, saveScore}) => {
    console.log(numberEntered)
    const handleNext=()=>{
        if(lifes){
            return nextRound()
        }
        return saveScore()
    }
    return (
        <div className={'saveScore'}>
            <h1 className={'fadeIn saveScoreAnim1 realNumber'}>{number}</h1>
            <h2 
                style={number===numberEntered?{textDecorationLine: 'none'}:{textDecorationLine: 'line-through'}} 
                className={'fadeIn saveScoreAnim2 inputNumber'}
            >
                {numberEntered}
            </h2>
            <button 
                onClick={handleNext} 
                style={{marginTop: '2rem'}} 
                className={'mainButton hoverPush'}>
                  NEXT
            </button>
        </div>
    )
}

export default AfterGame
