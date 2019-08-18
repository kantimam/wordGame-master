import React from 'react'

export default (props) => {
  const iconClass=props.hover? 'hoverPushAnimation '+props.iconClass : props.iconClass;
  return (
    <div style={{margin: '0 auto',display: 'flex',alignItems: 'center',flexWrap: 'wrap'}}>
      <i style={{margin: '0 auto',fontSize: '6rem'}} className={"hoverPushAnimation " +props.iconSrc}></i>
      
      {props.descText &&
        <p style={{display: 'block',textAlign: 'center',width: '100%',margin: '0'}}>{props.descText}</p>
      }  
    </div>
  )
}
