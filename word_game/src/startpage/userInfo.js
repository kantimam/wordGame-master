import React from 'react'
import {Link} from 'react-router-dom'


const userInfo = ({loggedIn, userData, currentPath}) => {
    const getLink=(currentPath)=>{
        if(currentPath!=='/'){
            if(currentPath.split('/').includes('login')){
                return currentPath;
            }else{
                return `${currentPath}/login`;
            }
        }else{
            return '/login';
        }
    }

    return (
        <div className={'centerAll userInfo'}>
            {loggedIn? 
                <Link className={'somePadding undecoratedLink'} to='/'>Welcome {userData.userName}</Link>:
                <Link className={'somePadding undecoratedLink'} to={getLink(currentPath)}>LOG IN</Link>
            }
        </div>
    )
}

export default userInfo
