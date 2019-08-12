import React from 'react'
import {Link} from 'react-router-dom';
import './logInLink.css';

const LogInLink = ({currentPath}) => {
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
        <Link className={'textCenter undecoratedLink logInLink'} to={getLink(currentPath)}>
            log in to publish your performance
        </Link>
    )
}

export default LogInLink
