import React from 'react'

const resetPasswordForm = ({onChange, onSubmit, confirm}) => {
    return (
        <form onSubmit={onSubmit} className={'logInForm'}>
            <h3>{confirm || "SEND RESET LINK TO"}</h3>
            <input onChange={onChange} name='email' placeholder='email or username' type='email' minLength="2" required></input>
            <input className={'submitButton'} type='submit' value="SEND"></input>        
        </form>
    )
}

export default resetPasswordForm
