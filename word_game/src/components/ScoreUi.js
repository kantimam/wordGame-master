import React from 'react'

export default (props) => {
  return (
    <div className={"fullWidthFlex"}>
      <div id='maxLivesDiv' className='halfWidth'>{props.lifes} : LIVES</div>
      <div className='verticalLine'></div>
      <div id='maxScoreDiv' className='halfWidth'>SCORE : {props.score}</div>
    </div>
  )
}
