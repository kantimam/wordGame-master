import React from 'react'
import './userTab.css'

const logInForm = ({onChange, onSubmit, resetPassword, signUp}) => {
    return (
        <>
            <form onSubmit={onSubmit} className={'logInForm'}>
                <h3>LOG IN</h3>
                <input onChange={onChange} name='email' placeholder='email or username' type='email' minLength="2" required></input>
                <input onChange={onChange} name='password' placeholder='password' type='password' minLength="6" required></input>
                <div onClick={resetPassword} className={"resetPassword pointer"}>reset password</div>
                <input className={'submitButton'} type='submit'></input>        
            </form>
            <div className="logSignSwitch" onClick={signUp}>NO ACCOUNT? <strong>SIGN UP</strong></div>
        </>
    )
}

export default logInForm
