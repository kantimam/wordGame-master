import React from 'react'
import {Link} from 'react-router-dom'


const userInfo = ({loggedIn, userData}) => {
    return (
        <div className={'centerAll userInfo'}>
            <Link className={'somePadding undecoratedLink'} to='/'>LOG IN</Link>
        </div>
    )
}

export default userInfo
