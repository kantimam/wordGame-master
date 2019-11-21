import React from 'react'
import {useHistory} from "react-router-dom"

const signUpForm = ({onChange, onSubmit, logIn}) => {
    const {push}=useHistory();

    return (
        <>
            <form onSubmit={onSubmit} className={'logInForm'}>
                <h3>SIGN UP</h3>
                <input onChange={onChange} name='userName' placeholder='username' type='text' minLength="2" required></input>
                <input onChange={onChange} name='email' placeholder='email' type='email' minLength="2" required></input>
                <input onChange={onChange} name='password' placeholder='password' type='password' minLength="6" required></input>
                <input onChange={onChange} name='passwordRe' placeholder='repeat password' type='password' minLength="6" required></input>      
                <input className={'submitButton'} type='submit'></input>             
            </form>
            <div className="logSignSwitch" onClick={()=>push("login")}>ALREADY HAVE AN ACCOUNT? <strong className="customLink">LOG IN!</strong></div>
        </>
    )
}

export default signUpForm
