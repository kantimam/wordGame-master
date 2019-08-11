import React from 'react'
import NumGameDisp from './NumGameDisp'
import './numGame.css'

const NumGame=({location})=> {


  
    return (
      <div className={'fullContainer gradientBackground noUserSelect moreHeight'}>
        <NumGameDisp location={location}/>
      </div>
    )
  
}

export default NumGame;
