import React from 'react'
import NumGameDisp from './NumGameDisp'
import './numGame.css'
import Description from '../components/Description';

const NumGame=({location})=> {


  
    return (
      <>
        <div className={'fullContainer gradientBackground noUserSelect moreHeight'}>
          <NumGameDisp location={location}/>
        </div>
        <Description
          header={""}
          text={""}
        />
      </>

    )
  
}

export default NumGame;
