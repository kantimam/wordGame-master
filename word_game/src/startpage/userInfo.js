import React from 'react'
import {useLocation, Link} from 'react-router-dom'
import { useStateValue } from '../context/AppContextHook';


const userInfo = () => {
    const {pathname}=useLocation()
    const [{user, loggedIn}, dispatch]=useStateValue();

    return (
        <div className={'centerAll userInfo'}>
            {loggedIn? 
                <div className={'somePadding undecoratedLink centerAll'}>
                    <p onClick={()=>dispatch({type: 'logOut'})} style={{margin: '0 1rem'}}>
                        LOG OUT
                    </p>
                    welcome {user.name}
                </div>:
                <Link className={'somePadding undecoratedLink'} to={pathname==="/"?"/account/login":`${pathname}/account/login`}>LOG IN</Link>
            }
        </div>
    )
}

export default userInfo
