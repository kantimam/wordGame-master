import React from 'react'
import GuestScreen from '../guest/GuestTab.js'
import User from '../loggedIn/User.js';



const MainScreen = ({loggedIn}) => {
  return (
    <div className={'maxWidth60 mainScreen'}>
      {loggedIn?
        <User/>:
        <GuestScreen/>
      }
    </div>
  )
}

export default MainScreen

