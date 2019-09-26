import React from 'react'
import NumGameDisp from './NumGameDisp'
import './numGame.css'
import Description from '../components/Description';

const NumGame=({location})=> {


  
    return (
      <>
        <div id='numGameContainer' className={'inner gradientBackground noUserSelect margin0Auto'}>
          <NumGameDisp location={location}/>
        </div>
        <Description
          header={""}
          text={""}
          gameName="number"
        />
      </>

    )
  
}

export default NumGame;
