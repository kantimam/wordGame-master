import React from 'react'
import GuestScreen from '../guest/GuestTab.js'
import User from '../loggedIn/User.js';



const MainScreen = ({loggedIn}) => {
  return (
    <div className={'mainScreen'} id='welcomeBanner'>
    <div className={'maxWidth60'}>
      {loggedIn?
        <User/>:
        <GuestScreen/>
      }
    </div>
  </div>
  )
}

export default MainScreen

