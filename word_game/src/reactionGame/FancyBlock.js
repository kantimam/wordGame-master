import React from 'react'

export default (props) => {
  return (
    <div>
      <div onClick={()=>props.click(props.index)}
      style={{position: 'absolute',left: props.pos.x+'%',top: props.pos.y+'%',height: props.pos.len+'%'}} 
      className={'fancyBlock '}
      id={props.pos.alive?'block':'deadBlock'}>
      <p>{props.value || "200"}</p>
      </div>
    </div>
  )
}
