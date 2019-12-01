import React from 'react'
import {useRouteMatch} from 'react-router-dom'

const newPasswordForm = ({onSubmit, onChange}) => {
    const {params}=useRouteMatch()
    console.log(params)
    const newPassword=(event)=>{
        event.prevenDefault();
        onSubmit(params.key, params.email)
    }
    return (
        <form onSubmit={newPassword} className={'logInForm'}>
            <h3>CREATE NEW PASSWORD</h3>
            <input onChange={onChange} name='password' placeholder='password' type='password' minLength="6" required></input>
            <input onChange={onChange} name='passwordRe' placeholder='repeat password' type='password' minLength="6" required></input>      
            <input className={'submitButton'} type='submit'></input>        
        </form>
    )
}

export default newPasswordForm
