import React from 'react'
import {Link} from 'react-router-dom'


const userInfo = ({loggedIn, userData}) => {
    return (
        <div className={'centerAll userInfo'}>
            {loggedIn? 
                <Link className={'somePadding undecoratedLink'} to='/'>Welcome {userData.userName}</Link>:
                <Link className={'somePadding undecoratedLink'} to='/login'>LOG IN</Link>
            }
        </div>
    )
}

export default userInfo
