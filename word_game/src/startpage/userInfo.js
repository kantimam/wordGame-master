import React from 'react'
import {Link} from 'react-router-dom'
import { useStateValue } from '../context/AppContextHook';


const userInfo = ({currentPath}) => {
    
    const [{user, loggedIn}, dispatch]=useStateValue();

    const getLink=(currentPath)=>{
        if(currentPath!=='/'){
            if(currentPath.split('/').includes('login')){
                return currentPath;
            }else{
                return `${currentPath}/account/login`;
            }
        }else{
            return '/account/login';
        }
    }

    return (
        <div className={'centerAll userInfo'}>
            {loggedIn? 
                <div className={'somePadding undecoratedLink centerAll'}>
                    <p onClick={()=>dispatch({type: 'logOut'})} style={{margin: '0 1rem'}}>
                        LOG OUT
                    </p>
                    welcome {user.name}
                </div>:
                <Link className={'somePadding undecoratedLink'} to={getLink(currentPath)}>LOG IN</Link>
            }
        </div>
    )
}

export default userInfo
