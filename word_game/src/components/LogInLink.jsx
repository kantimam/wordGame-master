import React from 'react'
import {useLocation, Link} from 'react-router-dom'
import './logInLink.css';

const LogInLink = ({currentPath}) => {
    const {pathname}=useLocation()

    return (
        <Link className={'textCenter undecoratedLink logInLink'} to={pathname==="/"?"/account/login":`${pathname}/account/login`}>
            log in to publish your performance
        </Link>
    )
}

export default LogInLink
