import React, { useEffect } from 'react';
import UserStats from '../mainScreen/UserStats.jsx';


const GuestTab = () => {
    useEffect(() => {
    
        return () => {
            
        };
    }, [])
    return (
        <div id="guestStatsView" className="statsView">
            <div className={"welcomeUser centerAll"}>
                <h2>WELCOME GUEST</h2>
            </div>
            <UserStats/>
        </div>
    )
}

export default GuestTab
