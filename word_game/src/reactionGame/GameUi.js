import React from 'react'

export default (props) => {
  return (
    <div className={'flexSpaceBetween roundedBorder'}>
      <p className={'noMargin'}>SCORE: {props.score}</p>
      <p className={'noMargin'}>SPEED: {props.speed}</p>
      <div>SETTINGS</div>
    </div>
  )
}
