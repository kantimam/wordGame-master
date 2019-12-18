import React, {memo} from 'react';
import UserStats from '../mainScreen/UserStats.jsx';


const GuestTab = ({user}) => {
    return (
        <div id="guestStatsView" className="statsView">
            <div className={"welcomeUser centerAll textUpper"}>
                <h2>WELCOME GUEST</h2>
            </div>
            <UserStats user={user}/>
        </div>
    )
}

export default memo(GuestTab)
