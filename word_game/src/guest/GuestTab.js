import React, { useEffect } from 'react';
import UserStats from '../mainScreen/UserStats.jsx';


const GuestTab = () => {
    return (
        <div id="guestStatsView" className="statsView">
            <div className={"welcomeUser centerAll"}>
                <h2>WELCOME GUEST</h2>
            </div>
            <UserStats loggedIn={false}/>
        </div>
    )
}

export default GuestTab
