import React from 'react'
import UserStats from '../mainScreen/UserStats.jsx';




const User = ({user}) => {
  return (
    <div id="guestStatsView" className="statsView">
      <div className={"welcomeUser centerAll textUpper"}>
        <h2>WELCOME {user.name}</h2>
      </div>
      <UserStats user={user}/>
    </div>
  )
}

export default User
