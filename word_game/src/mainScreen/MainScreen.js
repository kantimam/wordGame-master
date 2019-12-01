import React from 'react'
import GuestScreen from '../guest/GuestTab.js'
import User from '../loggedIn/User.js';



const MainScreen = ({loggedIn, user}) => {
  return (
    <div className={'maxWidth60 mainScreen'}>
      {loggedIn?
        <User user={user}/>:
        <GuestScreen/>
      }
    </div>
  )
}

export default MainScreen

