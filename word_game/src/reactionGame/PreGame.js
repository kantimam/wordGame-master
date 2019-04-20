import React from 'react'

export default (props) => {
  return (
    <div>
      <h1 style={{margin: '0',padding: '2rem 0'}}>GOOD JOB</h1>
      <button className={'centerAll roundedButton hoverPush'} onClick={props.startGame}>NEW GAME</button>
    </div>
  )
}
