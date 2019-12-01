import React from 'react'
import axios from 'axios'
import {useLocation, Link} from 'react-router-dom'
import { useStateValue } from '../context/AppContextHook';
const BASEURL=process.env.REACT_APP_BE_URL;


const userInfo = () => {
    const {pathname}=useLocation()
    const [{user, loggedIn}, dispatch]=useStateValue();

    const logOut=()=>{
        axios(`${BASEURL}/logout`)
            .then(data=>dispatch({type: 'logOut'}))
            .catch(e=>{
                console.log(e);
                dispatch({type: 'logOut'})
            }
        )
        
    }

    return (
        <div className={'centerAll userInfo'}>
            {loggedIn? 
                <div className={'somePadding undecoratedLink centerAll'}>
                    <p onClick={logOut} style={{margin: '0 1rem'}}>
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
