import React from 'react'
import './userTab.css'
import {useHistory} from "react-router-dom"

const logInForm = ({onChange, onSubmit, confirm}) => {
    const {push}=useHistory();
    return (
        <>
            <form onSubmit={onSubmit} className={'logInForm'}>
                <h3>{confirm || "LOG IN"}</h3>
                <input onChange={onChange} name='email' placeholder='email or username' type='email' minLength="2" required></input>
                <input onChange={onChange} name='password' placeholder='password' type='password' minLength="6" required></input>
                <div onClick={()=>push("resetpassword")} className={"resetPassword pointer"}>reset password</div>
                <input className={'submitButton'} type='submit'></input>        
            </form>
            <div className="logSignSwitch" onClick={()=>push("signup")}>NO ACCOUNT? <strong className="customLink">SIGN UP</strong></div>
        </>
    )
}

export default logInForm
