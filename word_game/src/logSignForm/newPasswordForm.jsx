import React from 'react'

const newPasswordForm = ({onSubmit, onChange}) => {
    return (
        <form onSubmit={onSubmit} className={'logInForm'}>
            <h3>CREATE NEW PASSWORD</h3>
            <input onChange={onChange} name='password' placeholder='password' type='password' minLength="6" required></input>
            <input onChange={onChange} name='passwordRe' placeholder='repeat password' type='password' minLength="6" required></input>      
            <input className={'submitButton'} type='submit'></input>        
        </form>
    )
}

export default newPasswordForm
