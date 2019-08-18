import React from 'react'

export default (props) => {
  return (
    <div className={'flexToCenter'}>
      <div>
        <p className={'alignCenter'}>YOUR SCORE</p>
        <h1>{props.score}</h1>
        <button onClick={props.restart} id='newGameButton' className={'hoverPush'}>
          TRY AGAIN
        </button>
      </div>
    </div>
  )
}
