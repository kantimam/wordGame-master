import React from 'react'
import './history.css'

export default () => {
  return (
    <div id='historyTab'>
      <p>YOUR SCORES</p>
      <div className={'historyHeader'}>
        <p>GAME</p>
        <p>SCORE</p>
        <p>PERCENT</p>
      </div>
      <div>
        <p>word game</p>
        <p>50</p>
        <p>97%</p>
      </div>
      <div>
        <p>memory game</p>
        <p>50</p>
        <p>97%</p>
      </div>
      <div>
        <p>reaction game</p>
        <p>50</p>
        <p>97%</p>
      </div>
      <div>
        <p>number game</p>
        <p>50</p>
        <p>97%</p>
      </div>
    </div>
  )
}
